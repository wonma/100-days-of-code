import React from 'react';
import './styles.css';

// 저는 다만 type과 children을 받아서 구현하게 되어 있습니다. 
// <Button ..>에 입력될 props가 여러개일 것을 대비해 spread operator로 'props애들 전체'라고 해주면서, 직접 썼던 type, children과 merging이 일어납니다. 
// 즉, ...props 자체에 이미 type, children도 포함되어있습니다만, explicitly 써야 하는 상황이라 별도로 꺼내논겁니다. 
const Button = ({type, children, ...props}) => {
    const theme = type === 'primary' ? 'primary' : 'secondary';
    return (
        <button className={'Button_' + theme} {...props}>{children}</button> // 이 ...props에는 Parent에서 내려온 onClick도 당연히 있습니다.
    )
}

const SignUpButton = ({children, ...props}) => {
    return (
        <Button 
            onClick={() => alert('Sign In!')} // 기본 요청 메세지입니다.
            {...props} // 이 위치가 중요합니다. ...props가 여기 있어야 override됩니다. 
        >{children}</Button>
    )
}

const LoginOrSignUp = () => {
    return (
        <div>
            <h1>Hello There!</h1>
            <div>
                <Button type='primary' onClick={()=>alert("Log In!")}>Log In</Button> {/* Directly to Button Component */}
                <SignUpButton type='secondary' onClick={()=>alert("Sign Up Right Now Get 20% off!")}>Sign Up</SignUpButton> 
                    {/*강조하는 메세지로 override합니다.
                        SignUpButton은 onClick등 properties전체를 Button에 Forwarding합니다.
                    */}
            </div>
        </div>
    )
}

export default LoginOrSignUp;