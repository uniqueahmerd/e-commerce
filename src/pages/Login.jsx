import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Login = () => {
  const [toggleForm, setToggleForm] = useState("Login");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Regex for password validation (at least 8 characters, 1 uppercase, 1 lowercase, 1 number,
  // 1 special character)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleInputChange = (field, value) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "checkBox") setCheckBox(value);

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (field === "password") {
        updatedErrors.password = !passwordRegex.test(value);
      } else if (field === "checkBox") {
        updatedErrors.checkBox = toggleForm === "Sign up" && !value;
      } else {
        updatedErrors[field] = value.length === 0;
      }
      return updatedErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {
      name: toggleForm === "Sign up" && !name,
      email: !email,
      password: !password || !passwordRegex.test(password),
      checkBox: toggleForm === "Sign up" && !checkBox,
    };
    setErrors(newErrors);

    let hasError = false;
    for (let key in newErrors) {
      if (newErrors[key]) {
        hasError = true;
        break;
      }
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    toast.success(`${toggleForm} Successful`);
    // Simulate login/signup logic here
    setName("");
    setEmail("");
    setPassword("");
    setCheckBox(false);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <div className="py-4">
        <img src={assets.logo} alt="logo" className="w-38" loading="lazy" />
      </div>

      <div className="flex flex-col justify-center items-center gap-6 mt-24 sm:mt-36">
        <h1 className="text-3xl text-gray-800 flex gap-1.5 items-center">
          {toggleForm}{" "}
          <p className="h-[1px] sm:w-11 sm:h-[2px] w-8 bg-black"></p>
        </h1>

        <div className="sm:w-2/6 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {toggleForm === "Sign up" && (
              <div className="flex flex-col gap-2.5">
                <input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(event) =>
                    handleInputChange("name", event.target.value)
                  }
                  className={`border p-3 w-full outline-none ${
                    errors.name ? "border-red-600" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">
                    Please enter your full name
                  </p>
                )}
              </div>
            )}
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) =>
                  handleInputChange("email", event.target.value)
                }
                className={`border p-3 w-full outline-none ${
                  errors.email ? "border-red-600" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">
                  Please enter your email address
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) =>
                  handleInputChange("password", event.target.value)
                }
                className={`border p-3 w-full outline-none ${
                  errors.password ? "border-red-600" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-600 text-sm">
                  Password must be at least 8 characters long, include an
                  uppercase letter, a lowercase letter, a number, and a special
                  character.
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
              <div className="text-sm text-gray-800  whitespace-nowrap">
                <label>
                  <input
                    type="checkbox"
                    className="accent-black"
                    checked={checkBox}
                    onChange={(event) =>
                      handleInputChange("checkBox", event.target.checked)
                    }
                  />{" "}
                  {toggleForm === "Login"
                    ? "Remember me"
                    : "Agree to term & condition"}
                </label>
                {toggleForm === "Sign up" && errors.checkBox && (
                  <p className="text-red-600 text-sm">
                    You must agree to the terms & conditions
                  </p>
                )}
              </div>
              <div className="text-sm text-gray-800 whitespace-nowrap">
                {toggleForm === "Login" ? (
                  <p>
                    Don't have account?{" "}
                    <span
                      className="underline cursor-pointer"
                      onClick={() => setToggleForm("Sign up")}
                    >
                      Create account
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have account?{" "}
                    <span
                      className="underline cursor-pointer"
                      onClick={() => setToggleForm("Login")}
                    >
                      Login
                    </span>
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className={`py-3 px-8 bg-black text-white hover:bg-gray-800 flex items-center justify-center ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <span className="loader"></span> Authenticating...
                  </div>
                ) : (
                  toggleForm
                )}
              </button>
            </div>
            <div className="text-sm text-gray-800 text-center">
              {toggleForm === "Login" ? (
                <p className="cursor-pointer hover:underline">
                  Forgot your password
                </p>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
