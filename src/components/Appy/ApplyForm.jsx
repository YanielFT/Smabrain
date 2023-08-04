import { Input } from "../UI/Input";
import { ApplyButton } from "../UI/ApplyButton";
import { Select } from "../UI/Select";
import { Cv } from "../UI/Cv";
import classes from "../Appy/ApplyForm.module.css";
import { useState } from "react";

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
  const [cvValue, setCvValue] = useState(null);

  const submitedHanlder = async (e) => {
    e.preventDefault();

    const contact = {
      fullName: "Yaniel 23 Fuentes",
      email: "asd@gmail.com",
      phone: "51967977",
      studies: "universitario",
    };

    const body = new FormData();
    body.append("contact", contact);
    body.append("file", cvValue);

    console.log(cvValue)
    // console.log(JSON.stringify(
    //   {
    //     contact: {
    //       fullName: "Yaniel 23 Fuentes",
    //       email: "asd@gmail.com",
    //       phone: "51967977",
    //       studies: "universitario",
    //     },
    //     file: cvValue
    //   }
    //   ));
    const response = await fetch("http://localhost:8080/api/v1/contacts/save", {
      method: "POST",
      body: JSON.stringify(
        {
          contact: {
            fullName: "Yaniel 23 Fuentes",
            email: "asd@gmail.com",
            phone: "51967977",
            studies: "universitario",
          },
          file: cvValue
        }
        ),
      headers: {
        "Content-type": "",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form
      className={classes.form}
      onSubmit={submitedHanlder}
      encType="multipart/form-data"
      method="POST"
    >
      <Input
        type={"text"}
        id={"nombre"}
        placeholder={"Nombre y apellidos"}
        key={"nombre"}
      />
      <Input type={"email"} id={"emai"} placeholder={"E-mail"} key={"email"} />
      <Input
        type={"tel"}
        id={"tel"}
        placeholder={"Teléfono Móvil"}
        key={"tel"}
      />
      <Input type="text" placeholder="Nivel de estudios" id="estudios" />
      <Select options={OPTIONS} placeholder="Nivel de estudios" id="estudios" />
      <Cv id="cv" placeholder="Adjunte su CV en formato PDF" value={cvValue} setValue = {setCvValue} />
      <ApplyButton>Aplicar</ApplyButton>
    </form>
  );
};
