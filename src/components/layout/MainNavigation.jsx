import classes from "./MainNavigation.module.css";
import logoSmaBrain from "../../assets/Group 5.svg";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

export const MainNavigation = () => {
  const [toggle, setToggle] = useState("");
  const showMenuHandler = () => {
    setToggle((prev) => (prev = !prev));
  };

  const local = useLocation();

  const hiddenHandler = () => {
    setToggle('');
  }

  return (
    <>
      {toggle &&
        ReactDOM.createPortal(
          <Backdrop onClick={showMenuHandler} />,
          document.getElementById("overlays")
        )}
      <header className={classes["header"]}>
        <div className={classes["header-container"]}>
          <img
            className={classes.logo}
            src={logoSmaBrain}
            alt="Logo SMaBrain"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="5"
            viewBox="0 0 24 5"
            fill="none"
            className={classes["toggle"]}
            onClick={showMenuHandler}
          >
            <circle cx="2.81794" cy="2.57185" r="2.35359" fill="#F4D419" />
            <circle cx="12.2325" cy="2.57185" r="2.35359" fill="#F4D419" />
            <circle cx="21.6466" cy="2.57185" r="2.35359" fill="#F4D419" />
          </svg>
          <nav className={classes.nav}>
            <ul>
              <li>
                {local.pathname === "/" ? (
                  <a href="/#talent-pool">Talent Pool</a>
                ) : (
                  <Link to="/#talent-pool">Talent Pool</Link>
                )}
              </li>
              <li>
                {local.pathname === "/" ? (
                  <a href="/#empleo">Ofertas de Empleo</a>
                ) : (
                  <Link to="/#empleo">Ofertas de Empleo</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <nav className={`${classes["menu"]} ${toggle ? classes["show"] : ""}`}>
        <ul>
          <li>
            {local.pathname === "/" ? (
              <a href="/#talent-pool" onClick={hiddenHandler}>Talent Pool</a>
            ) : (
              <Link to="/#talent-pool">Talent Pool</Link>
            )}
          </li>
          <li>
            {local.pathname === "/" ? (
              <a href="/#empleo" onClick={hiddenHandler}>Ofertas de Empleo</a>
            ) : (
              <Link to="/#empleo">Ofertas de Empleo</Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
