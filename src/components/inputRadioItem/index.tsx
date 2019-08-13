import * as React from 'react';
import { TProps } from "./inputRadioItem.types";

const InputRadioItem = ({ name, changeHandler, value }: TProps) => (
    <label htmlFor={value}>
            <span className='masked-input'>
                <input
                    id={value}
                    className='masked-input__unit'
                    name={name}
                    onChange={changeHandler}
                    type='radio'
                    value={value}
                />
                <span className='masked-input__mask' />
                <span>{value}</span>
            </span>
    </label>
);

export default InputRadioItem;
