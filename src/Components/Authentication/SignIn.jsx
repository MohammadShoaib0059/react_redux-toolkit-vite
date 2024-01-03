import React from "react";
import "../Authentication/Auth.css";
import { useFormik } from "formik";
import styled from "styled-components";
// import {mobile} from "../responsive";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${'' /* ${mobile({ width: "75%" })} */}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;
const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  
  const { values, handleChange, handleSubmit} =
   useFormik({
    initialValues,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
  //   <Container>
  //   <Wrapper>
  //     <Title>SIGN IN</Title>
  //     <Form>
  //       <Input placeholder="username" />
  //       <Input placeholder="password" />
  //       <Button>LOGIN</Button>
  //       <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
  //       <Link>CREATE A NEW ACCOUNT</Link>
  //     </Form>
  //   </Wrapper>
  // </Container>
    <div>
      <div id="login-box">
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Sign In</h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              onChange={handleChange}
            />
           <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={handleChange}
             
            />
            <input type="submit" name="signin_submit" value="Sign In" />
          </div>
          <div className="right-signin">
            {/* <span className="loginwith">Sign in with<br />social network</span> */}
            <button className="social-signin facebook">Log in with facebook</button>
            <button className="social-signin twitter">Log in with Twitter</button>
            <button className="social-signin google">Log in with Google+</button>
          </div>
          <div className="or">OR</div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
