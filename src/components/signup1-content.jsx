import SigninCol from "./signin-col";
import FormSignup1 from "./form-signup1";
import "../CSS/signup1.css";

function SignupContent1(){
    return(
        <div className="w-full h-full mb-10 signup-content1 mt-7">
            <div className="container flex justify-between w-full h-full">
                <FormSignup1/>
                <SigninCol/>
            </div>
        </div>
    )
}
export default SignupContent1;