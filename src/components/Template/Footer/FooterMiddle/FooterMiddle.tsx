import { memo } from 'react';
import cnBind from 'classnames/bind';
import Image from 'next/image';

import test from '@/assets/images/Untitled-17-660x660.jpg';
import { Title } from '@/components/atoms/TItle/Title';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
const FooterMiddle = memo(() => {
    return (
        <div className={cx('footerMiddle')}>
            <div className={cx('footerMiddle__imgs')}>
                <div className={cx('footerMiddle__img')}>
                    <Image src={test} alt='' />
                </div>
                <div className={cx('footerMiddle__img')}>
                    <Image src={test} alt='' />
                </div>
            </div>
            <div>
                <Title levet='h2'>ТУТ БУДЕТ КАКОЙ-ТО СЛОГАН САЛОНА</Title>
                <span>ТУТ БУДЕТ КАКОЙ-ТО СЛОГАН САЛОНА ИЛИ ЕЩЕ КАКОЙ-ТО ТЕКС</span>
            </div>
            <div className={cx('footerMiddle__imgs')}>
                <div className={cx('footerMiddle__img')}>
                    <Image src={test} alt='' />
                </div>
                <div className={cx('footerMiddle__img')}>
                    <Image src={test} alt='' />
                </div>
            </div>
        </div>
    );
});
export { FooterMiddle };
