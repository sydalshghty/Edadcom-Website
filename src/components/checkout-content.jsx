import checkoutImg from "../assets/solar_bag-check-outline.svg";
import heartImg from "../assets/favorite.svg";
import fluentImg from "../assets/fluent_box-20-filled.svg";
import userImg from "../assets/user-check-01.svg";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../CSS/checkout-content.css";

function CheckoutContent(){
    const [heart,setHeart] = useState(false);
        const handleHeart = () => {
            setHeart(!heart);
        }
    return(
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
    )
}
export default CheckoutContent;