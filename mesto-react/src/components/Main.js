import React from 'react';
import api from '../utils/Api';
import { useState, useEffect } from 'react';
import Card from "./Card"

function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [userProfession, setUserProfession] = React.useState('');
    const [cards, setCards] = React.useState([]);


    useEffect(() => {
        api
            .getInitialCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        api
            .getUserData()
            .then((res) => {
                setUserAvatar(res.avatar);
                setUserName(res.name);
                setUserProfession(res.about);
            })
            .catch((err) => console.log(err));
    }, []);



    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-area">
                    <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
                    <div onClick={props.onEditAvatarClick} className="profile__avatar-edit" />
                </div>
                <div className="profile__info">
                    <div className="profile__wrapper">
                        <h1 className="profile__name">{userName}</h1>
                        <button onClick={props.onEditProfileClick} className="profile__edit-button" type="button">
                        </button>
                    </div>
                    <p className="profile__profession">{userProfession}</p>
                </div>
                <button onClick={props.onAddPlaceClick} className="profile__add-button" type="button">
                </button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card
                        onCardClick={props.onCardClick}
                        card={card}
                        name={card.name}
                        link={card.link}
                        likes={card.likes.length}
                        key={card._id}
                    />
                ))}
            </section>

        </main>
    );
}

export default Main; 