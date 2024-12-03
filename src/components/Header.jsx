import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ setLoading }) {
  const navigate = useNavigate();

  const handleLogInClick = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false);
      navigate("/LoginPage");
    }, 2000);
  };

  return (
    <div className="flex justify-between items-center bg-[#48CAE4] h-[90px]">
      <div>
        <img
          className="w-[100px] bg-inherit"
          src="./public/images/MetroLogo5.png"
          alt="logo"
        />
      </div>
      <div className="text-lg ml-4">
        <button
          type="button"
          className="btn btn-warning hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab"
          onClick={handleLogInClick}
        >
          Login/Signup
        </button>
      </div>
    </div>
  );
}

export default Header;
