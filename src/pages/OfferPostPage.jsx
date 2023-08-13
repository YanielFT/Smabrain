import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import { red } from "@mui/material/colors";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { Form, redirect, useNavigate, useNavigation } from "react-router-dom";
import { saveOffer } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";



const today = () => {
  const today = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  options.timeZone = "UTC";
  options.timeZoneName = "short";

  return today.toLocaleString("es-Es", options);
};

export const OfferPostPage = () => {
  const todayData = useState(today);
  const nav = useNavigate();
  const state = useNavigation();

  return (
    <Container sx={{ marginBlock: "8rem" }}>
      <Card sx={{ maxWidth: "80rem", margin: "0 auto" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], width: 80, height: 80 }}
              aria-label="recipe"
            >
            SMaBrain
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Nueva oferta de trabajo"
          subheader={todayData}
        />
        <Form method="POST" action="/admin/post-offer">
          {state.state === "submitting" && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )}
          <CardContent>
            <TextField
              autoFocus
              margin="dense"
              id="titulo"
              label="Título"
              type="text"
              fullWidth
              variant="standard"
              name="title"
              required
           
            />
            <TextField
              autoFocus
              margin="dense"
              id="descForm"
              label="Descripción"
              type="text"
              fullWidth
              variant="standard"
              name="desc"
              required
     
            />
            <TextField
              autoFocus
              margin="dense"
              id="bigDescForm"
              label="Descripción (extensa)"
              type="text"
              fullWidth
              multiline
              variant="standard"
              name="bigDesc"
              required
              rows={5}
            />
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              "@media screen and (max-width: 40em)": {
                justifyContent: "center",
              },
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<CancelIcon />}
                onClick={() => nav("/admin")}
              >
                Cancelar
              </Button>
              <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                Enviar
              </Button>
            </Stack>
          </CardActions>
        </Form>
      </Card>
    </Container>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    desc: formData.get("desc"),
    bigDesc: formData.get("bigDesc"),
  };
  try {
  await saveOffer(post);
  } catch (err) {
    if (err === 422) {
      return err;
    }
    throw err;
  }
  return redirect("/admin");
}
