"use client";

import { memo } from "react";
import cnBind from "classnames/bind";

import { CardNews } from "@/components/molecules/CardNews/CardNews";
import type { CardNewsType } from "@/components/molecules/CardNews/index.type";
import { useWindowSize } from "@/hooks/useWindowSize";

import styles from "./index.module.scss";

const cx = cnBind.bind(styles);
const ListCardNews = memo(({ listCardNews }: { listCardNews: CardNewsType[] }) => {
    const { width } = useWindowSize();

    return (
        <div className={cx("card__items")} style={{ width: width && width < 1050 ? width : 1050 }}>
            {listCardNews.map((news, i) => (
                <CardNews newsProps={news} key={i} cur={0 + 1} />
            ))}
        </div>
    );
});
export { ListCardNews };
