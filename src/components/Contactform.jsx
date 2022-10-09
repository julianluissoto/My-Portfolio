import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { mediaQueries } from "./Themes";
import styled from "styled-components";
import Confetti from "react-dom-confetti";
const Container = styled.div`
  position: relative;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 100px;
  margin: auto;

  ${mediaQueries(50)`
            padding: 150px 0;

  `};

  ${mediaQueries(30)`
                       padding: 150px 0;

              

  `};
`;
const Form = styled.form`
  max-width: 500px;

  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
`;

const FormBody = styled.div`
  padding: 25px 40px;
`;
const InputForm = styled.input`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: -1rem 1rem;
  font-size: 1.1rem;
  margin-top: 10px;
  margin-bottom: 22px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const FormTextArea = styled.textarea`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: -1rem 1rem;
  font-size: 1.1rem;
  margin-top: 10px;
  margin-bottom: 22px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  background-color: #2ecc71;
  color: #fff;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:disabled {
    background-color: rgba(57, 39, 39, 0.6);
  }
  &:enabled {
    background-color: #07692f;
  }
`;

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 150,
  dragFriction: 0.12,
  duration: "5510",
  stagger: 4,
  width: "15px",
  height: "15px",
  perspective: "450px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a", "#d91139"],
};

const Contactform = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    sending: "",
    message: "",
  });

  const handleSubmit = (e) => {
    setValues({
      ...values,
      sending: " ",
    });
    e.preventDefault();

    emailjs
      .send("gmail", "template_0wt10li", values, "DHjR6rMv5voecVMRP")
      .then((response) => {
        setValues({
          fullName: "",
          email: "",
          sending: "",
          message: "",
        });
      })

      .then(
        (response) => {
          setValues({
            fullName: "",
            sending: "",
            email: " ",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const handlechange = (e) => {
    //let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/.test(e.target.value)

    setValues((values) => ({
      ...values,

      [e.target.name]: e.target.value,
    }));
  };
  const handlechangeName = (e) => {
    let expRegName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(e.target.value);

    if (expRegName) {
      setValues((values) => ({
        ...values,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <h2 className="title">Contact Me</h2>
          <InputForm
            value={values.fullName || ""}
            onChange={handlechangeName}
            name="fullName"
            type="text"
            placeholder="Your name"
          />
          {!values.fullName && fillInputs("name")}
          <InputForm
            value={values.email || ""}
            onChange={handlechange}
            name="email"
            type="email"
            placeholder="Your E-mail"
          />
          {!values.email && fillInputs("E-mail")}
          <FormTextArea
            rows="5"
            minlength="50"
            value={values.message || " "}
            onChange={handlechange}
            placeholder="Your message here"
            name="message"
          />
          {values.message.length < 50 && (
            <p style={{ color: "orange", fontWeight: "bold" }}>
              message has to contain min 50 character
            </p>
          )}
          <br></br>
          <Confetti active={status} config={config} />
          <Button
            disabled={
              !values.fullName ||
              !values.email ||
              !values.message ||
              values.message.length < 50
            }
            type="submit"
          >
            {values.sending ? "Sending" : "Send"}
          </Button>
          {status && renderAlert()}
        </FormBody>
      </Form>
    </Container>
  );
};
export default Contactform;

const fillInputs = (e) => {
  return (
    <p
      style={{ color: "orange", fontWeight: "bold" }}
    >{`${e} cannot be empty`}</p>
  );
};
const renderAlert = () => {
  return (
    <div>
      <p style={{ color: "green", fontWeight: "bold" }}>
        Your message submitted successfully
      </p>
    </div>
  );
};

/*
 */
