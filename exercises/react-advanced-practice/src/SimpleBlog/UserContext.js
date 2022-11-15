import { createContext, useContext, useState } from "react";

// [STEP.1] 새 컨텍스트를 initiate하자. 이름 주의해! OOOContext
const UserContext = createContext(undefined);

// [STEP.4] 안에 'state를 품고있는' 샌드위치 컴포넌트를 만들자.
export const UserProvider = ({ children }) => {
   
    // [STEP.2] 뿌릴 state 만들자
    const [ user ] = useState({
        name: "John",
        email: "john@example.com",
        dob: "01/01/2000"
    });

    // [STEP.3] 샌드위치 컴포넌트를 만들자. value자리에 전달시킬 값을 넣는건데, 
    // static value가 아니라, 가변하는 state를 값으로 넣게 되는거임!!!!
    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
}

// Consumer가 사용할 수 있는 function을 만들자. 
export const useUser = () => useContext(UserContext)