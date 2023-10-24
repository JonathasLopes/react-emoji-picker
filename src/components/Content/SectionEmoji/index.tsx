import React from 'react';
import { AddRecent, SeparedArray } from '../../../utils/Functions';
import { AllEmojis } from '../../../utils/AllEmojis';
import './styles.css';

interface ISectionEmojiProps {
    types?: any,
    tone: number,
    search?: string,
    selected: (value: string) => void
}

export default function SectionEmoji({ types, tone, search, selected }: ISectionEmojiProps) {
    return (
        <div className='sectionEmoji-container'>
            {SeparedArray(!search ? types.Emojis : AllEmojis.filter(emoji => emoji.title.includes(search.toLowerCase())), 8).map((groupEmoji, index) => {
                return (
                    <li key={index} className="list-emojis">
                        {groupEmoji.map(emoji => {
                            return (
                                <button 
                                    key={emoji.title}
                                    type="button" 
                                    title={emoji.title} 
                                    onClick={(val: any) => { 
                                        selected(val.target.innerText); 
                                        AddRecent(emoji) 
                                    }}
                                >
                                    {emoji.hasTone && !Number.isNaN(tone) ?
                                        <span>{String.fromCodePoint(emoji.codePoint, tone)}</span>
                                        :
                                        <span>{String.fromCodePoint(emoji.codePoint)}</span>
                                    }
                                </button>
                            );
                        })}
                    </li>
                )
            })}
        </div>
    );
}