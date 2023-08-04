import { ApplyButton } from "../components/UI/ApplyButton";
import { Cv } from "../components/UI/Cv";
import { Input } from "../components/UI/Input";

import classes from "./OfferDetailPage.module.css";

export const OfferDetailPage = () => {
  return (
    <section className={classes.offer}>
      <h1 className={`font-gradient`}>Oferta de empleo</h1>

      <div className={classes["offer-container"]}>
        <div className={classes.card}>
          <span>*</span>
          <h1 className={classes["offer-title"]}>
            Buscamos Desarrollador Backend
          </h1>
          <h2 className={classes["offer-subtitle"]}>
            Con conocimientos avanzados en Lenguaje Java
          </h2>
          <p className={classes["offer-description"]}>
            SMaBrain no es más que la incubadora de talentos de SMABIT, un
            proyecto fundado para dar seguimiento a profesionales del sector del
            desarrollo de SW y HW, que tengan interés en formar parte de nuestro
            equipo eventualmente. Profundamente enlazados al proceso de
            reclutamiento de talentos que necesita nuestra empresa para
            venideros proyectos.
          </p>
        </div>

        <form className={classes.form}>
          <Input type="text" placeholder="Nombre y apellidos" id="email" />
          <Input type="email" placeholder="E-mail" id="email" />
          <Cv placeholder="Adjunte su CV en PDF" id="cv" key="cv" />

          <ApplyButton>Aplicar</ApplyButton>
        </form>
      </div>
    </section>
  );
};
