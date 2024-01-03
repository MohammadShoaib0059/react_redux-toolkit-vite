import React from "react";
import "../Authentication/Auth.css";
import { useFormik } from "formik";
import { signUpSchema } from "./Schemas";
import { useDispatch } from "react-redux";
import { PostUser } from "../../Redux/AuthSlicer";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const dispatch =useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        dispatch(PostUser(values));
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div>
      <div id="login-box">
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Sign up</h1>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="off"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="text-danger">
              {errors.username && touched.username ? (
                <p className="form-error">{errors.username}</p>
              ) : null}
            </span>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="text-danger">
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="text-danger">
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </span>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              autoComplete="off"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="text-danger">
              {errors.confirm_password && touched.confirm_password ? (
                <p className="form-error">{errors.confirm_password}</p>
              ) : null}
            </span>
            <input type="submit" name="signup_submit" value="Sign me up" />
          </div>
          <div className="right">
            {/* <span className="loginwith">Sign in with<br />social network</span> */}
            <button className="social-signin facebook">
              Log in with facebook
            </button>
            <button className="social-signin twitter">
              Log in with Twitter
            </button>
            <button className="social-signin google">
              Log in with Google+
            </button>
          </div>
          <div className="or">OR</div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
