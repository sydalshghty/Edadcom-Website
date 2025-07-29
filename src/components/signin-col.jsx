import CheckoutContent from "./checkout-content";
import AlreadyAMember from "./Already-a-member";
import LoginButton from "./login-button";
import EdadcomApps from "./edadcom-apps";
import "../CSS/signin-col.css";
import { Link } from "react-router-dom";
function SigninCol(){
    return(
        <div className="signin-col">
            <CheckoutContent/>
            <AlreadyAMember text="Sign in!"/>
            <Link to={"/login"}>
                <LoginButton text="Log in"/>
            </Link>
            <EdadcomApps/>
        </div>
    )
}
export default SigninCol;