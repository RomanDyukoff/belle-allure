import cnBind from "classnames/bind";

import type { IButtonType } from "@/components/atoms/Button/Button.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const Button = ({ disabled, handleAction, classNames, children }: IButtonType) => {
    return (
        <button
            aria-label={!children ? "Mute Volume" : ""}
            type="button"
            disabled={disabled}
            className={cx("button", classNames)}
            onClick={handleAction}
        >
            {children}
        </button>
    );
};
