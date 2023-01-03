import React, { useState } from 'react';
import { RadioField, RadioOption } from './Radio';

const MealTypeRadioGroup = () => {
    const [ selected, setSelected ] = useState('')
    return (
            <form>
                <h1>Choose Meal Type</h1>

                {/* Below is a reusable code. e.g) Meal type, Song type, Course Type, ...etc. */}
                <RadioField selected={selected} setSelected={setSelected} >
                    <RadioOption value='meat-and-veggie'>Meat & Veggie</RadioOption>
                    <RadioOption value='family-style'>Family Style</RadioOption>
                    <RadioOption value='vegan'>Vegan</RadioOption>
                    <RadioOption value='mediterranean'>Mediterranean</RadioOption>
                </RadioField>
            </form>
    )
}

export default MealTypeRadioGroup;