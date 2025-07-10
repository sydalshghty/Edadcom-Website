import ContentNavbar from "../components/content-Navbar";
import FastandFreeDelivery from "../components/delivery";
import LoginContent from "../components/Login-Content";
import NavbarMobile from "../components/Navbar-Mobile";
import SearchInput from "../components/searchInput";
import Footer from "../components/footer";

function LoginPage(){
    return(
        <>
            <ContentNavbar/>
            <NavbarMobile/>
            <SearchInput/>
            <FastandFreeDelivery/>
            <LoginContent/>
            <Footer/>
        </>
    )
}
export default LoginPage;