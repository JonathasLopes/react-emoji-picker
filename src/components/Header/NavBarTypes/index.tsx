import React, { useEffect, useState } from 'react';
import { EmojisTypes } from '../../../static/EmojisTypes';
import { AutoScroll } from '../../../utils/Functions';
import './styles.css';

interface INavBarTypesProps {
    idActive: number,
    newTitle: (value: string) => void,
    searching: boolean
}

export default function NavBarTypes({idActive, newTitle, searching}: INavBarTypesProps) {
    const [isActive, setIsActive] = useState(1);

    useEffect(() => {
        setIsActive(idActive);
    }, [idActive]);

    return (
        <div className='navBarTypes-container'>
            {EmojisTypes.map(type => {
                return (
                    <div key={type.id} className="types-emoji">
                        <button
                            disabled={searching ? true : false}
                            type="button"
                            className={isActive === type.id ? 'active' : undefined}
                            onClick={() => {AutoScroll(type.title, type.id, setIsActive); newTitle(type.title)}}
                        >
                            <span>{String.fromCodePoint(type.icon)}</span>
                        </button>
                    </div>
                )
            })}
        </div>
    );
}