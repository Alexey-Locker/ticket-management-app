import React from "react";
import { Button } from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import TextFieldForFormik from "./TextFieldFormik/TextFieldForFormik";

import "./Authorization.scss";
import { validate } from "validate.js";
import { useDispatch } from "react-redux";
import { loggin } from "../../common/store/user/actions/actions";

const DEFAULT_VALUE_FORM = {
  email: "",
  password: "",
  checkbox: [],
};

const contraints = {
  email: {
    email: true,
  },
  password: {
    format: /^[A-Za-z0-9]+$/,
    length: {
      minimum: 5,
    },
  },
};

function validateForm(values) {
  return validate(values, contraints);
}

export default function Registration() {
  const dispatch = useDispatch();
  function onSubmit(value) {
    const data = {
      ...value,
      checkbox: value.checkbox[0] === "yes",
    };
    dispatch(loggin(data));
  }

  return (
    <Formik
      onSubmit={onSubmit}
      validate={validateForm}
      initialValues={DEFAULT_VALUE_FORM}
    >
      <div className="form">
        <Form className="form__wrapper">
          <h2>Авторизация</h2>
          <TextFieldForFormik id="email" name="email" label="Email:" />
          <TextFieldForFormik
            id="password"
            name="password"
            label="Password:"
            type="password"
          />
          <div className="form__radio">
            <label>
              <Field type="checkbox" name="checkbox" value="yes" />
              <p>Запомнить меня</p>
            </label>
          </div>
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </Form>
      </div>
    </Formik>
  );
}
