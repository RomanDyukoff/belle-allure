"use client";

import type { SyntheticEvent } from "react";
import { memo, useState } from "react";
import cnBind from "classnames/bind";

import { AdaptiveContainer } from "@/components/atoms/AdaptiveContainer/AdaptivContainer";
import { CustomTabs } from "@/components/atoms/CustomTabs/CustomTabs";
import { Title } from "@/components/atoms/TItle/Title";

import styles from "./index.module.scss";

const cx = cnBind.bind(styles);
const AboutUsContainer = memo(() => {
    const listTitle = ["История", "Философия", "Достижения"];
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={cx("aboutUs")}>
            <AdaptiveContainer classNames={cx("aboutUs__container")}>
                <Title levet="h2" classNames={cx("aboutUs__title")}>
                    Знакомства с нами
                </Title>
                <div className={cx("aboutUs__tabs")}>
                    <CustomTabs value={value} handleChange={handleChange} titles={listTitle} />
                    <div
                        role="tabpanel"
                        hidden={value !== 0}
                        id={`simple-tabpanel-${0}`}
                        aria-labelledby={`simple-tab-${0}`}
                        className={cx("aboutUs__content")}
                    >
                        {value === 0 && (
                            <div className={cx("aboutUs__history")}>
                                <Title classNames={cx("aboutUs__history-caption")} levet="h3">
                                    История Belle Allure
                                </Title>
                                <div className={cx("aboutUs__history-desc")}>
                                    <p>
                                        История Belle Allure началась 16 сентября 1998 года, когда Александр Глушков
                                        открыл первый салон Belle Allure в Москве на Новинском бульваре. Первыми
                                        клиентами были женщины, любящие искусство, а особенно импрессионистов.
                                    </p>
                                </div>
                                <div className={cx("aboutUs__history-more")}>
                                    <p>
                                        Я назвал салон именем Belle Allure, потому что безумно люблю импрессионистов,
                                        цвет и творчество. Belle Allure для меня — самый близкий по духу и стилю
                                        художник.
                                    </p>
                                    <p>
                                        Я хочу сделать профессию парикмахера самой престижной и желанной в нашей стране.
                                    </p>
                                    <p>
                                        Мне нравится, когда женщина в сложный будний день, полный встреч и желания всюду
                                        успеть, не забывает надеть каблуки и сделать укладку.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </AdaptiveContainer>
        </div>
    );
});

export { AboutUsContainer };
