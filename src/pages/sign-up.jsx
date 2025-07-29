import ContentNavbar from "../components/content-Navbar";
import NavbarMobile from "../components/Navbar-Mobile";
import SearchInput from "../components/searchInput";
import FastandFreeDelivery from "../components/delivery";
import SignUpContent from "../components/signup-content";
import Footer from "../components/footer";
function SignUp(){
    return(
        <>
            <ContentNavbar/>
            <NavbarMobile/>
            <SearchInput/>
            <FastandFreeDelivery/>
            <SignUpContent/>
            <Footer/>
        </>
    )
}
export default SignUp;