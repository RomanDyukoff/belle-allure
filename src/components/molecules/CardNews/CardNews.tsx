"use client";

import { memo } from "react";
import { Button } from "@mui/material";
import cnBind from "classnames/bind";

import type { CardNewsGeneralType } from "@/components/molecules/CardNews/index.type";

import styles from "./index.module.scss";

const cx = cnBind.bind(styles);
const CardNews = memo(({ newsProps, cur }: CardNewsGeneralType) => {
    return (
        <div className={cx("card-news")}>
            <div className={cx("card-news__container")}>
                <div className={cx("card-news__header")}>{cur}</div>
                <div className={cx("card-news__body")}>
                    <div className={cx("card-news__title")}>{newsProps.title}</div>
                    <div className={cx("card-news__caption")}>{newsProps.caption}</div>
                </div>
                <Button className={cx("card-news__footer")}>Перейти</Button>
            </div>
        </div>
    );
});
export { CardNews };
