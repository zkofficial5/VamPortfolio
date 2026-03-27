const Footer = ({ onNavigate }) => {
  return (
    <footer id="footer">
      <div id="container09" className="container default">
        <div className="wrapper">
          <div className="inner">
            <ul id="buttons02" className="buttons">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("home");
                  }}
                  className="button n01"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("about");
                  }}
                  className="button n02"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#interest"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("interest");
                  }}
                  className="button n03"
                >
                  INTEREST
                </a>
              </li>
            </ul>

            <ul id="icons01" className="icons">
              <li>
                <a className="n01" href="#">
                  <svg aria-labelledby="icon-folder-title">
                    <title id="icon-folder-title">Folder</title>
                    <use xlinkHref="#icon-c6f1ad9e8afe210cf10e8df8e4c537f6" />
                  </svg>
                  <span className="label">Folder</span>
                </a>
              </li>
              <li>
                <a className="n02" href="">
                  <svg aria-labelledby="icon-cc-title">
                    <title id="icon-cc-title">Curious Cat</title>
                    <use xlinkHref="#icon-ba0c59a528162dbd57aa3ec2450903c3" />
                  </svg>
                  <span className="label">Curious Cat</span>
                </a>
              </li>
              <li>
                <a className="n03" href="">
                  <svg aria-labelledby="icon-ao3-title">
                    <title id="icon-ao3-title">Archive of Our Own</title>
                    <use xlinkHref="#icon-9bb23408d792274a0074434dc67c43a5" />
                  </svg>
                  <span className="label">Archive of Our Own</span>
                </a>
              </li>
              <li>
                <a className="n04" href="">
                  <svg aria-labelledby="icon-twitter-title">
                    <title id="icon-twitter-title">Twitter</title>
                    <use xlinkHref="#icon-0c4db87eff374f0f1ef47f8f043f0132" />
                  </svg>
                  <span className="label">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="credits" className="icc-credits"></div>
    </footer>
  );
};

export default Footer;
