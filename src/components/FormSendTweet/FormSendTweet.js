import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  TextField,
  ButtonGroup,
  Button
} from "@material-ui/core";

import "./formSendTweet.scss";

export default function FormSendTweet(props) {
  const { sendTweet } = props;

  const [formValue, setFormValue] = useState({ name: "", tweet: "" });

  //Aqui actualizo el name del textfield abajo, usando express operator.
  const onFormChange = event => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__title"> Enviar Tweet</h2>
      <form
        className="form-send-tweet__form"
        onSubmit={event => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-name"
              label="Nombre de usuario"
              type="text"
              name="name"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              type="text"
              variant="outlined"
              name="tweet"
              placeholder="Escribe un tweet"
              multiline
              rows="6"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <ButtonGroup>
              <Button type="submit" color="primary">
                Twittear
              </Button>
            </ButtonGroup>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
