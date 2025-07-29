import { useState } from "react";
import GoogleandFacebookBtn from "./google-facebookBtn";
import LoginandSignupWith from "./login-signup-with";
import SigninCol from "./signin-col";
import "../CSS/signup-content.css";
import PhoneNumberInput from "./Phone-Input";
import { useNavigate } from "react-router-dom";

function SignUpContent() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 const validatePhone = (number) => {
  // يطابق +966 ثم 8 أرقام سعودية
  const saudiRegex = /^\+9665[0-9]{8}$/;
  return saudiRegex.test(number);
};

  const handleContinue = () => {
    if (!phone) {
      setError("Phone number is required");
    } else if (!validatePhone(phone)) {
      setError("Please enter a valid Saudi phone number starting with +9665");
    } else {
      setError("");
      navigate("/signup1");
    }
  };

  return (
    <div className="w-full h-full signup-content mt-7">
      <div className="container flex justify-between w-full">
        <div className="pt-8 pb-8 pl-4 pr-4 bg-white rounded-lg col-register-now">
          <div className="flex items-center gap-4 mb-5 heading-register">
            <p>New to Edadcom</p>
            <p>Register Now!</p>
          </div>

          <div className="col-phone-number">
            <label htmlFor="Phone Number" className="text-base font-normal text-colorblack">Phone Number</label>
              <div className="flex items-center gap-2 p-3 mt-2 mb-2 text-base col-input rounded-xl">
                    <PhoneNumberInput onChange={(value) => setPhone(value)}/>
                </div>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>
          <button
            onClick={handleContinue}
            className="w-full h-12 pt-3 pb-3 pl-6 pr-6 text-base font-semibold text-white rounded-lg btn-continue bg-orangeColor"
          >
            Continue
          </button>

          <div className="col-conditions">
            <p>
              By continuing, you agree to Edadcom's{" "}
              <span>Conditions of Use</span> and{" "}
              <span>Privacy Notice.</span>
            </p>
          </div>

          <LoginandSignupWith text="Or sign up With" />
          <GoogleandFacebookBtn />
        </div>
        <SigninCol />
      </div>
    </div>
  );
}

export default SignUpContent;
