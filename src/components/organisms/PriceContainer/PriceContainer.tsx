import { memo } from 'react';
import cnBind from 'classnames/bind';

import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { Title } from '@/components/atoms/TItle/Title';
import { SliderSwiper } from '@/components/molecules/SliderSwiper';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
const PriceContainer = memo(() => {
    return (
        <section className={cx('price')}>
            <AdaptiveContainer classNames={cx('price__container')}>
                <Title classNames={cx('title')} level='h2'>
                    Цены и услуги, которые мы предлагаем{' '}
                </Title>
                <SliderSwiper />
            </AdaptiveContainer>
        </section>
    );
});
export { PriceContainer };
