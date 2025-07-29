import viewPassword from "../assets/Component 27.svg";
import robotImg from "../assets/recaptcha container.svg";
import GooglePlayImg from "../assets/GetItOnGooglePlay_Badge_Web_color_English 2.svg";
import AppStoreImg from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 2.svg";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import "../CSS/loginContent.css";
import "../CSS/forgetPassword.css";
import Swal from 'sweetalert2';
import GoogleandFacebookBtn from "./google-facebookBtn";
import LoginandSignupWith from "./login-signup-with";
import CheckoutContent from "./checkout-content";
import AlreadyAMember from "./Already-a-member";
import LoginButton from "./login-button";
import EdadcomApps from "./edadcom-apps";
function LoginContent(){
const handleForgetPassword = () => {
  Swal.fire({
    html: `
      <div class="content-message">
        <div class="col-text">
          <h1>Forget your password?</h1>
          <p>Enter the email address or mobile phone number associated with your Edadcom account.</p>
        </div>
        <div class="col-input">
          <label for="email" class="label-input">Email address / Phone number</label>
          <input type="email" id="email" class="input-email" placeholder="Enter your email">
        </div>
      </div>
    `,
    confirmButtonText: "Submit",
    customClass: {
      popup: "my-Popup",
      confirmButton: 'my-swal-button',
    },
    showConfirmButton: true,
    preConfirm: () => {
      const email = document.getElementById("email").value.trim();
      if (!email) {
        alert("Please enter your email or phone number");
        return false;
      }
      return email;
    }
  }).then((result) => {
    if (result.isConfirmed && result.value) {
      Swal.fire({
        html: `
          <div class="content-verify-code">
            <div class="col-text">
              <h1>Verify Code</h1>
              <p>Enter the verification code sent to your email or phone number</p>
            </div>
            <div class="col-input">
              <label for="code" class="label-input">Code</label>
              <input type="text" id="code" class="input-email" placeholder="Enter code">
            </div>
            <div class="resend-code">
              <p>Didn’t receive a code?</p>
              <p><a href="#">Resend code</a></p>
            </div>
          </div>
        `,
        confirmButtonText: "Continue",
        customClass: {
          popup: "my-Popup",
          confirmButton: 'my-verify-button',
        },
        showConfirmButton: true,
        preConfirm: () => {
          const code = document.getElementById("code").value.trim();
          if (!code) {
            alert("Please enter the verification code");
            return false;
          }
          return code;
        }
      }).then((verifyResult) => {
        if (verifyResult.isConfirmed && verifyResult.value) {
          Swal.fire({
            html: `
              <div class="content-set-newPassword">
                <div class="col-text">
                  <h1>Set New password</h1>
                  <p>Your previous password has been reset. Please set a new password for your account.</p>
                </div>

                <div class="col-input new-password">
                  <label for="new-password" class="label-input">New Password</label>
                  <div class="col-input input-with-icon">
                    <input type="password" id="new-password" class="input-email" placeholder="********">
                    <i class="far fa-eye icon-eye" id="toggle-new-password"></i>
                  </div>
                </div>

                <div class="col-input confirm-password">
                  <label for="confirm-password" class="label-input">Confirm New Password</label>
                  <div class="col-input input-with-icon">
                    <input type="password" id="confirm-password" class="input-email" placeholder="********">
                    <i class="far fa-eye icon-eye" id="toggle-confirm-password"></i>
                  </div>
                </div>
              </div>
            `,
            confirmButtonText: "Set password",
            customClass: {
              popup: "my-Popup-password",
              confirmButton: 'set-password-button',
            },
            didOpen: () => {
              // Toggle New Password
              const newPasswordInput = document.getElementById("new-password");
              const toggleNew = document.getElementById("toggle-new-password");

              toggleNew.addEventListener("click", () => {
                if (newPasswordInput.type === "password") {
                  newPasswordInput.type = "text";
                  toggleNew.classList.remove("fa-eye");
                  toggleNew.classList.add("fa-eye-slash");
                } else {
                  newPasswordInput.type = "password";
                  toggleNew.classList.remove("fa-eye-slash");
                  toggleNew.classList.add("fa-eye");
                }
              });

              // Toggle Confirm Password
              const confirmPasswordInput = document.getElementById("confirm-password");
              const toggleConfirm = document.getElementById("toggle-confirm-password");

              toggleConfirm.addEventListener("click", () => {
                if (confirmPasswordInput.type === "password") {
                  confirmPasswordInput.type = "text";
                  toggleConfirm.classList.remove("fa-eye");
                  toggleConfirm.classList.add("fa-eye-slash");
                } else {
                  confirmPasswordInput.type = "password";
                  toggleConfirm.classList.remove("fa-eye-slash");
                  toggleConfirm.classList.add("fa-eye");
                }
              });
            }
          });
        }
      });
    }
  });
};

    //rememberCheck
    const [appearCheck,setAppearCheck] = useState(false);
    const handleCheck = () => {
        setAppearCheck(!appearCheck);
    }
    //robotCheck
    const [checkRobot,setCheckRobot] = useState(false);
    const handleCheckRobot = () => {
        setCheckRobot(true)
    }
    //passwordInput
    const [appearPassword,setAppearPassword] = useState(true);
    const handlePassword = () => {
        setAppearPassword(!appearPassword)
    }

    const [typeInput,setTypeInput] = useState("password");

    const changeTypeInputToText = () => {
        setTypeInput("text");
    }

    const changeTypeInputToPassword = () => {
        setTypeInput("password");
    }
    //

    // placeholder Email
    const [email, setEmail] = useState("Enter your email");
    const focusEmail = () => {
        setEmail("");
    }
    const blurEmail = () => {
        setEmail("Enter your email");
    }

    //placeholder Password
    const [password, setPassword] = useState("********");
    const focusPassword = () => {
        setPassword("");
    }
    const blurPassword = () => {
        setPassword("********");
    }

    return(
        <div className="w-full mt-7 login-Content">
            <div className="container flex justify-between w-full">
                <div className="pt-8 pb-8 pl-4 pr-4 bg-white rounded-lg signin-content">
                    <AlreadyAMember text="log in!"/>
                    <form action="">
                        <div className="flex flex-col mb-5 col-email">
                            <label htmlFor="Email address / Phone number" className="text-base font-normal text-colorblack">Email address / Phone number</label>
                            <input type="email" 
                            onFocus={focusEmail}
                            onBlur={blurEmail}
                            placeholder={email} 
                            className="p-3 text-base font-normal border-none outline-none rounded-xl text-textcolor" />
                        </div>
                        <div className="flex flex-col mb-5 col-password">
                            <label htmlFor="Password" className="text-base font-normal text-colorblack">Password</label>
                            <div className="flex w-full p-3 text-base font-normal border-none outline-none rounded-xl text-textcolor">
                                <input 
                                onFocus={focusPassword}
                                onBlur={blurPassword}
                                type={typeInput} 
                                placeholder={password} className="w-full border-none outline-none"/>
                                {appearPassword ? 
                                    <img src={viewPassword} alt="view-password" className="cursor-pointer" onClick={() => {
                                        handlePassword();
                                        changeTypeInputToPassword();
                                    }} />
                                    :
                                    <FontAwesomeIcon icon={faEyeSlash} className="display-password" onClick={() => {
                                      handlePassword();
                                        changeTypeInputToText();
                                    }}/>
                                }
                            </div>
                        </div>
                        <div className="flex items-center justify-between remember-forget-col">
                            <div className="flex col-remember">
                                <div className={`remember-me ${appearCheck ? "blueBG" : ""}`} onClick={handleCheck}>
                                    <FontAwesomeIcon icon={faCheck} className="icon"/>
                                </div>
                                <p className="text-base font-medium text-deliveryColor1">Remember me</p>
                            </div>
                            <div className="col-forget">
                                <p className="text-base font-medium cursor-pointer text-deliveryColor1" onClick={handleForgetPassword}>Forget Password?</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between col-robot">
                            <div className="flex items-center gap-2">
                                <div className={`check-robot ${checkRobot ? "greenBG" : ""}`} onClick={handleCheckRobot}> 
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                                <p className="text-sm font-normal text-colorblack">I’m not a robot</p>
                            </div>
                                <img src={robotImg} alt="robot-img" />
                        </div>
                        <LoginButton text="Log in"/>
                        <LoginandSignupWith text="Or log in With"/>
                        <GoogleandFacebookBtn/>
                    </form>
                </div>
                <div className="pt-8 pb-8 pl-4 pr-4 rounded-lg register-content bg-registerBG">
                    <div className="flex items-center justify-between heading-register">
                        <p className="font-semibold text-blackcolor">New to Edadcom?</p>
                        <p className="font-semibold text-orangeColor">Register Now!</p>
                    </div>
                    <p className="mb-5 text-base font-normal account-p text-colorblack">Create an account with us and you can:</p>
                    <CheckoutContent/>
                    <div style={{marginTop: "-10px"}}>
                      <LoginButton text="Register"/>
                    </div>
                    <div style={{marginTop: "-20px"}}>
                      <EdadcomApps/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginContent;