import { Form, Formik, Field } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import ".//style/register.css";
import { toast } from "react-toastify";

function Register() {
  const navitgate = useNavigate();

  const validateForm = async (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Không được để trống tên đăng nhập";
    } else if (values.name.length > 15) {
      errors.name = "Phải ít hơn 15 ký tự.";
    }

    if (!values.email) {
      errors.email = "Không được để trống email";
    } else if (!validator.isEmail(values.email)) {
      errors.email = "Địa chỉ email không hợp lệ";
    } else {
      const response = await fetch(
        `https://6430bc6ed4518cfb0e546b5e.mockapi.io/api/v1/users?email=${values.email}`
      );
      const data = await response.json();
      if (data.length > 0) {
        errors.email = "Email đã được sử dụng.";
      }
    }
    // if (!values.phoneNo) {
    //   errors.phoneNo = "Phone No is required";
    // } else if (
    //   !validator.isMobilePhone(values.phoneNo, "en-US", { strictMode: true })
    // ) {
    //   errors.phoneNo = "Invalid Phone Number - +1XXXXXXXXXX";
    // }

    if (!values.password) {
      errors.password = "Không được để trống mật khẩu";
    } else if (!validator.isStrongPassword(values.password)) {
      errors.password =
        "Mật khẩu phải chứa ít nhất một chữ in hoa, một chữ thường, một số và một ký tự đặc biệt.";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Không được để trống";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Mật khẩu không khớp.";
    }

    return errors;
  };
  const handleSubmit = async (values) => {
    const response = await fetch(
      "https://6430bc6ed4518cfb0e546b5e.mockapi.io/api/v1/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      }
    );
    const data = await response.json();
    toast.success("Đăng kí thành công");
    navitgate("/login");
  };

  return (
    <div className="container ">
      <div className="row wrapper">
        {/* <div className="col-10 col-lg-5"> */}
        <Formik
          className="shadow-lg"
          initialValues={{ name: "", email: "", phoneNo: "", password: "" }}
          validate={validateForm}
          // onSubmit={submitHandler}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="shadow-lg">
              <h1 className="mb-4">Sign Up</h1>
              <div className="form-groups ">
                <label htmlFor="name">Name</label>
                <Field
                  name="name"
                  type="text"
                  className={
                    formik.touched.name && formik.errors.name
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className=" form-groups">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* <div className="form-group mt-4">
              <label htmlFor="phoneNo">Phone No</label>
              <Field
                name="phoneNo"
                type="text"
                className={
                  formik.touched.phoneNo && formik.errors.phoneNo
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />

              {formik.touched.phoneNo && formik.errors.phoneNo ? (
                <div className="invalid-feedback">{formik.errors.phoneNo}</div>
              ) : null}
            </div> */}

              <div className="form-groups custom-padding">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.password && formik.errors.password ? (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <div className="form-groups custom-padding">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="invalid-feedback">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>

              <div className="form-groups custom-padding">
                <button
                  type="submit"
                  className="btn btn-block btn-primary py-3 mt-4 w-100"
                >
                  Register
                </button>
              </div>
              <p
                style={{
                  textAlign: "right",
                  padding: "10px",
                  marginRight: "20px",
                }}
              >
                {" "}
                Bạn đã có tài khoản <Link to="/login">login</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
