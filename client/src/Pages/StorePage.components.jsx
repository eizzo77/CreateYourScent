import react from "react";
import {CandleCard} from "../components/CandleCard.components";
import "./StorePage.components.css"

export const StorePage = () => {
    return(
        <div className="store-page">
            <div className="store-container">
                <CandleCard />
                <div>HEY</div>
                <div>HEY</div>
            </div>
        </div>
    );
}