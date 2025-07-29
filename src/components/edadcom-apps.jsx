import GooglePlayImg from "../assets/GetItOnGooglePlay_Badge_Web_color_English 2.svg";
import AppStoreImg from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 2.svg";
import "../CSS/edadcom-apps.css";
function EdadcomApps(){
    return(
        <div className="edadcom-apps ">
            <p className="mb-4 text-xl font-semibold text-blackcolor">Get the Edadcom apps</p>
            <p className="text-xl font-normal ">Unlock special deals and shop top-quality tools anytime, anywhere!</p>
            <div className="flex gap-4 google-appstore-col">
                <img className="cursor-pointer" src={GooglePlayImg} alt="GooglePlay" />
                <img className="cursor-pointer" src={AppStoreImg} alt="AppStore" />
            </div>
        </div>
    )
}
export default EdadcomApps;