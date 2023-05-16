import { Form, Formik, Field } from "formik";
import { useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import validator from "validator";
import ".//style/register.css";
import { toast } from "react-toastify";

function Login() {
  const location = useLocation();
  const navitgate = useNavigate();

  // useEffect(() => {
  //   const content = document.querySelector(".MuiBox-root.css-k008qs");
  //   const mui = document.querySelector(
  //     ".MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-12i7wg6-MuiPaper-root-MuiDrawer-paper"
  //   );
  //   const header = document.querySelector(
  //     "header.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation4.MuiAppBar-root.MuiAppBar-colorPrimary.MuiAppBar-positionFixed.mui-fixed.css-19z1ozs-MuiPaper-root-MuiAppBar-root"
  //   );
  //   if (location.pathname === "/login") {
  //     header.style = "display: none";
  //     mui.style.display = "none";
  //     content.style = "display:flex; justify-content: center;";
  //   }
  // }, []);

  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Không được để trống email";
    } else if (!validator.isEmail(values.email)) {
      errors.email = "Địa chỉ email không hợp lệ";
    }
    if (!values.password) {
      errors.password = "Không được để trống mật khẩu";
    } else if (!validator.isStrongPassword(values.password)) {
      errors.password =
        "Mật khẩu phải chứa ít nhất một chữ in hoa, một chữ thường, một số và một ký tự đặc biệt.";
    }
    return errors;
  };
  const handleSubmit = async (values) => {
    const response = await fetch(
      "https://6430bc6ed4518cfb0e546b5e.mockapi.io/api/v1/users"
    );
    const data = await response.json();
    console.log(data);
    const user = data.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (user) {
      navitgate("/mores");
      toast.success("Đăng nhập thành cônng");
    } else {
      // handle invalid login
      toast.error("Mật khẩu tài khoản không chính xác");
    }
  };
  return (
    <div className="container">
      <div className="row wrapper">
        <Formik
          className="shadow-lg"
          initialValues={{ email: "", password: "" }}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="shadow-lg">
              <h1 className="mb-4">Sign Up</h1>

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
                <button
                  type="submit"
                  className="btn btn-block btn-primary py-3 mt-4 w-100"
                >
                  Login
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
                Bạn đã có tài khoản <Link to="/register">register</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
