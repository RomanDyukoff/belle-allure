import type { StaticImageData } from "next/image";

export interface ImageItemType {
    src: StaticImageData;
    name: string;
    classPrefix?: string;
    clFilter?: string;
    w?: number;
    h?: number;
    isBool?: boolean;
}
