import React from 'react';
import './styles.css';

interface IInputProps {
    placeholder: string,
    callbackValue: (value: string) => void;
}

export default function Input({ placeholder, callbackValue }: IInputProps) {
    return (
        <div>
            <input
                placeholder={placeholder}
                className='input-styled'
                onChange={e => callbackValue(e.target.value)}
            />
        </div>
    )
}