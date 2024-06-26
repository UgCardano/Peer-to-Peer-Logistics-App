import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import Logo from "../../ui/logo";
import ConnectWallect from "../connect-wallet";
import Searchbar from "../searchbar";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  return (
    <header className={`${styles.header} ${!isHomePage ? styles.small : ""}`}>
      <nav className="container">
        <Logo />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/send">Send Parcel</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <ConnectWallect />
      </nav>
      {isHomePage && <Searchbar />}
    </header>
  );
}
