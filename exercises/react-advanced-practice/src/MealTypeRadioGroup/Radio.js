import React from 'react';

export const RadioOption = ({value, children, selected, setSelected}) => {
    return (
        <div className='RadioOption'>
            <input 
                type='radio' 
                value={value} 
                id={value} 
                checked={selected}
                onChange={() => setSelected(value)}
            />
            <label htmlFor={value}> {children}</label><br />
        </div>
    );
}

export const RadioField = ({children, selected, setSelected}) => {
    const RadioOptions = React.Children.map(children, (child, index)=>{
        return React.cloneElement(child, {
             selected: selected === child.props.value ? true : false,
             setSelected: setSelected
         })
     })
    return <div className='RadioField'>{RadioOptions}</div>
}
