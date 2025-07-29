import SigninCol from "./signin-col";
import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/signup2-content.css";
function SignUPContent2() {
   const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);
    const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return; // يقبل رقم واحد فقط
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // التبديل إلى الخانة التالية
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const navigateSignup2 = useNavigate("");
 const handleNavigateSignup2 = () => {
  const isCodeComplete = code.every((digit) => digit !== "");
  const isCodeValid = code.every((digit) => /^[0-9]$/.test(digit));

  if (!isCodeComplete) {
    alert("Please enter the full 6-digit code.");
    return;
  }

  if (!isCodeValid) {
    alert("Invalid OTP code. Please enter only digits.");
    return;
  }

  const otp = code.join("");
  console.log("OTP:", otp);
  
  navigateSignup2("/signup2");
};


    return(
        <div className="w-full h-full mb-10 signup-content2 mt-7">
            <div className="container flex justify-between w-full h-full">
                <div className="flex flex-col gap-8 pt-8 pb-8 pl-4 pr-4 bg-white col-register-now">
                    <div className="flex items-center gap-4 heading-register">
                        <p>New to Edadcom</p>
                        <p>Register Now!</p>
                    </div>
                    <div className="flex flex-col items-center justify-center verify-oTP-col">
                        <p className="mb-2 text-base font-semibold text-blackcolor">Verify OTP</p>
                        <div className="flex gap-4 all-inputs">
                                {code.map((digit, index) => (
                                    <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => (inputsRef.current[index] = el)}
                                    className="text-xl text-center border border-gray-400 rounded-lg outline-none w-14 h-14 focus:border-orange-500"
                                    />
                                ))}
                        </div>
                    </div>
                    <button className="w-full h-12 pt-3 pb-3 pl-6 pr-6 text-base font-semibold text-white rounded-lg btn-signup bg-orangeColor" onClick={handleNavigateSignup2}>Sign up</button>
                    <p className="p-continue">By continuing, you agree to Edadcom's <span>Conditions of Use</span> and <span>Privacy Notice.</span></p>
                </div>
                <SigninCol/>
            </div>
        </div>
    )
}
export default SignUPContent2;
