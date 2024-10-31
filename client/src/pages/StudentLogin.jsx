import "./reg.css";
import Input from "../components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";

const StudentLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState((auth.storedUser && auth.storedUser.role === "student"));
  const onSubmit = async (data) => {
    data.role = "student";
    auth.loginAction(data);
  };
  return isLoggedIn ? (
    <Navigate to="/profile" />
  ) : (
    <div className="wrapper">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="user_id"
          placeholder="Enter your Student ID"
          label="Student ID"
          register={register}
          validationRules={{
            required: { value: true, message: "ID cannot be left blank." },
            pattern: /^[0-9]{8}$/,
            minLength: { value: 8, message: "ID must be 8 characters long." },
            maxLength: { value: 8, message: "ID must be 8 characters long." },
          }}
        />
        {errors?.user_id?.message && <p>{errors.user_id.message}</p>}
        <Input
          id="pw"
          placeholder="Enter your password"
          label="Password"
          register={register}
          validationRules={{
            required: {
              value: true,
              message: "Password cannot be left blank",
            },
          }}
        />
        {errors?.pw?.message && <p>{errors.pw.message}</p>}
        <div className="input-box button">
          <input type="submit" />
        </div>
      </form>
      <div className="text">
        <h3>
          Don't have an account? <a href="/studentreg">Create one here.</a>
        </h3>
      </div>
    </div>
  );
};

export default StudentLogin;
