import spotifyLogo from "../../src/assets/images/spotify-logo.svg";

export default function Nav() {
  return (
    <div className="site-header">
      <a href="#">
        <img src={spotifyLogo} alt="spotify logo" />
      </a>
      <nav>
        <div className="site-header__left-links">
          <a href="#">Sign up</a>
          <a href="#">Log in</a>
        </div>
        <div className="site-header__right-links">
          <a href="#">Premium</a>
          <a href="#">Support</a>
        </div>
        <a href="#">Download</a>
      </nav>
    </div>
  );
}
