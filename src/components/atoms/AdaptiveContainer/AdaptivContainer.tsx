import cnBind from "classnames/bind";

import type { ContainerProps } from "@/components/atoms/AdaptiveContainer/AdaptiveContainer.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const AdaptiveContainer = ({ classNames, children = <div /> }: ContainerProps): JSX.Element => {
    return <div className={cx(classNames, "container")}>{children}</div>;
};
