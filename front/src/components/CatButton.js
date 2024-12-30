import React, { useState } from "react";
import catImage from "../assets/img/cat.webp";

interface CatButtonProps {
    onButtonClick?: () => void; // Optional handler for click
}

const CatButton: React.FC<CatButtonProps> = ({ onButtonClick }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        if (onButtonClick) {
            onButtonClick(); // Call the passed handler
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                background: "transparent",
                border: "none",
                padding: "5px",
                cursor: "pointer",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "200px",
                height: "160px",
                borderRadius: "50%",
                transform: clicked ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.2s",
            }}
        >
            <img
                src={catImage}
                alt="Cat Button"
                style={{
                    width: "70%",
                    height: "90%",
                    borderRadius: "0%",
                    objectFit: "contain",
                    transition: "transform 0.2s",
                }}
            />
            <span
                style={{
                    marginLeft: "0px",
                    fontSize: "20px",
                    color: "violet",
                    fontWeight: "bolder",
                    display: "inline-block",
                    transition: "opacity 0.2s",
                    opacity: clicked ? 0 : 1,
                }}
            >
                Click Me!
            </span>
        </button>
    );
};

export default CatButton;
