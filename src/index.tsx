import React, { useState } from 'react';
import EmojiPicker from './components';
import './assets/ColorPalette.css';
import './assets/GlobalStyles.css';
import './styles.css';

interface IButtonEmojiProps {
    label: string
}

export default function ButtonEmoji({ label }: IButtonEmojiProps) {
    const [state, setState] = useState<boolean>(false);
    const [emoji, setEmoji] = useState<string>();

    return (
        <div className='buttonEmoji-container'>
            <button onClick={() => setState(!state)}>{label}</button>
            {emoji && <span>{emoji}</span>}
            {state &&
                <EmojiPicker
                    emojiSelected={(value) => setEmoji(value)}
                    toggleClose={(value) => setState(value)}
                />
            }
        </div>
    );
}