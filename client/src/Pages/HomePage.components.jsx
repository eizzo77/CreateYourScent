import react from "react";
import {PhotoAccordion} from "../components/PhotoAccordion.components";
import "./HomePage.components.css";

export const HomePage = () => {
    return (
        <div className="homepage">
            <div className="hero"></div>
            <div className="text-container">
                <h3>Create Your Custom Scent Or Order a Pre-made Candle from Our Store</h3>
                Our candles are made of natural, environment-friendly materials. 100% pure Wax, multiply colors and scents, top high quality.<br/>
                Go to our Create Your Scent Quiz and create your customized candle. just for you.<br/>
                Check out our store and order some of our work done with lots of dedication <br/>
            </div>
            <div className="divider">
                <hr/>
                    <div className="in-light-icon"><img src="https://image.flaticon.com/icons/png/128/12/12220.png" alt="icon"/></div>
            </div>
            <PhotoAccordion />
        </div>
    );
}