import { IEmojisProps } from "../interfaces/IEmojisProps";

export const Recents: IEmojisProps[] = JSON.parse(localStorage.getItem("lastEmojis") ?? "[]") || [];