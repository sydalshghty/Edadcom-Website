import rocketIcon from "../assets/rocket-02.svg";
import refreshIcon from "../assets/refresh-ccw-01.svg";
import phoneIcon from "../assets/phone.svg";
import creditcaerdIcon from "../assets/credit-card-02.svg";
import "../CSS/delivery.css";

function FastandFreeDelivery(){
    return(
        <div className="w-full h-20 pt-4 pb-4 delivery-departament bg-bgIcon">
            <div className="container flex justify-between w-full gap-8">
                <div className="flex items-start gap-2 fast-col">
                    <img src={rocketIcon} alt="fast-icon" />
                    <div>
                        <p className="text-base font-medium text-deliveryColor1">Fast and free delivery</p>
                        <p className="text-base font-normal text-textcolor">Free delivery over 100 SAR</p>
                    </div>
                </div>
                <div className="flex items-start gap-2 money-col">
                    <img src={refreshIcon} alt="refresh-icon" />
                    <div>
                        <p className="text-base font-medium text-deliveryColor1">Money back guarantee</p>
                        <p className="text-base font-normal text-textcolor">We return money within 30 days</p>
                    </div>
                </div>
                <div className="flex items-start gap-2 customer-col">
                    <img src={phoneIcon} alt="customer-icon" />
                    <div>
                        <p className="text-base font-medium text-deliveryColor1">24/7 customer support</p>
                        <p className="text-base font-normal text-textcolor">Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className="flex items-start gap-2 secure-col">
                    <img src={creditcaerdIcon} alt="secure-icon" />
                    <div>
                        <p className="text-base font-medium text-deliveryColor1">Secure online payment</p>
                        <p className="text-base font-normal text-textcolor">We process SSL сertificate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FastandFreeDelivery;