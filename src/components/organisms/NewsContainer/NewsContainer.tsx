"use client";

import { memo, useState } from "react";
import cnBind from "classnames/bind";

import { AdaptiveContainer } from "@/components/atoms/AdaptiveContainer/AdaptivContainer";
import type { CardNewsType } from "@/components/molecules/CardNews/index.type";
import { ListCardNews } from "@/components/organisms/ListCardNews/ListCardNews";

import styles from "./index.module.scss";

const cx = cnBind.bind(styles);
const NewsContainer = memo(() => {
    const arr: CardNewsType[] = [
        { title: "Новость 1", caption: "Тут краткое описание новости", slog: "Ну и тут какой-то маленький текс" },
        { title: "Новость 2", caption: "Тут краткое описание новости", slog: "Ну и тут какой-то маленький текс" },
        { title: "Новость 3", caption: "Тут краткое описание новости", slog: "Ну и тут какой-то маленький текс" },
        { title: "Новость 4", caption: "Тут краткое описание новости", slog: "Ну и тут какой-то маленький текс" },
        { title: "Новость 5", caption: "Тут краткое описание новости", slog: "Ну и тут какой-то маленький текс" },
    ];
    const [cur, setCur] = useState<number>(0);
    const handleIsNext = () => {
        if (cur === arr.length - 4) {
            setCur(arr.length - 4);
        } else {
            setCur((prevState) => prevState + 1);
        }
    };
    const handleIsPrev = () => {
        if (cur === 0) {
            setCur(0);
        } else {
            setCur((prevState) => prevState - 1);
        }
    };

    return (
        <AdaptiveContainer classNames={cx("news__list")}>
            <div onClick={() => handleIsPrev()}>-</div>
            <ListCardNews listCardNews={cur === 0 ? [...arr].slice(0, 4) : arr.filter((_, i) => i >= cur)} />
            <div onClick={() => handleIsNext()}>+</div>
        </AdaptiveContainer>
    );
});
export { NewsContainer };
