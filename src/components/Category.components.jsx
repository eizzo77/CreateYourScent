import react from "react";
import "./Category.components.css";

export const Category = ({title}) => {
    return (
        <div className="category">
            {title}
        </div>
    );
}