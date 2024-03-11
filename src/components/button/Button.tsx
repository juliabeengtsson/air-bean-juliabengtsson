import React from "react";
import { useNavigate } from "react-router-dom";
import './button.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    title: string;
    filled: boolean;
    to?: string;
}

const Button: React.FC<ButtonProps> = ({ title, filled, to }) => {
    const navigate = useNavigate();

    const navigateToDestination = () => {
        to != undefined && navigate(to);
      };

    return(
        <button
            className={`button ${filled ? 'filled' : 'outlined'}`}
            onClick={navigateToDestination}>
            {title}
        </button>
    )
}

export default Button;