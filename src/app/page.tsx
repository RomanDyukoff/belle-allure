import cnBind from "classnames/bind";

import { AboutUsContainer } from "@/components/organisms/AboutUsContainer/AboutUsContainer";
import { NewsContainer } from "@/components/organisms/NewsContainer/NewsContainer";
import { PriceInfoContainer } from "@/components/organisms/PriceInfoContainer/PriceInfoContainer";

import styles from "./page.module.scss";

const cx = cnBind.bind(styles);
export default function Home() {
    return (
        <>
            <div className={cx("home")}>
                <div className={cx("home-bg")} />
            </div>
            <NewsContainer />
            <AboutUsContainer />
            <PriceInfoContainer />
        </>
    );
}
