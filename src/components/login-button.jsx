import "../CSS/login-button.css";
function LoginButton(props){
    return(
        <div className="col-login">
            <button className="pt-3 pb-3 pl-6 pr-6 text-base font-semibold rounded-lg cursor-pointer bg-orangeColor text-whitecolor">{props.text}</button>
        </div>
    )
}
export default LoginButton;