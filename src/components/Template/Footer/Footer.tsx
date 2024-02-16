import cnBind from "classnames/bind";

import styles from "@/components/template/Footer/Footer.module.scss";

const cx = cnBind.bind(styles);

export const Footer = () => {
    return (
        <footer className={cx("footer", "footer-bg")}>
            <div className={cx("footer-container", "container")}></div>
        </footer>
    );
};
