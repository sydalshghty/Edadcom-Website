import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import userIcon from "../assets/user-01.svg";
import wishlistIcon from "../assets/heart.svg";
import cartIcon from "../assets/shopping-cart-01.svg";
import EdadcomLogo from "../assets/Edadcom_Logo-removebg-preview 1.svg";
import searchIcon from "../assets/search-md.svg";
import "../CSS/navbar.css";

function Navbar(){
    return(
        <div className="w-full bg-white navbar-content">
            <div className="container flex items-center justify-between w-full h-full pt-4 pb-4">
                <div className="logo-col">
                    <img src={EdadcomLogo} alt="Edadcom" />
                </div>
                <div className="relative flex items-center justify-between pt-3 pb-3 pl-4 pr-4 col-search">
                    <input type="search" className="w-full h-full text-base font-semibold border-none outline-none text-textcolor" placeholder="Search"/>
                    <img src={searchIcon} alt="search" className="cursor-pointer icon" />
                </div>
                <div className="flex items-center justify-between gap-6 account-Wi-Ca-Content">
                    <div className="flex flex-col items-center justify-center account-col">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-bgIcon">
                            <img src={userIcon} alt="Account" />
                        </div>
                        <p className="text-base font-medium text-center text-orangeText">Account</p>
                    </div>
                    <div className="wishlist-col">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer content-wishlist bg-bgIcon">
                            <img src={wishlistIcon} alt="Wishlist" />
                            <div className="col-number">
                                <p>0</p>
                            </div>
                        </div>
                        <p className="text-base font-medium text-center text-orangeText">Wishlist</p>
                    </div>
                    <div className="cart-col">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer content-cart bg-bgIcon">
                            <img src={cartIcon} alt="cart" />
                            <div className="col-number">
                                <p>0</p>
                            </div>
                        </div>
                        <p className="text-base font-medium text-center text-orangeText">Cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;  