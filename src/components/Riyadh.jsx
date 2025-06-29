import makerImg from "../assets/marker-pin-01.svg";
import frame from "../assets/Frame 1261154419.svg";

function Riyadh(){
    return(
        <div className="w-full h-8 pt-2 pb-2 pl-4 pr-4 Riyadh-content">
            <div className="container w-full h-full pt-2 pb-2 pl-2 pr-2">
                <div className="flex items-center justify-between w-full h-full content-riyadh">
                    <div className="flex gap-2 riyadh-col">
                        <img className="cursor-pointer" src={makerImg} alt="Riyadh-icon" />
                        <p className="text-base font-normal text-riyadhColor">Riyadh</p>
                    </div>
                    <div className="col-P">
                        <img src={frame} alt="frame-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Riyadh;