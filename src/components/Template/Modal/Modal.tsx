import { useEffect } from 'react';
import cnBind from 'classnames/bind';

import type { ModalProps } from './modal.type';

import styles from './style.module.scss';

const cx = cnBind.bind(styles);

export const Modal = ({
    isOpen,
    onClose,
    children,
    hasHeader,
    title,
    className,
    containerClassName,
    fullscreen,
    isClose,
}: ModalProps) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={cx('modal')}>
            <div className={cx('backdrop')} onClick={onClose} />
            <div className={cx('actions')}>
                <button aria-label='Mute volume' type='button' className={cx('action')} onClick={onClose} />
            </div>
            <div className={cx('container', containerClassName, { fullscreen })}>
                {hasHeader && (
                    <div className={cx('header')}>
                        <h3 className={cx('title')}>{title}</h3>
                        {isClose && (
                            <div className={cx('actions')}>
                                <button
                                    aria-label='Mute volume'
                                    type='button'
                                    className={cx('action')}
                                    onClick={onClose}
                                />
                            </div>
                        )}
                    </div>
                )}
                <div className={cx('content', className, { fullscreen })}>{children}</div>
            </div>
        </div>
    );
};
