import type React from "react";

export interface IButtonType {
    handleAction: () => void;
    disabled?: boolean;
    classNames?: string;
    children?: React.ReactNode;
}
