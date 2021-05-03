import {useState,useRef} from "react";
import {Category} from "./Category.components";
import "./Header.components.css";


export const Header = () => {
    const [logoHeight,setLogoHeight] = useState(180.5);
    const [logoWidth,setLogoWidth] = useState(300);
    const logoRef = useRef(null);

    window.onscroll = () => {
        const height = 180.5 - Math.min(180.5, document.documentElement.scrollTop);
        let width;
        if (height === 0) {
            width = 0;
            logoRef.current.style.display = "none";
        } else {
            width = 300 - Math.min(300,document.documentElement.scrollTop);
            logoRef.current.style.display = "block";
        }
        setLogoHeight(height);
        setLogoWidth(width);
    }

    return (
        <div className="header">
            <Category  title="Category 1"/>
            <Category  title="Cateogry 2"/>
            <Category  title="Cateogry 3"/>
            <div ref={logoRef} className={`logo`} style={{height:logoHeight, width:logoWidth}}>
            </div>
            <Category title="Cateogry 4"/>
            <Category title="Cateogry 5"/>
            <Category title="Cateogry 6"/>
        </div>
    );
}