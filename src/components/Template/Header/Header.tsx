'use client';

import { Button } from '@mui/material';
import cnBind from 'classnames/bind';

import { useScrollTop } from '@/hooks/useScrollTop';

import styles from './Header.module.scss';

const cx = cnBind.bind(styles);

export const Header = () => {
    const [, , v] = useScrollTop();

    return (
        <header className={cx('header', v >= 50 && 'scroll-active')}>
            <div className={cx('header-container')}>
                <div className={cx('header-contacts')}>
                    <a className={cx('header-phone')} href='tel:+73467300050' target='_blank' rel='noreferrer'>
                        +7(346)730-00-50
                    </a>
                    <Button className={cx('header-btn')}>Запись в салон</Button>
                </div>
            </div>
        </header>
    );
};
