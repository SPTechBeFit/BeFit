import React, { useState } from 'react';
import likeButton from '../../../assets/images/Icons/favoritoIcon.png'
import likeButtonSelecionado from '../../../assets/images/Icons/favoritoIconSelecionado.png'

const LikeButton = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        if (isClicked) {
            setIsClicked(true);
        } else {
            setIsClicked(false);}
    };
    return (
        <>
        <img src="{ likeButton }" alt="" />
            <img onClick={handleClick()}
                className={isClicked ? { likeButton } : { likeButtonSelecionado }} alt='fav button'></img>
        </>

    );
};

export default LikeButton;