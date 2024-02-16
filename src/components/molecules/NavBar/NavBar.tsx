"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import cnBind from "classnames/bind";
import Link from "next/link";

import { Dropdown } from "@/components/molecules/Dropdown/Dropdown";
import { ROUTES, ROUTES_CHILDREN } from "@/const/Routes";

import styles from "./NavBar.module.scss";

const cx = cnBind.bind(styles);

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleButton = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent): void => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                menuRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className={cx("navigation")}>
            <button
                onClick={toggleButton}
                className={cx("navigation__burger", `${isOpen ? "open" : ""}`)}
                aria-expanded={isOpen}
                aria-label="menu"
                type="button"
            >
                <div />
                <div />
                <div />
            </button>
            <div ref={menuRef} className={cx("navigation__menu", `${isOpen ? "open" : ""}`)} aria-hidden={!isOpen}>
                <div className={cx("navigation__list")}>
                    {ROUTES.map((el, i) =>
                        !el.context ? (
                            <Link
                                key={i}
                                href={el.href}
                                className={cx("navigation__link", "underline")}
                                onClick={() => setIsOpen(false)}
                            >
                                {el.title}
                            </Link>
                        ) : (
                            <Dropdown
                                ROUTES_CHILDREN={ROUTES_CHILDREN.filter((el) => el.point === i)}
                                key={i}
                                title={el.title}
                            />
                        ),
                    )}
                </div>
            </div>
        </nav>
    );
};
