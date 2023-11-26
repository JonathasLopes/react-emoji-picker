import React, { useState } from 'react';
import { SkinTone } from '../../../static/SkinTones';
import './styles.css';

interface IChooseSkinToneProps {
    callback: (value: number) => void;
}

export default function ChooseSkinTone({callback}: IChooseSkinToneProps) {
    const [skinTone, setSkinTone] = useState([0x1F44C]);
    const [showSkinTone, setShowSkinTone] = useState(false);

    return (
        <div className='chooseSkinTone-container'>
            <button className="btn-skin" type="button" title="cor da pele" onClick={() => setShowSkinTone(!showSkinTone)}>
                <span>{skinTone[1] ? String.fromCodePoint(skinTone[0], skinTone[1]) :  String.fromCodePoint(skinTone[0])}</span>
            </button>
            {showSkinTone &&
                <ul className="choose-tone">
                    {SkinTone.map((skin, index) => {
                        return (
                            <li key={index}>
                                <button onClick={() => { 
                                    !Number.isNaN(skin) ? setSkinTone([0x1F44C, skin]) : setSkinTone([0x1F44C]); 
                                    setShowSkinTone(false); 
                                    callback(skin) 
                                }}>
                                    <span>{!Number.isNaN(skin) ? String.fromCodePoint(0x1F44C, skin) : String.fromCodePoint(0x1F44C)}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );
}