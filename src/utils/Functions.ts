import { IEmojisProps } from "../interfaces/IEmojisProps";
import { EmojisTypes } from "../static/EmojisTypes";
import { Recents } from "./Recents";

export function CheckScroll(e: any, titleSection: string, title: (value: string) => void, active: (value: number) => void) {
    const element = e.target;
    const child = document.getElementById(titleSection) ?? new HTMLElement;
    const next = EmojisTypes.findIndex(x => x.title === titleSection) + 1;
    const prev = EmojisTypes.findIndex(x => x.title === titleSection) - 1;
    const scrollIsGreater = element.scrollTop > child.offsetTop-120;
    const childHeightPassed = element.scrollTop > (child.offsetTop + child.offsetHeight-120);

    if (scrollIsGreater && childHeightPassed && (next < EmojisTypes.length)){
        active(next + 1);
        title(EmojisTypes[next].title);

    } else if (prev > -1 && !scrollIsGreater) {

        active(prev + 1);
        title(EmojisTypes[prev].title);
    }
}

export function SeparedArray(array: any[], size: number) {
    let tempArray = [];
    let myChunk;

    for (let index = 0; index < array.length; index += size) {
        myChunk = array.slice(index, index + size);
        tempArray.push(myChunk);
    }

    return tempArray;
}

export function AutoScroll(title: string, id: number, active: (value: number) => void) {
    const scrolling = document.getElementById('scrolling') ?? new HTMLElement;
    const offsetTop = document.getElementById(title)?.offsetTop ?? 0;

    scrolling.scrollTo({
        top: offsetTop - 100,
        behavior: "auto"
    });
    
    active(id);
}

export function AddRecent(emoji: IEmojisProps) {
    let exist = Recents.findIndex(x => x.codePoint === emoji.codePoint);

    if (exist !== -1) {
        return;
    }

    const newRecent = {
        'title': emoji.title,
        'codePoint': emoji.codePoint,
        'hasTone': emoji.hasTone
    }

    if (Recents.length >= 16) {
        Recents.pop();
    }

    Recents.unshift(newRecent);
    localStorage.setItem('lastEmojis', JSON.stringify(Recents));
}
