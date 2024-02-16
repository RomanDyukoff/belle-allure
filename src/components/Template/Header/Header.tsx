"use client";

import { Button } from "@mui/material";
import cnBind from "classnames/bind";

import { Logo } from "@/components/atoms/Logo/Logo";
import { NavBar } from "@/components/molecules/NavBar/NavBar";
import { useScrollTop } from "@/hooks/useScrollTop";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);

export const Header = () => {
    const [, , v] = useScrollTop();

    return (
        <header
            className={cx("header")}
            style={{
                background: v >= 50 ? "" : "white",
                transition: ".5s",
                boxShadow: v >= 50 ? "" : "1px -6px 5px 4px",
            }}
        >
            <div className={cx("header-container")}>
                <Logo />
                <div className={cx("header-middle")}>
                    <NavBar />
                    <div className={cx("header-contacts")}>
                        <a href="tel:+73467300050" target="_blank" rel="noreferrer">
                            +7(346)730-00-50
                        </a>
                        <Button>Запись в салон</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
