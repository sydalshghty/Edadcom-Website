import "../CSS/NavbarMobile.css";
import EdadcomLogo from "../assets/Edadcom_Logo (3).svg";
import cartIcon from "../assets/shopping-cart-01.svg";
import menuIcon from "../assets/menu-01.svg";
import MenuLogin from "./menu-login";
import { useState } from "react";

function NavbarMobile(){
    const [showMenue,setShowmMenue] = useState(false);
    const handleMenue = () => {
        setShowmMenue(true);
    }
    return(
        <>
        <div className="w-full shadow-md Navbar-Mobile h-11">
            <div className="container flex items-center justify-between w-full h-full">
                <div className=" col-logo">
                    <img src={EdadcomLogo} alt="edadcom-logo" className="w-full h-full"/>
                </div>
                <div className="cart-bars-content">
                    <div className="col-cart">
                        <div className="relative flex items-center justify-center w-8 h-6 rounded-full cursor-pointer content-cart bg-bgIcon">
                            <img className="w-6 h-6" src={cartIcon} alt="cart" />
                            <div className="col-number">
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-bars">
                        <img className="cursor-pointer" src={menuIcon} alt="bars-icon" onClick={handleMenue} />
                    </div>
                </div>
            </div>
        </div>
        {showMenue ? 
            <MenuLogin onClose={() => setShowmMenue(false)}/>
        :
            ""
        }
        </>
    )
}
export default NavbarMobile;