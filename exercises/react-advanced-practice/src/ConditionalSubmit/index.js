import React, { useState } from "react";

// 이름을 다 입력해야 Submit 버튼이 active하게 바뀌는 폼

function ConditionalSubmit() {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setValue("")
        alert('Hi, '+ e.target.firstName.value +'!')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldSet>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={value} 
                        placeholder="First Name" 
                        onChange={e => setValue(e.target.value) }
                    />
                    <button type="submit" disabled={!value}>Submit</button>
                </fieldSet>
            </form>
        </div>
    )
}

export default ConditionalSubmit;