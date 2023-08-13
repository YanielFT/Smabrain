import { Await, defer, useLoaderData } from "react-router-dom";
import { ApplyButton } from "../components/UI/ApplyButton";
import { Cv } from "../components/UI/Cv";
import { Input } from "../components/UI/Input";
import ReCAPTCHA from "react-google-recaptcha";
import useHttp from "../hooks/use-http";
import Snackbar from "@mui/material/Snackbar";
import { useFeedback } from "../hooks/use-feedback";
import MuiAlert from "@mui/material/Alert";
import classes from "./OfferDetailPage.module.css";
import { Suspense, forwardRef, useEffect, useRef, useState } from "react";
import useInput from "../hooks/use-input";
import useFile from "../hooks/use-file";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getOffer, saveContact } from "../lib/api";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const OfferDetailPage = () => {
  const {offer} = useLoaderData();
  const captchaRef = useRef(null);
  const { data, sendRequest, status, error } = useHttp(saveContact);

  /* Feedback hooks */
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const { key, message, type, sendFeed } = useFeedback();

  const {
    value: nameValue,
    hasError: hasNameError,
    onBlur: nameBlurHandler,
    onChange: nameChangeHandler,
    inputRef: nameRef,
    reset: resetName,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: emailValue,
    hasError: hasEmailError,
    onBlur: emailBlurHandler,
    onChange: emailChangeHandler,
    inputRef: emailRef,
    reset: resetEmail,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: cvValue,
    hasError: hasCvError,
    onChange: cvChangeHandler,
    inputRef: cvRef,
    reset: resetCv,
  } = useFile();

  const submitedHanlder = (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    if (!hasNameError) {
      nameRef.current.focus();
    } else if (!hasEmailError) {
      emailRef.current.focus();
    } else if (!hasCvError) {
      cvRef.current.focus();
    } else {
      sendRequest(
        {
          cvValue,
          nameValue,
          emailValue,
          token,
        },
        true
      );
    }
  };

  useEffect(() => {
    console.log("effect");
    if (!error && status === "completed") {
      sendFeed("SUCCESS", data);
      setOpen(true);
      resetName();
      resetCv();
      resetEmail();
    } else if (error && status === "completed") {
      sendFeed("ERROR", error);
      setOpen(true);
    }
  }, [data, error, status, sendFeed]);

  return (
    <section className={classes.offer}>
      <h1 className={`font-gradient`}>Oferta de empleo</h1>
      <div className={classes["offer-container"]}>
        <Suspense
          fallback={
            <div className="loading">
              <LoadingSpinner />
            </div>
          }
        >
          <Await resolve={offer}>
            {(offer) => (
              <div className={classes.card}>
                <span>*</span>
                <h1 className={classes["offer-title"]}>{offer.title}</h1>
                <h2 className={classes["offer-subtitle"]}>{offer.desc}</h2>
                <p className={classes["offer-description"]}>{offer.bigDesc}</p>
              </div>
            )}
          </Await>
        </Suspense>

        <form
          className={classes.form}
          onSubmit={submitedHanlder}
          encType="multipart/form-data"
        >
          {status === "pending" && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )}
          <Input
            type="text"
            id="nombre"
            placeholder="Nombre y apellidos"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            ref={nameRef}
          />
          <Input
            type="email"
            id="emai"
            placeholder="E-mail"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            ref={emailRef}
          />

          <Cv
            id="cv"
            placeholder="Adjunte su CV en formato PDF"
            setValue={cvChangeHandler}
            ref={cvRef}
            value={cvValue}
          />

          <ReCAPTCHA
            className="recaptcha"
            sitekey={process.env.REACT_APP_SITE_KEY}
            ref={captchaRef}
          />

          <Snackbar
            key={key}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>
          <ApplyButton>Aplicar</ApplyButton>
        </form>
      </div>
    </section>
  );
};

export async function loader({params}) {
  return defer({ offer: getOffer({params}) });
}
