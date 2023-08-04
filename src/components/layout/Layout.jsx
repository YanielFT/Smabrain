import { Footer } from "./Footer";
import classes from "./Layout.module.css";
import { MainNavigation } from "./MainNavigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={classes["layout"]}>
      <MainNavigation className={classes.nav} />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer className={classes.footer} />
    </div>
  );
};
