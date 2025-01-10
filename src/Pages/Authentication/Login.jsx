import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import AuthContext from "../../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [disable, setDesable] = useState(true);

  const { signUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const navForm = location.state?.form?.pathname || "/";
  console.log(navForm);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true,
          toast: true,
        });
        navigate(navForm, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handelValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDesable(false);
    } else {
      setDesable(true);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <div>
                <LoadCanvasTemplate />
              </div>
              <input
                type="text"
                name="captcha"
                onBlur={handelValidateCaptcha}
                placeholder="type the text above"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p>
            <small>
              New here <Link to={"/signUp"}>Create an account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
