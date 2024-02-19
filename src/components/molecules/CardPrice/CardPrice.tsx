import { memo } from "react";
import cnBind from "classnames/bind";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components/atoms/TItle/Title";

import styles from "./index.module.scss";

const cx = cnBind.bind(styles);
const CardPrice = memo(({ src, desc, title }: { src: StaticImageData; desc: string; title: string }) => {
    return (
        <div className={cx("cardPrice")}>
            <Link href="/">
                <div className={cx("cardPrice__img")}>
                    <Image src={src} alt="" />
                </div>
            </Link>
            <div className={cx("cardPrice__desc")}>
                <Title levet="h3">{title}</Title>
                <p>{desc}</p>
            </div>
        </div>
    );
});
export { CardPrice };
