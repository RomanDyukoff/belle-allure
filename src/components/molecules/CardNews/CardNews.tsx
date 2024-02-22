"use client";

import { memo, useState } from "react";
import cnBind from "classnames/bind";

import { Button } from "@/components/atoms/Button/Button";
import type { CardNewsGeneralType } from "@/components/molecules/CardNews/index.type";

import styles from "./index.module.scss";

const cx = cnBind.bind(styles);
const CardNews = memo(({ newsProps, cur }: CardNewsGeneralType) => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div
            className={cx("card-news", isHover && "card-bg")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={cx("card-news__container")}>
                <div className={cx("card-news__header")}>{cur}</div>
                <div className={cx("card-news__body")}>
                    <div className={cx("card-news__title")}>{newsProps.title}</div>
                    <div className={cx("card-news__caption")}>{newsProps.caption}</div>
                </div>
                <Button handleAction={() => {}} classNames={cx("card-news__footer")}>
                    Перейти
                </Button>
            </div>
        </div>
    );
});
export { CardNews };
