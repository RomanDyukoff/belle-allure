import cnBind from "classnames/bind";
import Image from "next/image";

import type { ImageItemType } from "@/components/atoms/ImageItem/ImageItem.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const ImageItem = ({ src, name, classPrefix, w = 0, h = 0, clFilter }: ImageItemType) => {
    return (
        <div
            className={cx("image__item", classPrefix)}
            style={{ paddingBottom: `${h === 0 && w === 0 ? 133.333 : (h / w) * 100}%`, overflow: "hidden" }}
        >
            <div className={cx("image__b", clFilter)} style={{ backgroundImage: `url(${src.src})`, zIndex: "1" }} />
            <Image className={cx("image__img")} alt={name} src={src} />
        </div>
    );
};
