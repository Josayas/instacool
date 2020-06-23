import * as React from "react";
import { Link } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Button from "./Button";
import Center from "./Center";
import Input from "./Input";

// import { ILogin } from "../ducks/Users";

class RegisterForm extends React.Component<InjectedFormProps<any>> {
  public render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          label="Correo"
          placeholder="Correo"
          name="email"
          type="email"
          component={Input}
        />
        <Field
          label="Password"
          placeholder="Password"
          name="password"
          type="password"
          component={Input}
        />
        <Button block={true}>Enviar</Button>
        <Center>
          <Link to="/">Iniciar sesión</Link>
        </Center>
      </form>
    );
  }
}

export default reduxForm<any>({
  form: "register",
})(RegisterForm);
