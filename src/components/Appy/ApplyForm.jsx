import { Input } from "../UI/Input";
import { ApplyButton } from "../UI/ApplyButton";
import { Select } from "../UI/Select";
import { Cv } from "../UI/Cv";
import useInput from "../../hooks/use-input";
import useFile from "../../hooks/use-file";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "../Appy/ApplyForm.module.css";
import { saveContact } from "../../lib/api";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useHttp from "../../hooks/use-http";
import { useFeedback } from "../../hooks/use-feedback";
import { FeedBack } from "../UI/FeedBack";

const OPTIONS = [
  {
    value: "universitario",
    name: "Universitario",
  },
  {
    value: "tecnico",
    name: "Técnico Superior",
  },
  {
    value: "bachiller",
    name: "Bachiller",
  },
];

export const ApplyForm = () => {
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
    value: phoneValue,
    hasError: hasPhoneError,
    onBlur: phoneBlurHandler,
    onChange: phoneChangeHandler,
    inputRef: phoneRef,
    reset: resetPhone,
  } = useInput((value) => value.trim().length >= 8);

  const {
    value: studiesValue,
    hasError: hasStudiesError,
    onBlur: studiesBlurHandler,
    onChange: studiesChangeHandler,
    inputRef: studiesRef,
    reset: resetStudies,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: espcValue,
    hasError: hasEspcError,
    onBlur: espcBlurHandler,
    onChange: espcChangeHandler,
    inputRef: espcRef,
    reset: resetEspc,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: cvValue,
    hasError: hasCvError,
    name: cvName,
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
    } else if (!hasPhoneError) {
      phoneRef.current.focus();
    } else if (!hasStudiesError) {
      studiesRef.current.focus();
    } else if (!hasEspcError) {
      espcRef.current.focus();
    } else if (!hasCvError) {
      cvRef.current.focus();
    } else {
      sendRequest({
        cvValue,
        nameValue,
        emailValue,
        phoneValue,
        espcValue,
        studiesValue,
        token,
      });
    }
  };

  useEffect(() => {
    if (!error && status === "completed") {
      sendFeed("SUCCESS", data);
      setOpen(true);
      resetName();
      resetCv();
      resetEmail();
      resetPhone();
      resetStudies();
      resetEspc();
    } else if (error && status === "completed") {
      sendFeed("ERROR", error);
      setOpen(true);
    }
  }, [data, error, status, sendFeed]);

  return (
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

      <Input
        type="tel"
        id="tel"
        placeholder="Teléfono Móvil"
        value={phoneValue}
        onChange={phoneChangeHandler}
        onBlur={phoneBlurHandler}
        ref={phoneRef}
        pattern="(\d{8})"
      />
      <Select
        options={OPTIONS}
        placeholder="Nivel de estudios"
        id="estudios"
        value={studiesValue}
        onChange={studiesChangeHandler}
        onBlur={studiesBlurHandler}
        ref={studiesRef}
      />
      <Input
        type="text"
        placeholder="Especialidad"
        id="espec"
        value={espcValue}
        onChange={espcChangeHandler}
        onBlur={espcBlurHandler}
        ref={espcRef}
      />
      <Cv
        id="cv"
        placeholder={cvName}
        setValue={cvChangeHandler}
        ref={cvRef}
        value={cvValue}
      />
      <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
      <FeedBack
        handleClose={handleClose}
        message={message}
        open={open}
        type={type}
      />

      <ApplyButton>Aplicar</ApplyButton>
    </form>
  );
};
