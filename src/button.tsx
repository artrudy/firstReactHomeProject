import React from "react";

type ButtonProps = {
    label: string;
    onClick: () => string;
}
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <button onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;