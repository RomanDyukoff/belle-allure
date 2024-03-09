'use client';

import { memo } from 'react';
import cnBind from 'classnames/bind';
import Link from 'next/link';

import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
// import { Button } from "@/components/atoms/Button/Button";
import { Title } from '@/components/atoms/TItle/Title';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
const AcademyContainer = memo(() => {
    return (
        <div className={cx('academy')}>
            <AdaptiveContainer classNames={cx('academy__container')}>
                <Title classNames={cx('academy__caption')} level='h2'>
                    Академия
                </Title>
                <div className={cx('academy__items')}>
                    <span className={cx('academy__desc')}>
                        Каждый мастер, независимо от своего опыта, проходит обучение по многоступенчатой системе
                    </span>
                    <Link href='/academy' className={cx('academy__btn')}>
                        Подробнее
                    </Link>
                </div>
            </AdaptiveContainer>
        </div>
    );
});

export { AcademyContainer };
