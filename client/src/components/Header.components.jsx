import {useState,useRef, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {Category} from "./Category.components";
import "./Header.components.css";

const LOGO_HEIGHT = 180.5;
const LOGO_WIDTH = 300;

export const Header = () => {
    const [logoHeight,setLogoHeight] = useState(LOGO_HEIGHT);
    const [logoWidth,setLogoWidth] = useState(LOGO_WIDTH);
    const logoRef = useRef(null);
    const location = useLocation().pathname;

    useEffect(() => {
        logoRef.current.style.display = location.toLowerCase() === "/quiz" && "none";
    },[])

    window.onscroll = () => {
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
            <Category  title="Category 1"/>
            <Category  title="Cateogry 2"/>
            <div ref={logoRef} className={`logo`} style={{height:logoHeight, width:logoWidth}}>
            </div>
            <Category title="Cateogry 3"/>
            <Category title="Cateogry 4"/>
        </div>
    );
}