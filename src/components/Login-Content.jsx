import viewPassword from "../assets/Component 27.svg";
import robotImg from "../assets/recaptcha container.svg";
import googleIcon from "../assets/flat-color-icons_google.svg";
import facebookIcon from "../assets/logos_facebook.svg";
import checkoutImg from "../assets/solar_bag-check-outline.svg";
import heartImg from "../assets/favorite.svg";
import fluentImg from "../assets/fluent_box-20-filled.svg";
import userImg from "../assets/user-check-01.svg";
import GooglePlayImg from "../assets/GetItOnGooglePlay_Badge_Web_color_English 2.svg";
import AppStoreImg from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 2.svg";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import "../CSS/loginContent.css";
import "../CSS/forgetPassword.css";
import Swal from 'sweetalert2';

function LoginContent(){
      const handleForgetPassword = () => {
        Swal.fire({
        html: `
        <div class="content-message">
            <div class="col-text">
                <h1>Forget your password?</h1>
                <p>Enter the email address or mobile phone number associated with your  Edadcom account.</p>
            <div/>
            <div class="col-input">
                <label for="email" class="label-input">Email address / Phone number</label>
                <input type="email" id="email" class="input-email" placeholder="Enter your email">
            </div>
        <div/>
        `, 
        confirmButtonText: "Submit",
        customClass: {
            popup: "my-Popup",
            confirmButton: 'my-swal-button',
        },
        showConfirmButton: true,    
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

    //change Heart
    const [heart,setHeart] = useState(false);
    const handleHeart = () => {
        setHeart(!heart);
    }
    return(
        <div className="w-full mt-8 login-Content">
            <div className="container flex justify-between w-full">
                <div className="pt-8 pb-8 pl-4 pr-4 bg-white rounded-lg signin-content">
                    <div className="flex items-center gap-4 heading-signin">
                        <p className="font-semibold">Already a member?</p>
                        <p className="font-semibold">Sign in!</p>
                    </div>
                    <p className="text-base font-normal P-access">Get access to your orders, save your favorite tools, and get personalized deals made just for you!</p>
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
                                    <FaEyeSlash className="display-password" onClick={() => {
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
                        <div className="col-login">
                            <button className="pt-3 pb-3 pl-6 pr-6 text-base font-semibold rounded-lg cursor-pointer bg-orangeColor text-whitecolor ">Log in</button>
                        </div>
                        <div className="login-with">
                            <p className="relative w-full text-base font-normal text-center text- deliveryColor1">Or log in With</p>
                        </div>
                        <div className="btn-Google-Facebook">
                            <div className="flex items-center justify-center gap-2 pt-2 pb-2 pl-4 pr-4 rounded-lg cursor-pointer col-google">
                                <img className="cursor-pointer" src={googleIcon} alt="google-icon" />
                                <p className="text-base font-normal text-colorblack">Google</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 pt-2 pb-2 pl-4 pr-4 rounded-lg cursor-pointer col-facebook">
                                <img className="cursor-pointer" src={facebookIcon} alt="facebook-icon" />
                                <p className="text-base font-normal text-colorblack">Facebook</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="pt-8 pb-8 pl-4 pr-4 rounded-lg register-content bg-registerBG">
                    <div className="flex items-center justify-between heading-register">
                        <p className="font-semibold text-blackcolor">New to Edadcom?</p>
                        <p className="font-semibold text-orangeColor">Register Now!</p>
                    </div>
                    <p className="mb-5 text-base font-normal account-p text-colorblack">Create an account with us and you can:</p>
                    <div className="flex flex-col content-checkout">
                        <div className="flex gap-2">
                            <img className="cursor-pointer" src={checkoutImg} alt="checkout-img" />
                            <p className="text-base font-normal text-colorblack">Checkout even faster</p>
                        </div>
                        <div className="flex gap-2">
                            {heart ? 
                                <FontAwesomeIcon icon={faHeart} className="heart-icon" onClick={handleHeart} />
                            :
                                <img className="cursor-pointer" src={heartImg} alt="heart-img" onClick={handleHeart} />
                            }
                            <p className="text-base font-normal text-colorblack">Add items to your wishlist</p>
                        </div>
                        <div className="flex gap-2">
                            <img className="cursor-pointer" src={fluentImg} alt="order-img" />
                            <p className="text-base font-normal text-colorblack">Track your order history</p>
                        </div>
                        <div className="flex gap-2">
                            <img className="cursor-pointer" src={userImg} alt="app-img" />
                            <p className="text-base font-normal text-colorblack">Get all these alerts on the go with our app experience!</p>
                        </div>
                    </div>
                    <div className="btn-register">
                        <button className="w-full h-full pt-3 pb-3 pl-6 pr-6 text-base font-semibold rounded-lg cursor-pointer bg-orangeColor text-whitecolor">Register</button>
                    </div>
                    <div className="edadcom-apps ">
                        <p className="mb-4 text-xl font-semibold text-blackcolor">Get the Edadcom apps</p>
                        <p className="text-xl font-normal ">Unlock special deals and shop top-quality tools anytime, anywhere!</p>
                        <div className="flex gap-4 google-appstore-col">
                            <img className="cursor-pointer" src={GooglePlayImg} alt="GooglePlay" />
                            <img className="cursor-pointer" src={AppStoreImg} alt="AppStore" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginContent;