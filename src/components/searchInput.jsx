import "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchIcon from "../assets/search-md (1).svg";
import "../CSS/searchInput.css";

function SearchInput(){
    return(
       <div className="mt-4 mb-6 searchInput-content">
            <div className="container w-full h-full">
                <div className="flex items-center w-full h-8 gap-2 p-2 col-search"> 
                    <img src={searchIcon} alt="search-icon" className="cursor-pointer icon"/>
                    <input type="search"  placeholder="Search" className="w-full h-full border-none outline-none"/>
                </div>
            </div>
       </div>
    )
}
export default SearchInput;