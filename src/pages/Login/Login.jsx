import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

function Login() {
  const { register, handleSubmit } = useForm();
  const [captchaText, setCaptchaText] = useState("");
  const [disableLoginBtn, setDisableLoginBtn] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleCaptcha = (e) => {
    e.preventDefault();
    if (validateCaptcha(captchaText)) {
      setDisableLoginBtn(false);
    } else {
      setDisableLoginBtn(true);
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="lg:w-1/2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email")}
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
                placeholder="password"
                {...register("password")}
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
              <LoadCanvasTemplate />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Captcha</span>
              </label>
              <input
                onBlur={handleCaptcha}
                onChange={(e) => setCaptchaText(e.target.value)}
                type="text"
                placeholder="Type captcha"
                name="captcha"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button disabled={disableLoginBtn} className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-center mt-3">
              New to BriteScholars?{" "}
              <Link className="text-orange-400" to="/signup">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
