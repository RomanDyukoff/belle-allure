import cnBind from "classnames/bind";

import type { TitleProps } from "@/components/atoms/TItle/Title.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const Title = ({ levet = "h1", classNames, children }: TitleProps): JSX.Element => {
    const Tag = levet;

    return <Tag className={cx(classNames, "title")}>{children}</Tag>;
};
