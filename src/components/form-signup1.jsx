import PhoneNumberInput from "./Phone-Input";
import viewPassword from "../assets/view-password.svg";
import LoginandSignupWith from "./login-signup-with";
import GoogleandFacebookBtn from "./google-facebookBtn";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import "../CSS/formsignup1.css";
import { Link } from "react-router-dom";

function FormSignup1() {
    //const [phone, setPhone] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [gender, setGender] = useState("");
    const [date, setDate] = useState("");
    const [nationality, setNationality] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
// new-Password-Feature
    const [showPassword,setShowPassword] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handlePasswordToText = () => {
        setPasswordType("text");
    }
    const handlePasswordToPassword = () => {
        setPasswordType("password");
    }

    const handleNewPassword = () => { 
        setShowPassword(! showPassword);
    }

    // confirm-Password-Feature
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const [confirmpasswordType, setConfirmPasswordType] = useState("password");
    const handleConfirmPasswordToText = () => {
        setConfirmPasswordType("text");
    }
    const handleConfirmPasswordToPassword = () => {
        setConfirmPasswordType("password");
    }

    const handleConfirkmPassword = () => { 
        setShowConfirmPassword(! showConfirmPassword);
    }

    const submitForm = (e) => {
        e.preventDefault();
         console.log({
            phone,
            fName,
            lName,
            gender,
            date,
            nationality,
            email,
            newPassword,
            confirmPassword
    })
    }
    return(
        <div className="pt-8 pb-8 pl-4 pr-4 bg-white rounded-lg formsignup1-content">
            <div className="flex items-center gap-4 mb-5 heading-form">
                <p className="text-blackcolor">New to Edadcom</p>
                <p className="text-orangeColor">Register Now!</p>
            </div>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                submitForm();
            }}>
                <div className="col-phone-number">
                    <label htmlFor="Phone Number" className="text-base font-normal text-colorblack">Phone Number</label>
                    <div className="flex items-center gap-2 p-3 mt-2 mb-5 text-base col-input rounded-xl">
                        <PhoneNumberInput onChange={(value) => setPhone(value)}/>
                    </div>
                </div>
                <div className="content-name">
                    <label htmlFor="" className="text-base font-normal text-colorblack">Your Name</label>
                    <div className="flex w-full gap-5 mt-2 mb-5 col-input-name">
                        <input type="text" className="pl-3 text-base font-normal outline-none rounded-xl text-textcolor" required placeholder="First Name" onChange={(e) => {
                            setFName(e.target.value);
                        }}/>
                        <input type="text" className="pl-3 text-base font-normal outline-none rounded-xl text-textcolor" required placeholder="Last Name" onChange={(e) => {
                            setLName(e.target.value);
                        }}/>
                    </div>
                </div>
                <div className="flex w-full gap-5 mt-2 mb-5 content-gender-date">
                    <div className="col-gender">
                        <label htmlFor="" className="text-base font-normal text-colorblack">Gender <span>(Optional)</span></label>
                        <select id="gender" name="gender" className="w-full h-12 pl-3 pr-3 mt-2 text-base font-normal outline-none rounded-xl text-textcolor" value={gender} onChange={(e) => {
                            setGender(e.target.value);
                        }}>
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="col-date">
                        <label htmlFor="" className="text-base font-normal text-colorblack">Date of birth <span>(optional)</span></label>
                        <input type="date" className="w-full h-12 pl-3 pr-3 mt-2 text-base font-normal outline-none rounded-xl text-textcolor" placeholder="DD/MM/YYYY" onChange={(e) => {
                            setDate(e.target.value)
                        }}/>
                    </div>
                </div>
                <div className="flex flex-col col-Nationality">
                    <label htmlFor="" className="text-base font-normal text-colorblack">Nationality <span>(Optional)</span></label>
                       <select
                       className="w-full h-12 pl-3 pr-3 mt-2 mb-5 text-base font-normal outline-none rounded-xl text-textcolor"
                        id="nationality"
                        name="nationality"
                        value={nationality}
                        onChange={(e) => {
                            setNationality(e.target.value);
                        }}
                        >
                        <option value="">select your nationality</option>
                        <option value="egyptian">Egyptian</option>
                        <option value="saudi">Saudi</option>
                        <option value="emirati">Emirati</option>
                        <option value="jordanian">Jordanian</option>
                        <option value="moroccan">Moroccan</option>
                        <option value="tunisian">Tunisian</option>
                        <option value="sudanese">Sudanese</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5 col-email">
                    <label htmlFor="" className="text-base font-normal text-colorblack">Email address</label>
                    <input type="email" placeholder="Enter your email" className="w-full h-12 pl-3 pr-3 mt-2 text-base font-normal outline-none rounded-xl text-textcolor" required onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                </div>
                <div className="mb-5 col-new-password">
                    <label htmlFor="" className="text-base font-normal text-colorblack">New Password</label>
                    <div className="flex items-center justify-center w-full h-12 pl-3 pr-3 mt-2 text-base font-normal outline-none rounded-xl text-textcolor">
                        <input type={passwordType} className="w-full h-full border-none outline-none" placeholder="********" required onChange={(e) => {
                            setNewPassword(e.target.value);
                        }}/>
                        {showPassword ? 
                            <img src={viewPassword} alt="show-password" className="cursor-pointer" onClick={() => {
                                handleNewPassword();
                                handlePasswordToPassword();
                            }}/>
                        :
                            <FaRegEyeSlash className="cursor-pointer"  style={{fontSize: "23px"}} onClick={() => {
                                handleNewPassword();
                                handlePasswordToText();
                            }}/>
                        }
                    </div>
                </div>
                <div className="mb-5 col-confirm-password">
                    <label htmlFor="" className="text-base font-normal text-colorblack">Confirm New Password</label>
                    <div className="flex items-center justify-center w-full h-12 pl-3 pr-3 mt-2 text-base font-normal outline-none rounded-xl text-textcolor">
                        <input type={confirmpasswordType} placeholder="********" className="w-full h-full border-none outline-none" required onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}/>
                        {showConfirmPassword ? 
                            <img src={viewPassword} alt="show-password" className="cursor-pointer"  onClick={() => {
                                handleConfirkmPassword();
                                handleConfirmPasswordToPassword();
                            }}/>
                        :
                            <FaRegEyeSlash className="cursor-pointer"  style={{fontSize: "23px"}} onClick={() => {
                                handleConfirkmPassword();
                                handleConfirmPasswordToText();
                            }}/>
                        }
                    </div>
                </div>
                <Link to={"/signup2"}>
                    <button type="submit" className="w-full h-12 pt-3 pb-3 pl-6 pr-6 mt-3 text-center text-white rounded-lg bg-orangeColor mb-7">Continue</button>
                </Link>
                <p className="mb-5 text-base font-normal p-continue text-textcolor">By continuing, you agree to Edadcom's <span>Conditions of Use</span> and <span>Privacy Notice.</span></p>
                <LoginandSignupWith text="Or sign up With"/>
                <GoogleandFacebookBtn/>
            </form>
        </div>

    )
}
export default FormSignup1;