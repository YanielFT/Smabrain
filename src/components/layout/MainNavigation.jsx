import classes from "./MainNavigation.module.css";
import logoSmaBrain from "../../assets/Group 5.svg";
import { useState } from "react";
import ReactDOM  from "react-dom";


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick = {props.onClick}></div>;
};

export const MainNavigation = () => {
  const [toggle, setToggle] = useState('');
  const showMenuHandler = () => {
    setToggle(prev => prev = !prev)
  }


  return (
    <>
    {toggle && ReactDOM.createPortal(<Backdrop onClick = {showMenuHandler}/>, document.getElementById("overlays"))}
      <header className={classes['header']}>
        <div className={classes["header-container"]}>
        <img className={classes.logo} src={logoSmaBrain} alt="Logo SMaBrain" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="5"
          viewBox="0 0 24 5"
          fill="none"
          className={classes['toggle']}
          onClick={showMenuHandler}
        >
          <circle cx="2.81794" cy="2.57185" r="2.35359" fill="#F4D419" />
          <circle cx="12.2325" cy="2.57185" r="2.35359" fill="#F4D419" />
          <circle cx="21.6466" cy="2.57185" r="2.35359" fill="#F4D419" />
        </svg>
        <nav className={classes.nav}>
          <ul>
            <li>Talent Pool</li>
            <li>Ofertas de Empleo</li>
          </ul>
        </nav>
        </div>
      </header>

      <nav className={`${classes['menu']} ${toggle ? classes['show'] : ''}`}>
          <ul>
            <li><a href="#">Talent Pool</a></li>
            <li><a href="#">Ofertas de Empleo</a></li>
          </ul>
        </nav>
    </>
  );
};
