import facebookIcon from "../assets/ri_facebook-fill.svg";
import twitterIcon from "../assets/ri_twitter-x-fill.svg";
import linkedinIcon from "../assets/flowbite_linkedin-solid.svg";
import youtubeIcon from "../assets/vaadin_youtube.svg";
import instagramIcon from "../assets/line-md_instagram.svg";
import chevronRight from "../assets/chevron-right.svg";
import { Link } from "react-router-dom";
import "../CSS/header.css";
function Header(){
    return(
        <div class="header-content w-full bg-headerBG">
                <div class="container flex items-center content-center pt-2 pb-2 justify-between">
                    <div class="english-col flex items-center">
                        <p className="mr-1 text-base font-normal capitalize text-whitecolor">English (US)</p>
                        <img className="cursor-pointer icon text-whitecolor" src={chevronRight} alt="chevron-Right" />
                    </div>
                    <div class="free-col">
                        <p className="text-base font-normal text-whitecolor">Free Returns. Standard Shipping. Orders 100SAR.</p>
                    </div>
                    <ul className="flex gap-8 list-none">
                        <li>
                            <Link to={"/Contact Us"} className="text-base font-normal list-none text-whitecolor">Contact Us</Link>  
                        </li>
                        <li>
                            <Link to={"/About US"} className="text-base font-normal list-none text-whitecolor">About US</Link>
                        </li>
                        <li>
                            <Link to={"/Terms"} className="text-base font-normal list-none text-whitecolor">Terms</Link>
                        </li>
                        <li>
                            <Link to={"/FQA"} className="text-base font-normal list-none text-whitecolor">FQA</Link>
                        </li>
                    </ul>
                    <div class="icons-social flex gap-4">
                        <Link to={"https://www.facebook.com/Edadcom.sa/"} target="_blank">
                            <img className="w-6 h-6 cursor-pointer icon-social text-whitecolor" src={facebookIcon} alt="facebookIcon" />
                        </Link>
                        <Link to={"https://x.com/Edadcom_ETC"} target="_blank">
                            <img className="w-6 h-6 cursor-pointer icon-social text-whitecolor" src={twitterIcon} alt="twitterIcon" />
                        </Link>
                        <Link to={"https://www.linkedin.com/company/edadcom-etc/"} target="_blank">
                            <img className="w-6 h-6 cursor-pointer icon-social text-whitecolor" src={linkedinIcon} alt="linkedinIcon" />
                        </Link>
                        <Link to={"https://www.youtube.com/edadcom"} target="_blank">
                            <img className="w-6 h-6 cursor-pointer icon-social text-whitecolor" src={youtubeIcon} alt="youtubeIcon" />
                        </Link>
                        <Link to={"https://www.instagram.com/edadcom_/"} target="_blank">
                            <img className="w-6 h-6 cursor-pointer icon-social text-whitecolor" src={instagramIcon} alt="instagramIcon" />
                        </Link>
                    </div>
                </div>
            </div>
    )
}
export default Header;