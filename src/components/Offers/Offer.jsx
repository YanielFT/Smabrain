import { Link, useNavigate } from "react-router-dom";
import classes from "./Offer.module.css";

export const Offer = ({ id,title, description }) => {
  const nav = useNavigate()

  let container;
  if (title == null) {
    container = (
      <div className={classes["no-offer"]}>
        <h1>Oferta de empleo</h1>
      </div>
    );
  } else if (description == null) {
    container = (
      <div className={classes["no-offer"]}>
        <h1>Oferta de empleo</h1>
      </div>
    );
  }

  const onCLick = () => {
    nav('/offers/'+id)
  }

  return (
    <>
      {title && description && (
        <div onClick={onCLick} className={classes.card}>
          <div>
            <span>*</span>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>

          <div className={classes.footer}>
            <h3>no dudes en <br className="mobile"/> <br className="tablet"/> aplicar</h3>
          </div>
        </div>
      )}
      {!title && !description && container}
    </>
  );
};
