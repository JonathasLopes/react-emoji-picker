import React from 'react';
import './styles.css';
import { EmojiContent } from '..';

interface ISectionSearchProps {
    tone: number,
    str: string,
    emoji: (value: string) => void
}

export default function SectionSearch({ tone, str, emoji }: ISectionSearchProps) {
    return (
        <div className='sectionSearch-container'>
            <section className="back-search">
                <ul>
                    <EmojiContent selected={val => emoji(val)} tone={tone} search={str} />
                </ul>
            </section>
        </div>
    );
}
