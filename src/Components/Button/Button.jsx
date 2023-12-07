import React from "react";
import { Link } from "react-router-dom"
import "./Button.css";

export default function Button({ buttonText, clickHandler, route }) {
  return (
    <Link  className="removeLinkStyles" to={route}>
      <div data-testid="button" onClick={() => clickHandler(buttonText)} className="center-rectangle">
        <span data-testid={"buttonText"}className="blinkingText">
          <b >{buttonText}</b>
        </span>
      </div>
    </Link>
  );
}

