import { Input } from "../UI/Input";
import { ApplyButton } from "../UI/ApplyButton";
import { Select } from "../UI/Select";
import { Cv } from "../UI/Cv";
import useInput from "../../hooks/use-input";
import useFile from "../../hooks/use-file";
import classes from "../Appy/ApplyForm.module.css";

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
  } = useInput((value) => value.trim().length === 8);

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

  const cvValidation = (value) => {
    let resp = true;
    if (value.target !== undefined) {
      if (value.target.files.length > 0) {
        if (
          value.target.files[0].size > 0 &&
          value.target.files[0].size <= 3145728
        ) {
          resp = false;
        }
      }
    }
    console.log(resp);
    return resp;
  };

  const {
    value: cvValue,
    hasError: hasCvError,
    onChange: cvChangeHandler,
    inputRef: cvRef,
    reset: resetCv,
  } = useFile(cvValidation);

  const sendData = async () => {
   
     const body = new FormData();
    body.append("file", cvValue.target.files[0]);
    body.append("fullName", nameValue);
    body.append("email", emailValue);
    body.append("phone", phoneValue);
    body.append("specialty", espcValue)
    body.append("studies", studiesValue);

    const response = await fetch("http://localhost:8080/api/v1/contacts/save", {
      method: "POST",
      body,
    });
    const data = await response.json();
    console.log(data);
  };

  const submitedHanlder = (e) => {
    e.preventDefault();

    console.log(hasCvError);
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
      sendData();
      resetName();
      resetCv();
      resetEmail();
      resetPhone();
      resetStudies();
      resetEspc();
    }
  };

  // const uploadFile = (e) => {
  //   setCvValue(e);
  // };

  // console.log(hasCvError);
  // const classesCv = hasCvError ?   "input-error" : "" ;

  return (
    <form
      className={classes.form}
      onSubmit={submitedHanlder}
      encType="multipart/form-data"
    >
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
        placeholder="Adjunte su CV en formato PDF"
        setValue={cvChangeHandler}
        ref={cvRef}
  
  />
      <ApplyButton>Aplicar</ApplyButton>
    </form>
  );
};
