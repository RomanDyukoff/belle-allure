import type { ReactNode } from 'react';
import React from 'react';
import cnBind from 'classnames/bind';
import Head from 'next/head';

import { Footer } from '@/components/Template/Footer/Footer';
import { Header } from '@/components/Template/Header/Header';

import styles from './PageLayout.module.scss';

const cx = cnBind.bind(styles);

type PropsType = {
    title?: string;
    children: ReactNode;
};

export const PageLayout = ({ children, title }: PropsType) => {
    return (
        <>
            <Head>
                <link href='/next.svg' rel='icon' type='image/svg+xml' />
                {title && <title>{title}</title>}
            </Head>

            <div className={cx('wrapper')}>
                <Header />
                <main className={cx('main')}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};
