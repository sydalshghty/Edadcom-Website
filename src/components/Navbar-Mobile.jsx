import "../CSS/NavbarMobile.css";
import EdadcomLogo from "../assets/Edadcom_Logo.svg";
import cartIcon from "../assets/shopping-cart-01.svg";
import menuIcon from "../assets/menu-01.svg";
import searchIcon from "../assets/search-md (1).svg";
function NavbarMobile(){
    return(
        <div className="w-full p-4 shadow-md Navbar-Mobile h-11">
            <div className="container flex items-center justify-between w-full h-full">
                <div className="col-logo">
                    <img src={EdadcomLogo} alt="edadcom-logo" />
                </div>
                <div className="relative flex items-center gap-2 col-search">
                    <img className="w-4 h-4 cursor-pointer" src={searchIcon} alt="search-icon" />
                    <input className="absolute h-full p-2 ml-5 text-sm font-normal border-none outline-none" type="search" placeholder="Search" />
                </div>
                <div className="col-cart">
                    <div className="relative flex items-center justify-center w-8 h-6 rounded-full cursor-pointer content-cart bg-bgIcon">
                        <img className="w-6 h-6" src={cartIcon} alt="cart" />
                        <div className="col-number">
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div className="col-bars">
                    <img className="cursor-pointer" src={menuIcon} alt="bars-icon" />
                </div>
            </div>
        </div>
    )
}
export default NavbarMobile;