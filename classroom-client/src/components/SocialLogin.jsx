import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center gap-2 justify-around">
      <button onClick={handleGoogleLogin} type="button" className="btn w-full">
        Join using{" "}
        <FcGoogle
          className="hover:-rotate-45 duration-100"
          size={32}
        ></FcGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
