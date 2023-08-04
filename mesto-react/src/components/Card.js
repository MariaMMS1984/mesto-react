import React from "react";
import cap from '../images/Vector__cut.svg'
import basKet from '../images/Vector__delete.svg'

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="card">
            <img className="card__image" src={props.link} alt={props.name} onClick={handleClick} />
            <div type="button" className="card__delete-button">
                <img src={cap} alt="крышка" />
                <img src={basKet} alt="корзина" className="card__trashcan" />
            </div>
            <div className="card__footer">
                <h2 className="card__title">{props.name}</h2>
                <button type="button" className="card__like-button">
                    <p className="card__like-counter">{props.likes}</p>
                </button>
            </div>
        </div>
    );
}

export default Card;
