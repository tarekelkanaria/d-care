import RightPart from "../components/Login/RightPart";
import Choose from "../components/Login/Choose";
import LeftPart from "../components/Login/LeftPart";
import { useNavigate } from "react-router";
export default function Login() {
  const navigate = useNavigate();
  function goToRegister() {
    navigate("/Register");
  }
  return (
    <div className="min-h-screen flex bg-gray-50 font-sans text-gray-800">
      <LeftPart />
      {/* chosee */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative p-6">
        <div className="w-full max-w-420px bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-10 z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Welcome back</h2>
            <p className="text-sm text-slate-500 mt-2">
              Please enter your details to sign in
            </p>
          </div>

          <Choose />

          <RightPart />

          <div className="mt-8 text-center text-[12px] text-slate-500">
            Don't have an account?
            <button
              type="button"
              onClick={goToRegister}
              className="text-[#0052cc] hover:underline font-semibold ml-1"
            >
              Register with your clinic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
