import React from 'react';
import cnBind from 'classnames/bind';
import Link from 'next/link';

import { Dropdown } from '@/components/molecules/Dropdown/Dropdown';
import { ROUTES, ROUTES_CHILDREN } from '@/const/Routes';
import { useModalWindow } from '@/hooks/useModalWindow';

import styles from './BurgerMenu.module.scss';

const cx = cnBind.bind(styles);
export const BurgerMenu = () => {
    const { isRef, value, handleToggleModalWindow } = useModalWindow();

    return (
        <div className={cx('burger')}>
            <button
                onClick={handleToggleModalWindow}
                className={cx('navigation__burger', `${value ? 'open' : ''}`)}
                aria-expanded={value}
                aria-label='menu'
                type='button'
            >
                <div />
                <div />
                <div />
            </button>
            <div ref={isRef} className={cx('navigation__menu', `${value ? 'open' : ''}`)} aria-hidden={!value}>
                <div className={cx('navigation__list')}>
                    {ROUTES.map((el, i) =>
                        !el.context ? (
                            <Link
                                key={i}
                                href={el.href}
                                className={cx('navigation__link', 'underline')}
                                onClick={() => handleToggleModalWindow}
                            >
                                {el.title}
                            </Link>
                        ) : (
                            <Dropdown
                                ROUTES_CHILDREN={ROUTES_CHILDREN.filter((el) => el.point === i)}
                                key={i}
                                title={el.title}
                            />
                        ),
                    )}
                </div>
            </div>
        </div>
    );
};
