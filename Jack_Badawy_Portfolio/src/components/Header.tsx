import "../Styles/Header.scss";
import logo from "../img/jack_logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Personal Logo" />
    </div>
  );
};

export default Header;
