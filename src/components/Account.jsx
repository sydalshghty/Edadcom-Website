import guestIcon from "../assets/Guest-icon.svg";
import XMark from "../assets/x-close (1).svg";
import LoginIcon from "../assets/login-icon.svg";
import SignUpIcon from "../assets/signup-icon.svg";
import CartIcon from "../assets/shopping-cart-icon.svg";
import HeartIcon from "../assets/heart-icon (2).svg";
import { Link } from "react-router-dom";
import "../CSS/account.css";

function AccountDepartament({onClose}){
    
    return(
        <div className="fixed top-0 h-full right-16 account-departament bg-bgIcon">
            <div className="flex items-center justify-between w-full p-4 mb-12 heading-account h-14 bg-whitecolor">
                <div className="flex items-center gap-2 guest-col">
                    <img src={guestIcon} alt="guest-img" />
                    <p className="text-base font-semibold text-deliveryColor1">Guest</p>
                </div>
                <img src={XMark} alt="X-mark-icon" className="cursor-pointer x-mark-icon" onClick={onClose} />
            </div>
            <div className="w-full pl-4 pr-4 container-account">
                <div className="w-full mb-12 L-S-Content">
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 h-14 bg-whitecolor login-col">
                        <Link to={"/login"}>
                            <img src={LoginIcon} alt="login-icon" className="cursor-pointer"/>
                        </Link>
                        <Link to={"/login"} className="text-base font-semibold cursor-pointer text-deliveryColor1">Log in</Link>
                    </div>
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 signUp-col h-14 bg-whitecolor">
                        <Link to={"/signup"}>
                            <img src={SignUpIcon} alt="signUP" className="cursor-pointer" />
                        </Link>
                        <Link to={"/signup"} className="text-base font-semibold cursor-pointer text-deliveryColor1">Sign up</Link>
                    </div>
                </div>
                <div className="C-W-Content">
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 cart-col h-14 bg-whitecolor">
                        <img src={CartIcon} alt="" />
                        <p className="text-base font-semibold text-deliveryColor1">My Cart (0)</p>
                    </div>
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 wishlist-col h-14 bg-whitecolor">
                        <img src={HeartIcon} alt="heart-icon" />
                        <p className="text-base font-semibold text-deliveryColor1">My Wishlist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountDepartament;
