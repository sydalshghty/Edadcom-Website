import googleIcon from "../assets/flat-color-icons_google.svg";
import facebookIcon from "../assets/logos_facebook.svg";
import "../CSS/google-facebookbtn.css";
function GoogleandFacebookBtn(){
    return(
        <div className="btn-Google-Facebook">
            <div className="flex items-center justify-center gap-2 pt-2 pb-2 pl-4 pr-4 rounded-lg cursor-pointer col-google">
                <img className="cursor-pointer" src={googleIcon} alt="google-icon" />
                <p className="text-base font-normal text-colorblack">Google</p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2 pb-2 pl-4 pr-4 rounded-lg cursor-pointer col-facebook">
                <img className="cursor-pointer" src={facebookIcon} alt="facebook-icon" />
                <p className="text-base font-normal text-colorblack">Facebook</p>
            </div>
        </div>
    )
}
export default GoogleandFacebookBtn;