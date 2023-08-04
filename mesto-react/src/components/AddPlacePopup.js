import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    function handleSubmit(event) {
        // Запрещаем браузеру переходить по адресу формы
        event.preventDefault();
    }

    return (
        <PopupWithForm
            name="cardedit"
            title="Новое место"
            isOpen={props.isOpen}
            onClose={props.onClose}
            handleAddPlaceClick={props.isAddPlacePopupOpen}
            onSubmit={handleSubmit}
            buttonText={'Создать'}
        >

            <input
                type="text"
                name="cardname"
                id="cardpopup__input-name"
                className="popup__input cardpopup__input cardpopup__input_data_name"
                placeholder="Название"
                required
            />
            <span
                id="name-input-error"
                className="cardpopup__input-name-error popup__error"
            >
                Необходимо заполнить данное поле
            </span>

            <input
                type="url"
                name="link"
                id="cardurl"
                className="popup__input cardpopup__input cardpopup__input_data_link"
                placeholder="Ссылка на картинку"
                required
            />
            <span
                id="description-input-error"
                className="cardurl-error popup__error"
            >
                Необходимо заполнить данное поле
            </span>

        </PopupWithForm>
    );
}

export default AddPlacePopup;

