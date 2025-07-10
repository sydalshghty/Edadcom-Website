import EdadcomLogo from "../assets/Edadcom_Logo (1).svg";
import googlePlay from "../assets/GetItOnGooglePlay_Badge_Web_color_English 2.svg";
import appStore from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 2.svg";
import emailIcon from "../assets/Icon-email.svg";
import whatsappIcon from "../assets/ic_outline-whatsapp.svg";
import visaImg from "../assets/image-visa.svg";
import expressImg from "../assets/image-Express.svg";
import masterCardImg from "../assets/image-MasterCard.svg";
import madaImg from "../assets/image-mada.svg";
import PayImg from "../assets/image-Pay.svg";
import tabbyImg from "../assets/image-tabby.svg";
import tamaraImg from "../assets/image-tamara.svg";
import bacetaImg from "../assets/image-baceta.svg";
import facebookIcon from "../assets/ri_facebook-fill (1).svg";
import twiteerIcon from "../assets/ri_twitter-x-fill (1).svg";
import linkedinIcon from "../assets/flowbite_linkedin-solid (1).svg";
import youtubeIcon from "../assets/vaadin_youtube (1).svg";
import instagramIcon from "../assets/line-md_instagram (1).svg";
import { Link } from "react-router-dom";
import "../CSS/footer.css";

function Footer(){
    return(
        <div className="w-full pt-2 pb-2 footer-departament bg-riyadhColor">
            <div className="container w-full">
                <div className="flex justify-between w-full gap-12 pt-4 pb-4 footer-content">
                    <div className="flex flex-col gap-4 edadcom-content">
                        <div className="edadcom-logo">
                            <div className="flex items-center justify-center w-full col-logo">
                                <img src={EdadcomLogo} className="mb-4" alt="edadcom-logo" />
                            </div>
                            <p className="text-xl font-semibold text-whitecolor">(Edadcom Trading Company) </p>
                        </div>
                        <div className="w-full gap-4 app-download ml-14">
                            <p className="mb-5 text-xl font-semibold text-whitecolor">Download our apps</p>
                            <img src={googlePlay} alt="google-play" className="mb-4 cursor-pointer" />
                            <img src={appStore} alt="app-store" className="mb-4 cursor-pointer"/>
                        </div>
                    </div>
                    <div className="company-links">
                        <p className="mb-4 text-xl font-semibold text-whitecolor">Company</p>
                        <ul>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/All Services"} className="text-xl font-normal text-whitecolor">All Services</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/About Us"} className="text-xl font-normal text-whitecolor">About Us</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/Contact Us"} className="text-xl font-normal text-whitecolor">Contact Us</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/Privacy Policy"} className="text-xl font-normal text-whitecolor">Privacy Policy</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/Terms of Use"} className="text-xl font-normal text-whitecolor">Terms of Use</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/Cookie-Policy"} className="text-xl font-normal text-whitecolor">Cookie-Policy</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/FAQS"} className="text-xl font-normal text-whitecolor">FAQS</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="categories-links">
                        <p className="mb-4 text-xl font-semibold text-whitecolor">Categories</p>
                        <ul>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/Power Tools"} className="text-xl font-normal text-whitecolor">Power Tools</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/Hand Tools"} className="text-xl font-normal text-whitecolor">Hand Tools</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/Welding Equipment"} className="text-xl font-normal text-whitecolor">Welding Equipment</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/Corporate Sales"} className="text-xl font-normal text-whitecolor">Corporate Sales</Link>
                            </li>
                            <li className="relative flex items-center justify-start">
                                <Link to={"/Careers"} className="text-xl font-normal text-whitecolor">Careers</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-us">
                        <p className="mb-4 text-xl font-semibold text-whitecolor">Contact Us</p>
                        <div className="flex items-center gap-2 mb-4 email-col">
                            <Link to={"mailto:support@edadcom.com"}>
                                <img src={emailIcon} alt="email-icon" className="cursor-pointer" />
                            </Link>
                            <Link to={"mailto:support@edadcom.com"} className="text-xl font-normal link text-whitecolor" target="_blank">support@edadcom.com</Link>
                        </div>
                        <p className="mb-4 text-xl font-normal p-number text-whitecolor">+966 9200 11599</p>
                        <div className="flex items-center gap-2 mb-4 whatsapp-col">
                            <Link to={"https://wa.me/966920011599"} target="_blank">
                                <img src={whatsappIcon} alt="whatsapp-icon" className="cursor-pointer"/>
                            </Link>
                            <Link className="text-xl font-normal link text-whitecolor" to={"https://wa.me/966920011599"}  target="_blank">+966 9200 11599</Link>
                        </div>
                        <p className="mb-4 text-xl font-normal text-whitecolor p-available">Available 24/7</p>
                        <p className="mb-4 text-xl font-normal p-today text-whitecolor">Saturday - Thursday: 8:00 AM - 9:00 PM</p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full pt-4 pb-4 mb-4 paymant-content text-whitecolor">
                    <div className="content-paymant">
                        <div className="flex items-center gap-6 visa-content">
                            <p className="text-xl font-semibold text-whitecolor">We accept:</p>
                            <div className="flex gap-6 all-paymant">
                                <Link to={"/visa"} className="link">
                                    <img src={visaImg} alt="visa-img" />
                                </Link>
                                <Link to={"/American express"} className="link">
                                    <img src={expressImg} alt="American-Express" />
                                </Link>
                                <Link to={"/MasterCard"} className="link">
                                    <img src={masterCardImg} alt="MasterCard" />
                                </Link>
                                <Link to={"/mada"} className="link">
                                    <img src={madaImg} alt="mada" />
                                </Link>
                                <Link to={"/Pay"} className="link">
                                    <img src={PayImg} alt="Pay" />
                                </Link>
                                <Link to={"/tabby"} className="link">
                                    <img src={tabbyImg} alt="tabby" />
                                </Link>
                                <Link to={"/tamara"} className="link">
                                    <img src={tamaraImg} alt="tamara" />
                                </Link>
                                <Link to={"/baceta"} className="link">
                                    <img src={bacetaImg} alt="baceta" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 social-content mb-7">
                    <p className="text-xl font-semibold text-whitecolor">Follow us on:</p>
                    <div className="flex gap-4 links-social">
                        <Link to={"https://www.facebook.com/Edadcom.sa/"} className="link" target="_blank">
                            <img src={facebookIcon} alt="facebook-img" />
                        </Link>
                        <Link to={"https://x.com/Edadcom_ETC"} className="link" target="_blank">
                            <img src={twiteerIcon} alt="twiteer" />
                        </Link>
                        <Link to={"https://www.linkedin.com/company/edadcom-etc/"} className="link" target="_blank">
                            <img src={linkedinIcon} alt="linkedin" />
                        </Link>
                        <Link to={"https://www.youtube.com/edadcom"} className="link" target="_blank">
                            <img src={youtubeIcon} alt="youtube" />
                        </Link>
                        <Link to={"https://www.instagram.com/edadcom_/"} className="link" target="_blank">
                            <img src={instagramIcon} alt="instagram" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-4 pb-8 text-center copyright-content">
                <p className="text-base font-normal text-whitecolor">Copyright © 2025 Edadcom Trading. Commercial Registration No. 1010701348. (Edadcom Trading Company) VAT Number 310916821400003. All rights reserved </p>
            </div>
        </div>
    )
}
export default Footer;