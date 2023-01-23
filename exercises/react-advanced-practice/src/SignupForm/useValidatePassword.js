import React, { useState } from 'react';

const useValidatePassword = () => {
    const [ hasOneCapital, setHasOneCapital ] = useState(false)
    const [ hasOneSpecialCharacter, setHasOneSpecialCharacter ] = useState(false)
    const [ has8characters, setHas8characters] = useState(false)

    const checkCapital = (password) => {
        const pattern = /(?=.*[A-Z])/
        pattern.test(password) ? setHasOneCapital(true) : setHasOneCapital(false);
    }

    const checkSpecialCharacter = (password) => {
        const pattern2 = /(?=.*[-+_!@#$%^&*.,?])/
        pattern2.test(password) ? setHasOneSpecialCharacter(true) : setHasOneSpecialCharacter(false);
    }

    const check8characters = (password) => {
        password.length >= 8 ? setHas8characters(true) : setHas8characters(false);
    }

    return { checkCapital, checkSpecialCharacter, check8characters, hasOneCapital, hasOneSpecialCharacter, has8characters }
}

export default useValidatePassword;
