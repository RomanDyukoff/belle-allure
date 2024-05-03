import React from 'react';
import cnBind from 'classnames/bind';
import type { ButtonProps } from 'primereact/button';
import { Button as ButtonPrime } from 'primereact/button';

import styles from './style.module.scss';

const cx = cnBind.bind(styles);
interface PropsType extends ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    classNames?: string;
}
export const Button = ({ disabled, onClick, classNames, children, title, ...props }: PropsType) => {
    return (
        <ButtonPrime
            aria-label={!children ? 'Mute Volume' : ''}
            type='button'
            disabled={disabled}
            className={cx('button', classNames)}
            onClick={onClick}
            title={title}
            {...props}
        />
    );
};
