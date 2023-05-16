import "../page/style/more.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTodo, updateTodo } from "../actions/action";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTodoList } from "../actions/action";

function Mores() {
  const todolist = useSelector((state) => state.todoReducer.todoList);
  const codeList = todolist.map((item) => item.data.codes);
  let nextCode = 1;
  const { id } = useParams();

  while (codeList.includes(nextCode.toString().padStart(4, "0"))) {
    nextCode++;
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [inputData, setInputData] = useState({
    names: "",
    address: "",
    dates: "",
    codes: nextCode.toString().padStart(4, "0"),
    phones: "",
  });

  const location = useLocation();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  useEffect(() => {
    if (location.state) {
      setInputData({
        names: location.state.names,
        address: location.state.address,
        dates: location.state.dates,
        codes: location.state.codes,
        phones: location.state.phones,
      });
    }
  }, [location.state]);

  const validateInput = () => {
    const isVNPhoneMobile =
      /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

    let currentDate = new Date();
    const isExistingPhone = todolist.find(
      (todo) => todo.data.phones === inputData.phones && todo.id !== id
    );
    const isExistingCodes = todolist.find(
      (todo) => todo.data.codes === inputData.codes && todo.id !== id
    );
    let errors = {};

    if (!inputData.names) {
      errors.names = "Bắt buộc phải nhập họ tên";
    }
    if (!inputData.address) {
      errors.address = "Bắt buộc phải nhập địa chĩr";
    }
    if (!inputData.dates) {
      errors.dates = "Hãy nhập ngày sinh ";
    } else if (new Date(inputData.dates) > currentDate) {
      errors.dates = "Ngày sinh phải nhỏ hơn thời điểm hiện tai";
    }
    if (isExistingCodes) {
      errors.codes = "Mã nhân viên đã được sử dụng";
    } else if (!inputData.codes) {
      errors.codes = "Mã nhân viên không hợp lệ";
    }

    if (isExistingPhone) {
      errors.phones = "Số điện thoại đã được sử dụng";
    } else if (!inputData.phones || !isVNPhoneMobile.test(inputData.phones)) {
      errors.phones = "Số điện thoại không hợp lệ";
    }
    return errors;
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setErrors(validateInput());
      const errors = validateInput();
      console.log(errors);

      if (Object.keys(errors).length === 0) {
        setIsLoading(true);
        if (!id) {
          dispatch(addTodo(inputData));
          toast.success("Thêm nhân viên thành công!");
        } else {
          dispatch(updateTodo(id, inputData));
          toast.success("Sửa nhân viên thành công!");
        }

        setTimeout(() => {
          navigate("/dastaload");
        }, 1000);
      } else {
        throw new Error("Lỗi nhập liệu");
      }
    } catch (error) {}
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const errors = validateInput(name);
    setErrors((prevState) => ({ ...prevState, [name]: errors[name] }));
  };

  return (
    <>
      <div className="AddEmployeeForm">
        <div className="form-wrapper">
          <div style={{ marginTop: "-40px" }}>
            <h1>{id ? "Sửa thông tin" : "Thêm Thông tin"}</h1>
            <form style={{ marginTop: "30px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="input-container name-input">
                  <input
                    type="text"
                    className="inputs"
                    value={inputData.names}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="names"
                  />
                  <label className="labels" htmlFor="">
                    Họ tên*
                  </label>

                  {errors.names && (
                    <p className="error-message">{errors.names}</p>
                  )}
                </div>
                <div className="input-container date-input">
                  <input
                    type="date"
                    className="inputs"
                    value={inputData.dates}
                    onChange={handleChange}
                    name="dates"
                  />
                  <label className="labels" htmlFor="">
                    Ngày sinh
                  </label>
                  {errors.dates && (
                    <p className="error-message">{errors.dates}</p>
                  )}
                </div>
              </div>
              <div className="input-container id-input">
                <div>
                  <input
                    type="text"
                    className="inputs"
                    value={inputData.codes}
                    onChange={handleChange}
                    name="codes"
                    onBlur={handleBlur}
                    // disabled
                  />
                  <label className="labels" htmlFor="">
                    Mã nhân viên*
                  </label>
                </div>
                {errors.codes && (
                  <p className="error-message">{errors.codes}</p>
                )}
              </div>
              <div className="input-container phone-input">
                <input
                  type="text"
                  className="inputs"
                  value={inputData.phones}
                  onChange={handleChange}
                  name="phones"
                  onBlur={handleBlur}
                />
                <label className="labels" htmlFor="">
                  Số Điện thoại
                </label>
                {errors.phones && (
                  <p className="error-message">{errors.phones}</p>
                )}
              </div>
              <div className="input-container address-input">
                <input
                  type="text"
                  className="inputs"
                  value={inputData.address}
                  onChange={handleChange}
                  name="address"
                  onBlur={handleBlur}
                />
                <label className="labels" htmlFor="">
                  Địa Chỉ
                </label>
                {errors.address && (
                  <p className="error-message">{errors.address}</p>
                )}
              </div>
              <button
                type="submit"
                className="add-employee-button"
                onClick={handleSubmit}
              >
                {id ? "Update" : "Submit"}
              </button>
              {/* <p
                type=""
                // className="add-employee-button"
                onClick={() => {
                  navigate("/dastaload");
                }}
              >
                back
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mores;
