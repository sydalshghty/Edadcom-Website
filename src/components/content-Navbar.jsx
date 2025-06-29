import Header from "./header";
import Navbar from "./navbar";
import NavLinks from "./NavLinks";
function ContentNavbar(){
    return(
        <div className="fixed top-0 left-0 z-30 w-full content-Navbar">
            <Header/>
            <Navbar/>
            <NavLinks/>
        </div>
    )
}
export default ContentNavbar;