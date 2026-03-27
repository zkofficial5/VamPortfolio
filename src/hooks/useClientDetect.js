import { useEffect } from 'react'

const useClientDetect = () => {
  useEffect(() => {
    const ua = navigator.userAgent

    // Detect OS
    let os = 'other'
    let osVersion = 0
    const osPatterns = [
      ['ios', /([0-9_]+) like Mac OS X/, (v) => v.replace('_', '.').replace('_', '')],
      ['ios', /CPU like Mac OS X/, () => 0],
      ['ios', /iPad; CPU/, () => 0],
      ['android', /Android ([0-9\.]+)/, null],
      ['mac', /Macintosh.+Mac OS X ([0-9_]+)/, (v) => v.replace('_', '.').replace('_', '')],
      ['windows', /Windows NT ([0-9\.]+)/, null],
    ]
    for (let i = 0; i < osPatterns.length; i++) {
      const match = ua.match(osPatterns[i][1])
      if (match) {
        os = osPatterns[i][0]
        osVersion = parseFloat(osPatterns[i][2] ? osPatterns[i][2](match[1]) : match[1])
        break
      }
    }

    // iPad detection via touch
    if (
      os === 'mac' && 'ontouchstart' in window &&
      (
        (screen.width === 1024 && screen.height === 1366) ||
        (screen.width === 834 && screen.height === 1112) ||
        (screen.width === 810 && screen.height === 1080) ||
        (screen.width === 768 && screen.height === 1024)
      )
    ) os = 'ios'

    const isMobile = os === 'android' || os === 'ios'

    // Check dvw support
    const testEl = document.createElement('div')
    testEl.style.width = '100dvw'
    const lsdUnits = testEl.style.width !== ''

    // Mobile viewport height fix
    if (isMobile) {
      if (lsdUnits) {
        document.documentElement.style.setProperty('--viewport-height', '100svh')
        document.documentElement.style.setProperty('--background-height', '100lvh')
      } else {
        const setHeight = () => {
          document.documentElement.style.setProperty('--viewport-height', window.innerHeight + 'px')
          document.documentElement.style.setProperty('--background-height', (window.innerHeight + 250) + 'px')
        }
        setHeight()
        const onOrient = () => setTimeout(setHeight, 100)
        window.addEventListener('orientationchange', onOrient)
        return () => window.removeEventListener('orientationchange', onOrient)
      }
      document.body.classList.add('is-touch')
    }

    // Android body height fix
    if (os === 'android') {
      const style = document.createElement('style')
      document.head.appendChild(style)
      const setH = () => {
        const h = Math.max(screen.width, screen.height) + 'px'
        if (style.sheet.cssRules.length === 0)
          style.sheet.insertRule(`body::after { height: ${h}; }`, 0)
        else
          style.sheet.cssRules[0].style.height = h
      }
      window.addEventListener('load', setH)
      window.addEventListener('orientationchange', setH)
      window.addEventListener('touchmove', setH)
    }

    // iOS old version fixes
    if (os === 'ios' && osVersion <= 11) {
      const s1 = document.createElement('style')
      document.head.appendChild(s1)
      s1.sheet.insertRule('body::after { -webkit-transform: scale(1.0); }', 0)

      const s2 = document.createElement('style')
      document.head.appendChild(s2)
      s2.sheet.insertRule('body.ios-focus-fix::before { height: calc(100% + 60px); }', 0)
      const onFocus = () => document.body.classList.add('ios-focus-fix')
      const onBlur = () => document.body.classList.remove('ios-focus-fix')
      window.addEventListener('focus', onFocus, true)
      window.addEventListener('blur', onBlur, true)
      return () => {
        window.removeEventListener('focus', onFocus, true)
        window.removeEventListener('blur', onBlur, true)
      }
    }
  }, [])
}

export default useClientDetect
