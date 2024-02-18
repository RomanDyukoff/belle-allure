import cnBind from "classnames/bind";
import Link from "next/link";

import { Title } from "@/components/atoms/TItle/Title";

import styles from "./Logo.module.scss";

const cx = cnBind.bind(styles);
export const Logo = () => {
    return (
        <Link className={cx("link-logo")} href="/">
            <Title classNames={cx("logo")} levet="h1">
                Belle Allure
            </Title>
        </Link>
    );
};
