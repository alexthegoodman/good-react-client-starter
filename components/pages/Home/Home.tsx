import * as React from "react";

import {
  Button,
  Callout,
  Card,
  FormGroup,
  InputGroup,
  Text,
} from "@blueprintjs/core";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { HomeFormValues, HomeProps } from "./Home.d";

import { Link } from "react-navi";
import { ERROR_CODE } from "../../../services/ERROR_CODE";
import { useAppContext } from "../../../context";
import AuthClient from "../../../services/AuthClient";
import TextField from "../../fields/TextField/TextField";
import StarterForm from "../../forms/StarterForm/StarterForm";

const Home: React.FC<HomeProps> = () => {
  const authClient = new AuthClient();

  const [{ mixpanel }, dispatch] = useAppContext();

  return (
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Home
      </Text>

      <Text tagName="h2" className="subHeadline">
        Example Form Fields
      </Text>

      <StarterForm />
    </Card>
  );
};

export default Home;
