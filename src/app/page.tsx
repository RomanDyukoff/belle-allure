import cnBind from "classnames/bind";

import { AboutUsContainer } from "@/components/organisms/AboutUsContainer/AboutUsContainer";
import { NewsContainer } from "@/components/organisms/NewsContainer/NewsContainer";

import styles from "./page.module.css";

const cx = cnBind.bind(styles);
export default function Home() {
    return (
        <>
            <div className={cx("home")} />
            <NewsContainer />
            <AboutUsContainer />
        </>
    );
}
