import EdadcomLogo  from "../assets/Edadcom_Logo (3).svg";
import XmarkIcon from "../assets/x-close (1).svg";
import EnglishIcon from "../assets/English-icon.svg";
import LocationImg from "../assets/marker-pin-01 (2).svg";
import rightIcon from "../assets/chevron-right (2).svg";
import brandIcon from "../assets/brands-icon.svg";
import offersIcon from "../assets/offers-icon.svg";
import orderIcon from "../assets/order-icon.svg";
import categoriesImg from "../assets/categories-icon.svg";
import featuredImg from "../assets/featured-icon.svg";
import newArrivalImg from "../assets/shopping-cart-icon.svg";
import heartImg from "../assets/heart-icon.svg";
import "../CSS/menu-login.css";

function MenuLogin({onClose}){
    return(
        <div className="absolute top-0 left-0 z-50 w-full pt-4 pb-4 menu-login bg-bgIcon">
            <div className="flex items-center justify-between w-full p-4 edadcom-heading bg-whitecolor">
                <img src={EdadcomLogo} alt="edadcom-logo" />
                <img src={XmarkIcon} alt="xmark-icon" className="cursor-pointer" onClick={onClose}/>
            </div>
            <div className="container text-white">
                <div className="mt-5 mb-5 content-L-R">
                    <div className="flex items-center justify-between w-full p-4 h-14 bg-whitecolor content-language">
                        <div className="flex items-center col-english">
                            <img src={EnglishIcon} alt="english" />
                            <p className="text-base font-semibold text-deliveryColor1">English</p>
                        </div>
                        <p className="text-base font-semibold p-Arabic text-deliveryColor1">العربية</p>
                    </div>
                    <div className="flex items-center justify-between w-full p-4 pl-6 pr-6 content-location h-14 bg-whitecolor">
                        <div className="flex items-center riyadh-col">
                            <img src={LocationImg} alt="riyadh-location" />
                            <p className="text-base font-semibold text-deliveryColor1">Riyadh</p>
                        </div>
                        <img src={rightIcon} alt="right-icon" className="cursor-pointer icon-right" />
                    </div>
                </div>
                <div className="content-B-O-O">
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 h-14 bg-whitecolor col-brands">
                        <img src={brandIcon} alt="brands-icon" />
                        <p className="text-base font-semibold text-deliveryColor1">Brands</p>
                    </div>
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 col-offers h-14 bg-whitecolor">
                        <img src={offersIcon} alt="offers-icon" />
                        <p className="text-base font-semibold text-deliveryColor1">Offers</p>
                    </div>
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 col-orders h-14 bg-whitecolor">
                        <img src={orderIcon} alt="" />
                        <p className="text-base font-semibold text-deliveryColor1">Orders</p>
                    </div>
                </div>
                <div className="content-categories">
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 col-categories h-14 bg-whitecolor">
                        <img src={categoriesImg} alt="categories-img" />
                        <p className="text-base font-semibold text-deliveryColor1">Categories</p>
                    </div>
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 col-featured h-14 bg-whitecolor">
                        <img src={featuredImg} alt="featureImg" />
                        <p className="text-base font-semibold text-deliveryColor1">Featured</p>
                    </div>
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 col-arrivals h-14 bg-whitecolor">
                        <img src={newArrivalImg} alt="cart-img" />
                        <p className="text-base font-semibold text-deliveryColor1">New arrivals</p>
                    </div>
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 col-price-Low h-14 bg-whitecolor">
                        <img src={newArrivalImg} alt="cart-img" />
                        <p className="text-base font-semibold text-deliveryColor1">Price - Low to High</p>
                    </div>
                    <div className="flex items-center w-full gap-2 pt-4 pb-4 pl-6 pr-6 col-price-High h-14 bg-whitecolor">
                        <img src={heartImg} alt="heart-img" />
                        <p className="text-base font-semibold text-deliveryColor1">Price - High to Low</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuLogin;