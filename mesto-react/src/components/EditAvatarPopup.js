import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const Input = React.useRef();

    function handleSubmit(event) {
        event.preventDefault();

        props.onUpdateAvatar({
            avatar: Input.current.value,
        });
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText={'Сохранить'}
        >

            <input
                ref={Input}
                type="url"
                name="avatar"
                id="avatarurl"
                className="popup__input"
                placeholder="Введите ссылку на аватар"
                required
            />
            <span
                id="input-avatarurl-error"
                className="avatarurl-error popup__error"
            >
                Необходимо заполнить данное поле
            </span>

        </PopupWithForm>
    )
}

export default EditAvatarPopup;



