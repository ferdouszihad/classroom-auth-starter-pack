import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaFan } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";

const Register = () => {
  const { setUser, loading, setLoading, createUser, updateUserData } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [activeAvatar, setActiveAvatar] = useState(NaN);

  const avatar = [
    "https://img.icons8.com/?size=96&id=81120&format=png",
    "https://img.icons8.com/?size=96&id=80989&format=png",
    "https://img.icons8.com/?size=96&id=80615&format=png",
    "https://img.icons8.com/?size=96&id=81026&format=png",
    "https://img.icons8.com/?size=96&id=81802&format=png",
  ];

  const handleRegister = (e) => {
    //getting form data

    e.preventDefault();
    setError({});
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;

    if (isNaN(activeAvatar)) {
      setError({ ...error, avatar: "please choose an avatar" });
      return;
    }
    if (pass.length < 6) {
      setError({
        ...error,
        pass: "password should be more then 6 characters",
      });
      return;
    }

    createUser(email, pass)
      .then((res) => {
        updateUserData({ displayName: name, photoURL: avatar[activeAvatar] })
          .then(() => {
            //profile is updated with name and , photourl
            //this function doesnot hit onAuthState , so we will update data manually
            setUser({
              ...res.user,
              displayName: name,
              photoURL: avatar[activeAvatar],
            });
            navigate(`${location?.state ? location.state : "/"}`);
          })
          .catch((err) => {
            console.log({ ...err });
          });
      })
      .catch((err) => {
        setLoading(false);
        setError({ ...error, register: err?.code });
      });
  };
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-2xl text-center pb-10 font-semibold">
        Registration Form
      </h2>
      <div className="card bg-base-100 w-full max-w-lg shrink-0  mx-auto  shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Choose an Avatar</span>
            </label>

            <div className="flex gap-2 flex-wrap">
              {avatar.map((av, index) => (
                <div
                  onClick={() => setActiveAvatar(index)}
                  className={`p-px rounded-full border-2 cursor-pointer ${
                    activeAvatar == index && "border-success"
                  }`}
                  key={av}
                >
                  <img className="w-14 rounded-full" src={av} alt="" />
                </div>
              ))}
            </div>

            {error.avatar && (
              <p className="text-xs text-red-600">{error.avatar}</p>
            )}
          </div>
          <div className="md:flex gap-2">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="md:flex gap-2">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text"> Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {error.pass && <p className="text-xs text-red-600">{error.pass}</p>}
          {error.register && (
            <p className="text-xs text-red-600">
              opps!! {error.register} || try again!
            </p>
          )}
          <div className="form-control mt-6">
            <button disabled={loading} className="btn btn-primary">
              Register Now
              {loading && <FaFan className="animate-spin text-neutral"></FaFan>}
            </button>
          </div>

          <div>
            <p className="text-sm text-center py-2">
              Allready have account?{" "}
              <Link
                to="/login"
                state={location.state}
                className="underline text-primary"
              >
                Login Now
              </Link>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Register;
