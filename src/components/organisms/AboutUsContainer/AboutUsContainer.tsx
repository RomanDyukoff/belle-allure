"use client";

import type { SyntheticEvent } from "react";
import { memo, useState } from "react";
import { Box, Typography } from "@mui/material";
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
            <AdaptiveContainer>
                <Title levet="h2" classNames={cx("aboutUs__title")}>
                    О нас
                </Title>

                <CustomTabs value={value} handleChange={handleChange} titles={listTitle} />

                <div
                    role="tabpanel"
                    hidden={value !== 0}
                    id={`simple-tabpanel-${0}`}
                    aria-labelledby={`simple-tab-${0}`}
                >
                    {value === 0 && (
                        <Box sx={{ p: 3 }}>
                            <h1>История Belle Allure</h1>
                            <div>
                                <p>
                                    История MONÉ началась 16 сентября 1998 года, когда Александр Глушков открыл первый
                                    салон MONÉ в Москве на Новинском бульваре. Первыми клиентами были женщины, любящие
                                    искусство, а особенно импрессионистов.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Я назвал салон именем Моне, потому что безумно люблю импрессионистов, цвет и
                                    творчество. Моне для меня — самый близкий по духу и стилю художник.
                                </p>
                                <p>Я хочу сделать профессию парикмахера самой престижной и желанной в нашей стране.</p>
                                <p>
                                    Мне нравится, когда женщина в сложный будний день, полный встреч и желания всюду
                                    успеть, не забывает надеть каблуки и сделать укладку.
                                </p>
                            </div>
                        </Box>
                    )}
                </div>
                <div
                    role="tabpanel"
                    hidden={value !== 1}
                    id={`simple-tabpanel-${1}`}
                    aria-labelledby={`simple-tab-${1}`}
                >
                    {value === 1 && (
                        <Box sx={{ p: 3 }}>
                            <Typography>asdasdasd</Typography>
                        </Box>
                    )}
                </div>
            </AdaptiveContainer>
        </div>
    );
});

export { AboutUsContainer };
