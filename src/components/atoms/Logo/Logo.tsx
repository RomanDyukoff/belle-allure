import cnBind from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.svg";

import styles from "./Logo.module.scss";

const cx = cnBind.bind(styles);
export const Logo = () => {
    return (
        <Link className={cx("link-logo")} href="/">
            <Image priority className={cx("logo")} src={logo as string} alt="BA" />
        </Link>
    );
};
