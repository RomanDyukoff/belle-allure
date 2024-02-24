import { memo } from 'react';
import cnBind from 'classnames/bind';
import Link from 'next/link';

import { Logo } from '@/components/atoms/Logo/Logo';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
const FooterPolicy = memo(() => {
    return (
        <div className={cx('footerPolicy')}>
            <div className={cx('footerPolicy__logo')}>
                <Logo />
            </div>
            <div className={cx('footerPolicy__items')}>
                <Link href='/'>Договор оферты</Link>
                <Link href='/'>Политика конфиденциальности</Link>
                <Link href='/'>Условия оплаты картой и возврат</Link>
            </div>
        </div>
    );
});

export { FooterPolicy };
