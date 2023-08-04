import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

    }

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText={'Сохранить'}
        >

            <input
                type="text"
                name="profilename"
                id="popup__input-name"
                className="popup__input popup__input_data_name"
                placeholder="Имя"
                required
            />
            <span
                id="name-input-error"
                className="popup__input-name-error popup__error"
            >
                Необходимо заполнить данное поле
            </span>

            <input
                type="text"
                name="profession"
                id="popup__input-profession"
                className="popup__input popup__input_data_profession"
                placeholder="О себе"
                required
            />
            <span
                id="profession-input-error"
                className="popup__input-profession-error popup__error"
            >
                Необходимо заполнить данное поле
            </span>

        </PopupWithForm>
    )
}

export default EditProfilePopup;


