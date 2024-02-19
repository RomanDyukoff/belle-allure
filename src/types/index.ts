import type { StaticImageData } from "next/image";

export interface IROUTES {
    title: string;
    href: string;
    context?: boolean;
    classPrefix?: string;
    label?: string;
}

export interface IDirectionsItemType {
    src: StaticImageData;
    caption: string;
    title: string;
    classNames?: string;
    href: string;
}

export interface IDirectionsTitleType {
    h1: string;
    h4_middle: string;
    h4_small: string;
}

export interface IDESCPAGE {
    p1: string;
    p2: string;
    p3?: string;
    p4?: string;
    listTitle?: string[];
}

export interface IROUTESFOOTER {
    title: string;
    href: string;
}
