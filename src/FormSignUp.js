import ErrorList from "antd/lib/form/ErrorList";
import React from "react";
import "./Form.css";
import useForm from "./useForm";
import ValidateInfo from "./ValidateInfo";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    ValidateInfo
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your accountt by filling out the
          information below
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="for-label">
            User Name
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="for-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="enter your username"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="for-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="for-label">
            Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="re eneter your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button type="submit" className="form-input-btn">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href=" #"> here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignUp;
