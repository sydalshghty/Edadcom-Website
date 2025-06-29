import ContentNavbar from "../components/content-Navbar";
import FastandFreeDelivery from "../components/delivery";
import LoginContent from "../components/Login-Content";
import NavbarMobile from "../components/Navbar-Mobile";
import Riyadh from "../components/Riyadh";

function LoginPage(){
    return(
        <>
            <ContentNavbar/>
            <NavbarMobile/>
            <Riyadh/>
            <FastandFreeDelivery/>
            <LoginContent/>
        </>
    )
}
export default LoginPage;