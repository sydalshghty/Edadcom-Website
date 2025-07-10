import "../CSS/NavLinks.css";
import materialsImg from "../assets/material-symbols_dashboard-outline-rounded.svg";
import chevrondown from "../assets/chevron-down.svg";
function NavLinks(){
    return(
        <div className="w-full bg-white shadow-md navLinks-content h-14">
            <div className="container flex w-full gap-12">
                <div className="flex items-center justify-center gap-2 pt-4 pb-4 pl-2 pr-2 cursor-pointer col-categories bg-orangeText">
                    <img className="cursor-pointer" src={materialsImg} alt={materialsImg} />
                    <p className="ml-2 mr-2 text-base font-medium text-whitecolor">Categories</p>
                    <img className="cursor-pointer" src={chevrondown} alt={chevrondown} />
                </div>
                <ul className="flex items-center justify-center gap-6">
                    <li>
                        <a className="text-base font-semibold text-blackcolor" href="#">Home</a>
                    </li>
                    <li>
                        <a className="text-base font-semibold text-blackcolor" href="#">Shop</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavLinks;