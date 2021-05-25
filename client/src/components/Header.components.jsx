import {useState,useRef, useEffect} from "react";
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom";
import {Category} from "./Category.components";
import "./Header.components.css";

const LOGO_HEIGHT = 180.5;
const LOGO_WIDTH = 300;

export const Header = ({categories}) => {
    const [logoHeight,setLogoHeight] = useState(LOGO_HEIGHT);
    const [logoWidth,setLogoWidth] = useState(LOGO_WIDTH);
    const logoRef = useRef(null);
    const location = useLocation().pathname;

    useEffect(() => {
        logoRef.current.style.display = location.toLowerCase() === "/quiz" ? "none" : "block";
    },)

    window.onscroll = () => {
        console.log("HERE");
        const height = LOGO_HEIGHT - Math.min(LOGO_HEIGHT, document.documentElement.scrollTop);
        let width;
        if (height === 0) {
            width = 0;
            logoRef.current.style.display = "none";
        } else {
            width = LOGO_WIDTH - Math.min(LOGO_WIDTH,document.documentElement.scrollTop);
            logoRef.current.style.display = "block";
        }
        setLogoHeight(height);
        setLogoWidth(width);
    }

    return (
        <div className="header">
            <div></div>
            <div className="categories">
            <Link to="/quiz"><Category  title="Create Your Scent"/></Link>
            <Link to="/store"><Category  title="Store"/></Link>
            <Link to="/"><div ref={logoRef} className={`logo`} style={{height:logoHeight, width:logoWidth}}>
            </div></Link>
            <Link to="/affiliations"><Category title="Affiliations"/></Link>
            <Link to="/aboutus"><Category title="About Us"/></Link>
            </div>
            <Link to="/cart"><div className="right-bar"><i class="fas fa-shopping-cart"></i></div></Link>
        </div>
    );
}