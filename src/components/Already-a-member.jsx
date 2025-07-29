import "../CSS/Already-a-member.css";
function AlreadyAMember(props){
    return(
        <>
            <div className="flex items-center gap-4 heading-signin">
                <p className="font-semibold">Already a member?</p>
                <p className="font-semibold">{props.text}</p>
            </div>
            <p className="text-base font-normal P-access">Get access to your orders, save your favorite tools, and get personalized deals made just for you!</p>
        </>
    )
}
export default AlreadyAMember;