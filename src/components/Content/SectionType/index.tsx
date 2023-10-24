import React from 'react';
import { EmojisTypes } from '../../../static/EmojisTypes';
import { EmojiContent } from '..';
import './styles.css';

interface ISectionTypeProps {
    skinTone: number,
    emoji: (value: string) => void
}

export default function SectionType({skinTone, emoji}: ISectionTypeProps) {
    return (
        <div className='sectionType-container'>
            {EmojisTypes.map(type => {
                return (
                    <section key={type.id} className="back-list" id={type.title}>
                        <p>{type.title}</p>
                        <ul>
                            <EmojiContent selected={val => emoji(val)} types={type} tone={skinTone}/>
                        </ul>
                    </section>
                )
            })}
        </div>
    );
}
