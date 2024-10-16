import "./reg.css";
import Input from "../components/Input";
import { Form, useForm } from "react-hook-form";

const TeacherRegistration = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div className="wrapper">
      <h2>Teacher Registration</h2>
      <Form
        action="localhost:5050/api/teacher/login"
        method="post"
        encType={"application/json"}
        control={control}
      >
        <Input
          id="user_id"
          placeholder="Enter your Teacher ID"
          label="Teacher ID"
          register={register}
          validationRules={{
            required: true,
            pattern: /^[0-9]{8}$/,
            minLength: 8,
            maxLength: 8,
          }}
        />
        {errors.id && <p>Teacher ID field is required</p>}
        <Input
          id="fname"
          placeholder="Enter your first name"
          label="First Name"
          register={register}
          validationRules={{ required: true }}
        />
        {errors.fname && <p>First Name field is required</p>}
        <Input
          id="lname"
          placeholder="Enter your last name"
          label="Last Name"
          register={register}
          validationRules={{ required: true }}
        />
        {errors.lname && <p>Last Name field is required</p>}
        <Input
          id="pw"
          placeholder="Create password"
          label="Password"
          register={register}
          validationRules={{ required: true }}
        />
        {errors.pwd && <p>Password field is required</p>}
        <div className="input-box button">
          <input type="submit" />
        </div>
      </Form>
      <div className="text">
        <h3>
          Creating a <a href="/studentreg">student account</a> instead?
        </h3>
      </div>
      <div className="text">
        <h3>
          Already have an account? <a href="/teacherlogin">Login now. </a>
        </h3>
      </div>
    </div>
  );
};

export default TeacherRegistration;
