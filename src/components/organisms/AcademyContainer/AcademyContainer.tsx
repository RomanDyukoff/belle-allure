"use client";

import { memo } from "react";
import cnBind from "classnames/bind";

import { AdaptiveContainer } from "@/components/atoms/AdaptiveContainer/AdaptivContainer";
import { Button } from "@/components/atoms/Button/Button";
import { Title } from "@/components/atoms/TItle/Title";

import styles from "./index.module.scss";

const cx = cnBind.bind(styles);
const AcademyContainer = memo(() => {
    return (
        <div className={cx("academy")}>
            <AdaptiveContainer classNames={cx("academy__container")}>
                <Title classNames={cx("academy__caption")} levet="h2">
                    Академия
                </Title>
                <div className={cx("academy__items")}>
                    <span className={cx("academy__desc")}>
                        Каждый мастер, независимо от своего опыта, проходит обучение по многоступенчатой системе
                    </span>
                    <Button handleAction={() => {}} classNames={cx("academy__btn")}>
                        Подробнее
                    </Button>
                </div>
            </AdaptiveContainer>
        </div>
    );
});

export { AcademyContainer };
