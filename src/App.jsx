import { useState, useEffect, useCallback } from "react";
import "./style.css";
import SvgSprite from "./components/SvgSprite";
import Footer from "./components/Footer";
import useClientDetect from "./hooks/useClientDetect";
import moonImg from "./sample-assets/moon.jpeg";
import jkooImg from "./sample-assets/jkoo.jpeg";
import wineImg from "./sample-assets/wine.jpeg";

// Sections in order
const SECTIONS = ["home", "about", "interest", "aus"];

// ─── Home Section ────────────────────────────────────────────────────────────
function HomeSection({ onNext }) {
  return (
    <>
      {/* container01: moon banner gallery */}
      <div id="container01" className="container default">
        <div className="wrapper">
          <div className="inner">
            <div id="gallery01" className="gallery">
              <div className="inner">
                <ul>
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault();
                        onNext();
                      }}
                      className="thumbnail n01"
                    >
                      <span className="frame">
                        <img src={moonImg} alt="moon" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* container02: jk image + search button (columns layout) */}
      <div id="container02" className="container columns">
        <div className="wrapper">
          <div className="inner">
            <div>
              <div id="image01" className="image">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNext();
                  }}
                  className="frame"
                >
                  <img src={jkooImg} alt="the circle jk" />
                </a>
              </div>
            </div>
            <div>
              <ul id="buttons01" className="buttons">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      onNext();
                    }}
                    className="button n01"
                  >
                    <svg aria-labelledby="icon-search-title">
                      <title id="icon-search-title">Search</title>
                      <use xlinkHref="#icon-1e6a79e1900cb033a0da29d025316541" />
                    </svg>
                    <span className="label">what are you looking for?</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── About Section ───────────────────────────────────────────────────────────
function AboutSection({ onNext }) {
  return (
    <>
      {/* container05: about banner gallery */}
      <div id="container05" className="container default">
        <div className="wrapper">
          <div className="inner">
            <div id="gallery03" className="gallery">
              <div className="inner">
                <ul>
                  <li>
                    <a
                      href="#interest"
                      onClick={(e) => {
                        e.preventDefault();
                        onNext();
                      }}
                      className="thumbnail n01"
                    >
                      <span className="frame">
                        <img src={wineImg} alt="ABOUT ME" />
                      </span>
                    </a>
                    <div className="caption">
                      <p>ABOUT ME</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* container06: about text card */}
      <div id="container06" className="container default">
        <div className="wrapper">
          <div className="inner">
            <h2 id="text03">
              <span className="p">
                <strong>♡</strong> hi ! I'm{" "}
                <em>
                  <strong>mock data</strong>
                </em>{" "}
                &lt;3
                <br />
                <strong>♡</strong> mockdata
                <br />
                <strong>♡</strong> mockdata
                <br />
                <mark>
                  <strong>!!!</strong> mockdata mockdata mockdata mockdata
                  mockdata mockdata mockdata
                </mark>
                <br />
                <strong>♡</strong> mockdata mockdata mockdata
                <br />
                <strong>♡</strong> mockdata mockdata mockdata
                <br />
                <strong>♡</strong> mockdata mockdata mockdata
                <br />
                <strong>♡</strong> mockdata mockdata mockdata
                <br />
                <strong>♡</strong> mockdata mockdata mockdata mockdata mockdata
                mockdata mockdata mockdata mockdata mockdata mockdata mockdata
                <br />
                <strong>♡</strong> mockdata mockdata mockdata
              </span>
            </h2>
            <p id="text04">@ mockdata </p>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Interest Section ────────────────────────────────────────────────────────
function InterestSection() {
  return (
    <>
      {/* container07: interest banner gallery */}
      <div id="container07" className="container default">
        <div className="wrapper">
          <div className="inner">
            <div id="gallery02" className="gallery">
              <div className="inner">
                <ul>
                  <li>
                    <span className="frame">
                      <img src={wineImg} alt="INTEREST" />
                    </span>
                    <div className="caption">
                      <p>INTEREST</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* container08: interest text card */}
      <div id="container08" className="container default">
        <div className="wrapper">
          <div className="inner">
            <h2 id="text01">
              <span className="p">
                <strong>♡</strong> mockdata
                <br />
                <strong>♡</strong> mockdata mockdata mockdata
                <br />
                <strong>♡</strong> mockdata mockdata mockdata mockdata mockdata
                mockdata
                <br />
                <strong>♡</strong> mockdata mockdata mockdata
              </span>
            </h2>
          </div>
        </div>
      </div>

      <p id="text02">@ mockdata </p>
    </>
  );
}

// ─── Aus Section ─────────────────────────────────────────────────────────────
function AusSection() {
  return (
    <>
      <div id="container03" className="container default">
        <div className="wrapper">
          <div className="inner"></div>
        </div>
      </div>
      <div id="container04" className="container default">
        <div className="wrapper">
          <div className="inner"></div>
        </div>
      </div>
    </>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
function App() {
  const getInitialSection = () => {
    const hash = window.location.hash
      ? window.location.hash.substring(1).toLowerCase()
      : "";
    return SECTIONS.includes(hash) ? hash : "home";
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);
  const [transitioning, setTransitioning] = useState(false);

  // Body loading animation
  useEffect(() => {
    const t1 = setTimeout(() => {
      document.body.classList.remove("is-loading");
      document.body.classList.add("is-playing");
      const t2 = setTimeout(() => {
        document.body.classList.remove("is-playing");
        document.body.classList.add("is-ready");
      }, 1000);
      return () => clearTimeout(t2);
    }, 100);
    return () => clearTimeout(t1);
  }, []);

  // Hash change listener (browser back/forward)
  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash
        ? window.location.hash.substring(1).toLowerCase()
        : "home";
      const section = SECTIONS.includes(hash) ? hash : "home";
      if (section !== activeSection) doNavigate(section);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [activeSection, transitioning]);

  // Navigate with fade transition
  const doNavigate = useCallback(
    (name) => {
      if (transitioning || name === activeSection) return;
      setTransitioning(true);
      window.scrollTo(0, 0);
      const hash = name === "home" ? "" : name;
      history.pushState(null, null, "#" + hash);
      // fade out → swap → fade in (CSS handles opacity via .active / .inactive classes)
      setTimeout(() => {
        setActiveSection(name);
        setTimeout(() => setTransitioning(false), 500);
      }, 250);
    },
    [activeSection, transitioning],
  );

  // _nextSection(): go to next section in order
  const nextSection = useCallback(() => {
    const idx = SECTIONS.indexOf(activeSection);
    if (idx < SECTIONS.length - 1) doNavigate(SECTIONS[idx + 1]);
  }, [activeSection, doNavigate]);

  useClientDetect();

  const renderSectionContent = (name) => {
    switch (name) {
      case "home":
        return <HomeSection onNext={nextSection} />;
      case "about":
        return <AboutSection onNext={nextSection} />;
      case "interest":
        return <InterestSection />;
      case "aus":
        return <AusSection />;
      default:
        return null;
    }
  };

  return (
    <>
      <SvgSprite />
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            {SECTIONS.map((name) => {
              const isActive = name === activeSection;
              return (
                <section
                  key={name}
                  id={`${name}-section`}
                  className={isActive ? "active" : "inactive"}
                  style={isActive ? {} : { display: "none" }}
                >
                  {renderSectionContent(name)}
                </section>
              );
            })}
            <Footer onNavigate={doNavigate} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
