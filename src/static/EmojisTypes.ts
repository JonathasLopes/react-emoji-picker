import { Recents } from '../utils/Recents';
import { People } from './Emojis/People';
import { Nature } from './Emojis/Nature';
import { FoodDrink } from './Emojis/FoodDrink';
import { TravelPlaces } from './Emojis/TravelPlaces';
import { Activity } from './Emojis/Activity';
import { Objects } from './Emojis/Objects';
import { SymbolsFlags } from './Emojis/SymbolsFlags';

export const EmojisTypes = [
    {
        id: 1,
        title: 'Recentes',
        icon: 0x1F551,
        Emojis: Recents
    },
    {
        id: 2,
        title: 'Expressões e Pessoas',
        icon: 0x1F600,
        Emojis: People
    }, 
    {
        id: 3,
        title: 'Natureza',
        icon: 0x1F30D,
        Emojis: Nature
    }, 
    {
        id: 4,
        title: 'Alimentos e Bebidas',
        icon: 0x1F354,
        Emojis: FoodDrink
    }, 
    {
        id: 5,
        title: 'Atividades',
        icon: 0x1F3C0,
        Emojis: Activity
    },
    {
        id: 6,
        title: 'Turismo e Lugares',
        icon: 0x1F30B,
        Emojis: TravelPlaces
    }, 
    {
        id: 7,
        title: 'Objetos',
        icon: 0x1F4A1,
        Emojis: Objects
    },
    {
        id: 8,
        title: 'Símbolos e Bandeiras',
        icon: 0x1F51B,
        Emojis: SymbolsFlags
    }
];