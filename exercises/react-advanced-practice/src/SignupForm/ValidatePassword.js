import React, { useState } from 'react';

const useValidatePassword = (password) => {
    const [ hasOneCapital, setHasOneCapital ] = useState(false)
    const [ hasOneSpecialCharacter, setHasOneSpecialCharacter ] = useState(false)
    const [ has8characters, setHas8characters] = useState(false)

    if (!password) return;

    password.length >=8 ? setHas8characters(true) : setHas8characters(false)

    //  see if at least one upper case letter exists
    const pattern = /(?=.*[A-Z])/
    pattern.test(password)

    //  see if at least one special character exists
    const pattern2 = /(?=.*[-+_!@#$%^&*.,?])/
    pattern2.test(password)
}

export default useValidatePassword;
