import groupLogo from "../../assets/Group.svg";
import classes from "./Footer.module.css";
import logo16 from '../../assets/Group 16.svg'
import logo17 from '../../assets/Group 17.svg'
import logo1 from '../../assets/Group 1.svg'
import logo from '../../assets/Group you.svg'


export const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={`contenedor ${classes['contenedor-footer']}`}>
        <span className={classes.logos}>
          <img src={groupLogo} alt="Logo de SMaBiT" />
          <span className={classes.description}>©2023 S©MaBiT GmbH</span>
        </span>
        <div className={classes["contact-container"]}>
          <div className={classes.message}>
            Technology
            <br />
            from
            <br />
            new
            <br />
            perspectives
          </div>
          <div className={classes.contacts}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M13.3227 7.82276C13.5592 6.82241 13.2643 5.79297 12.5373 5.06887C11.8102 4.34478 10.7765 4.05107 9.77205 4.28662L10.0086 5.28988C10.6626 5.13867 11.3342 5.32769 11.8073 5.79879C12.2803 6.26988 12.4701 6.93873 12.3183 7.59012L13.3256 7.82567L13.3227 7.82276Z"
                  fill="white"
                />
                <path
                  d="M13.4016 4.2052C14.4469 5.24627 14.8703 6.72935 14.5316 8.16882L15.539 8.40437C15.9595 6.61594 15.4339 4.77517 14.1345 3.4782C13.4862 2.83262 12.6803 2.36734 11.8043 2.12597C10.9546 1.89333 10.0495 1.87588 9.19098 2.07944L9.4275 3.08271C10.8729 2.74538 12.3591 3.16704 13.4074 4.20811L13.4016 4.2052Z"
                  fill="white"
                />
                <path
                  d="M13.1621 10.0445L11.2203 11.9783C10.2801 11.3531 9.36617 10.6028 8.50186 9.74202C7.62003 8.8638 6.855 7.93905 6.22137 6.98523L8.15439 5.06012L3.4328 0.352051L0.991715 2.78315C0.074846 3.77187 0.00768685 5.44107 0.807757 7.4854C1.55527 9.40178 2.99481 11.4781 4.85483 13.3334C6.7382 15.2091 8.84642 16.6486 10.7882 17.3872C11.7167 17.7391 12.5665 17.9164 13.3081 17.9164C14.2279 17.9164 14.9813 17.646 15.5185 17.1109L17.8895 14.7496L13.165 10.0445H13.1621ZM16.4266 14.7496L15.3609 15.811L12.0963 12.5599L13.1621 11.4985L16.4266 14.7496ZM6.6944 5.06012L5.6403 6.10991L2.37578 2.85876L3.42988 1.80896L6.6944 5.06012ZM11.1532 16.4275C9.34281 15.7383 7.366 14.3832 5.5819 12.6064C3.82116 10.8529 2.4663 8.90161 1.76551 7.11318C1.16107 5.56903 1.12311 4.30113 1.65163 3.59739L4.90447 6.83692L5.12054 7.18588C5.83594 8.32582 6.72652 9.43087 7.76603 10.469C8.79094 11.4897 9.88009 12.3651 11.0101 13.0717L11.3605 13.2898L14.6104 16.5264C13.9096 17.0353 12.6687 17.0033 11.1503 16.4246L11.1532 16.4275Z"
                  fill="white"
                />
              </svg>
              <span className={classes.description}>+49 (30) 4036432</span>
            
            </div>
            
            
            <div>
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M17.8866 5.88564H13.3191V0.667969H6.79751L4.81993 2.63773V5.88564H0.252441V14.3249H4.82285V18.2324H13.3191V14.3249H17.8895V5.88564H17.8866ZM7.19009 1.7331V3.03168H5.88635L7.19009 1.7331ZM5.8512 4.05887H8.22137V1.69808H12.2849V5.88564H5.8512V4.05887ZM12.282 17.2023H5.85413V11.7482H12.282V17.2023ZM1.28664 6.91575H16.8524V13.2948H13.3162V11.7482H14.3094V10.7181H3.82967V11.7482H4.82285V13.2948H1.28664"
                  fill="white"
                />
              </svg>
              <span className={classes.description}>+49 (30) 4036432 21</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
              >
                <path
                  d="M0.252441 0.694336V12.4039H17.8895V0.694336H0.252441ZM16.3829 1.75207L9.07099 7.61581L1.75911 1.75207H16.3829ZM1.28409 11.3492V2.71446L9.06808 8.9566L16.8521 2.71446V11.3492H1.28409Z"
                  fill="white"
                />
              </svg>
              <span className={classes.description}>develop@smabit.eu</span>
            </div>
          </div>
        </div>

        <div className={classes["social-medias"]}>
        
        <img src={logo} className={classes.youtube} alt="" />
        <img src={logo1} className={classes.fabe} alt="" />
        <img src={logo16} className={classes.tw} alt="" />
        <img src={logo17} className={classes.linkedin} alt="" />
        
        </div>
        <div className={classes.info}>
          <p className={classes["description"]}>
            SMaBiT GmbH <br/> Friedrichstrasse 95 • 10117 Berlin • Deutschland
          </p>{" "}
          <span className={classes["description"]}>Imprint and Privacy</span>
        </div>
      </div>

      <div className={classes["only-desktop"]}>
      <hr />
      <div className={classes['info-desktop']}>
          <p className={classes["description"]}>
            SMaBiT GmbH Friedrichstrasse 95 • 10117 Berlin • Deutschland
            <span className={classes["description"]}>Imprint and Privacy</span>
          </p>{" "}
        </div>
      </div>
    </footer>
  );
};
