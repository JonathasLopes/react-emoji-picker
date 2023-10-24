import React, { useState } from 'react';
import { SearchContent, TypeContent } from "./Content";
import { EmojisTypes } from '../static/EmojisTypes';
import { NavBar, Search, SkinTone } from './Header';
import { CheckScroll } from '../utils/Functions';
import './styles.css';

interface IEmojiPickerProps {
    toggleClose: (value: boolean) => void;
    emojiSelected: (value: string) => void;
}

export default function EmojiPicker({ toggleClose, emojiSelected }: IEmojiPickerProps) {
    const [searchEmoji, setSearchEmoji] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [isActive, setIsActive] = useState(1);
    const [typeTone, setTypeTone] = useState<number>(NaN);
    const [titleSection, setTitleSection] = useState(EmojisTypes[0].title);

    return (
        <div className='emojiPicker-container'>
            <div className='emojiPicker-header'>
                <div className='emojiPicker-options'>
                    <Search
                        callback={val => setSearchEmoji(val)}
                        searching={val => setIsSearching(val)}
                        title={val => setTitleSection(val)}
                        active={val => setIsActive(val)}
                        firstTitle={EmojisTypes[0].title}
                    />

                    <div className='emojiPicker-skin-exit'>
                        <SkinTone callback={val => setTypeTone(val)} />

                        <div className="exit" onClick={() => toggleClose(false)}>
                            <button type="button" >

                            </button>
                        </div>
                    </div>
                </div>

                <NavBar
                    idActive={isActive}
                    searching={isSearching}
                    newTitle={val => setTitleSection(val)}
                />
            </div>
            <div className='emojiPicker-content'>
                <div className="container-Emojis">
                    <section
                        id="scrolling"
                        className="back-list-scrolling"
                        onScroll={(e) => !searchEmoji && CheckScroll(e, titleSection, setTitleSection, setIsActive)}
                    >
                        {searchEmoji === '' ?
                            <TypeContent emoji={val => emojiSelected(val)} skinTone={typeTone} />
                            :
                            <SearchContent emoji={val => emojiSelected(val)} tone={typeTone} str={searchEmoji} />
                        }
                    </section>
                </div>
            </div>
        </div>
    );
}