import React from 'react';
import Input from '../../Input';
import './styles.css';

interface ISearchEmojiProps {
    callback: (value: string) => void,
    searching: (value: boolean) => void,
    title: (value: string) => void,
    firstTitle: string,
    active: (value: number) => void
}

export default function SearchEmoji({ callback, searching, title, firstTitle, active }: ISearchEmojiProps) {
    return (
        <div className='searchEmoji-container'>
            <Input
                placeholder="Pesquisar"
                callbackValue={val => {
                    callback(val);
                    val.length >= 1 ? searching(true) : searching(false);
                    val.length >= 1 ? title("Pesquisando") : title(firstTitle);
                    val.length >= 1 ? active(0) : active(1);
                }}
            />
            <i className="icon-search">
                
            </i>
        </div>
    );
}