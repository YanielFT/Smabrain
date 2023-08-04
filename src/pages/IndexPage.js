import classes from "./IndexPage.module.css";
import logo from "../assets/Group 5.svg";
import logo2 from "../assets/Group.svg";
import { ApplyForm } from "../components/Appy/ApplyForm";
import { Offer } from "../components/Offers/Offer";

export const IndexPage = () => {
  return (
    <>
      <section className={classes.banner}>
        <div className={classes.decoration}></div>

        <div className={classes.info}>

          <h1>Una oportunidad <br className="tablet"/> que no <br className="mobile"/> puedes dejar <br className="mobile"/> pasar</h1>
          <h3>Tu Talento <br/> siempre es bienvenido</h3>
        </div>
      </section>

      <section className={classes.introduction}>
        <div className={classes['introduction-container']}>
        <h1>¿Qué es SMaBrain?</h1>
        <h4>
          SMaBrain no es más que la incubadora de talentos de SMABIT, un
          proyecto fundado para dar seguimiento a profesionales del sector del
          desarrollo de SW y HW, que tengan interés en formar parte de nuestro
          equipo eventualmente. Profundamente enlazados al proceso de
          reclutamiento de talentos que necesita nuestra empresa para venideros
          proyectos.
        </h4>
        </div>
      </section>

      <section className={classes.advantage}>
        <div className={classes["advantage-container"]}>
          <img className={classes.logo} src={logo} alt="logo SMaBrain" />

          <h2 className={classes["advantage-title"]}>
            Beneficios de SMaBrain <br/> para los profesionales <br className="mobile"/> que aplican
          </h2>
          <h4 className={classes["advantage-description"]}>
            Un proceso de aplicación totalmente automatizado y muy intuitivo.{" "}
          </h4>
          <h4 className={classes["advantage-description"]}>
            Creación de un perfil listo para ser elegido para nuestros puestos
            de trabajo o nuevos proyectos en cualquier momento, teniendo ventaja
            ante los aplicantes que no comienzan su proceso de selección
            mediante SMaBrain
          </h4>
          <h4 className={classes["advantage-description"]}>
            Conocerán de primera mano las ofertas laborales.{" "}
          </h4>
          <h4 className={classes["advantage-description"]}>
            En caso de postularse a una vacante laboral, el proceso de selección
            será más rápido, ya que estará en nuestro sistema toda la
            información requerida.
          </h4>

          <hr className={classes.hr} />

          <section className={classes["advantage-container"]}>
            <img
              className={classes["logo-smabit"]}
              src={logo2}
              alt="Logo SmaBit"
            />
            <h2 className={classes["advantage-title"]}>
              Beneficios de trabajar para <br/> SMaBiT GmbH
            </h2>
            <h4 className={classes["advantage-description"]}>
              Gozarás de un horario flexible y posibilidad de trabajo remoto.
              Trabajarás muy cómodo desde la oficina si así fuera el caso,
              gozamos de las mejores condiciones de trabajo, buena conexión a
              internet y cafecito.
            </h4>
            <h4 className={classes["advantage-description"]}>
              Tendrás la posibilidad de usar los dispositivos tecnológicos que
              necesites para trabajar
            </h4>

            <h4 className={classes["advantage-description"]}>
              Te ayudamos en la adquisición de las licencias de software
              necesarias.
            </h4>
            <h4 className={classes["advantage-description"]}>
              Un Team muy unido que te brindará la ayuda que necesites en cada
              proyecto y en tu constante superación.
            </h4>
          </section>
        </div>
      </section>

      <section className={classes["talent-pool"]}>
        <div className={classes["container-talent"]}>
          <div className={classes["talent-pool_info"]}>
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="141"
              viewBox="0 0 50 141"
              fill="none"
              className={classes.parenthesis}
            >
              <path
                d="M48.6596 127.972L49.0351 127.633L48.6921 127.261C43.8459 122.011 39.79 117.126 36.5219 112.604C33.2561 108.041 30.6437 103.573 28.681 99.2021C26.7188 94.8316 25.3145 90.3286 24.4675 85.6924C23.6193 81.0048 23.1941 75.8866 23.1941 70.3363C23.1941 64.7894 23.6637 59.6291 24.6007 54.854C25.5822 50.081 27.099 45.4641 29.1513 41.0026C31.2048 36.5384 33.8408 32.0695 37.0618 27.5959L37.0632 27.594C40.2867 23.0722 44.1627 18.3443 48.693 13.4102L49.0341 13.0387L48.6596 12.7008L36.249 1.50424L35.9218 1.20909L35.5879 1.49654C28.4598 7.63215 22.2753 14.1094 17.0365 20.9288C11.7884 27.7604 7.73848 35.2266 4.888 43.3256C2.03373 51.4353 0.610352 60.4408 0.610352 70.3363C0.610352 80.2318 2.03373 89.2373 4.888 97.347C7.73848 105.446 11.7884 112.912 17.0365 119.744C22.2753 126.563 28.4598 133.04 35.5879 139.176L35.9218 139.464L36.249 139.168L48.6596 127.972Z"
                stroke="#F4D419"
              />
            </svg>

            <div className={classes["container-title"]}>
              <h2 className={`primary-color ${classes.brand}`}>
                Si estás interesado <br/> en pertenecer a nuestro{" "}
              </h2>
              <h2 className={`f-800 primary-color ${classes["brand-talent"]}`}>
                Talent Pool
              </h2>
              <h1 className="font-gradient">APLICA AQUí</h1>
            </div>

     
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="141"
              viewBox="0 0 50 141"
              fill="none"
              className={classes.parenthesis}
            >
              <path
                d="M1.34037 127.972L0.964863 127.633L1.30789 127.261C6.15409 122.011 10.21 117.126 13.4781 112.604C16.7439 108.041 19.3563 103.573 21.319 99.2021C23.2812 94.8316 24.6855 90.3286 25.5325 85.6924C26.3807 81.0048 26.8059 75.8866 26.8059 70.3363C26.8059 64.7894 26.3363 59.6291 25.3993 54.854C24.4178 50.081 22.901 45.4641 20.8487 41.0026C18.7952 36.5384 16.1592 32.0695 12.9382 27.5959L12.9368 27.594C9.71335 23.0722 5.83735 18.3443 1.307 13.4102L0.965855 13.0387L1.34037 12.7008L13.751 1.50424L14.0782 1.20909L14.4121 1.49654C21.5402 7.63215 27.7247 14.1094 32.9635 20.9288C38.2116 27.7604 42.2615 35.2266 45.112 43.3256C47.9663 51.4353 49.3896 60.4408 49.3896 70.3363C49.3896 80.2318 47.9663 89.2373 45.112 97.347C42.2615 105.446 38.2116 112.912 32.9635 119.744C27.7247 126.563 21.5402 133.04 14.4121 139.176L14.0782 139.464L13.751 139.168L1.34037 127.972Z"
                stroke="#F4D419"
              />
            </svg>
          </div>

          <ApplyForm />
        </div>
      </section>

      <section className={classes.offers}>
        <div className={classes["advantage-container"]}>
          <h1 className={`font-gradient ${classes["offer-title"]}`}>
            OFERTAS DE EMPLEO
          </h1>
          <div className={classes["offers-list"]}>
            <Offer
              title="Buscamos Desarrollador Backend"
              description="Con conocimientos
            avanzados en Lenguaje Java"
            />

            <Offer
              title="Buscamos Desarrollador en firmware"
              description="De Sistemas
              Embebidos"
            />
            <Offer />
          </div>
        </div>
      </section> 
    </>
  );
};
