'use client';

import { useEffect, useRef, useState } from 'react';

import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { Title } from '@/components/atoms/TItle/Title';
import { useCn } from '@/hooks/useCn';

import styles from './style.module.scss';

const cardData = [
    {
        title: 'SURF GIRL',
        text: 'все оттенки калифорнийского окрашивания',
        price: '7 500',
        duration: '1',
    },
    {
        title: 'BLACK OUT',
        text: 'как вывести из темного тона в светлый за 1 визит гостя',
        price: '10 000',
        duration: '1',
    },
    {
        title: 'CASUAL COLOR',
        text: 'повседневные премиальные техники окрашивания большого города',
        price: '8 500',
        duration: '1',
    },
];

export const ColoristSection = () => {
    const cx = useCn(styles);
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const { current } = ref;

        if (!current) return;

        const observer = new IntersectionObserver(
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(current);
                }
            },
            { threshold: 0.1 },
        );

        observer.observe(current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className={cx('colorist')}>
            <AdaptiveContainer>
                <div className={cx('colorist__wrapper')}>
                    <Title classNames={cx('colorist__title')} level='h2'>
                        СOLORISTICS
                    </Title>
                    <div ref={ref} className={cx('colorist__cards', isVisible && 'isActive')}>
                        {cardData.map(({ title, text, price, duration }, i) => (
                            <div key={i} className={cx('card')}>
                                <Title classNames={cx('card__title')} level='h3'>
                                    {title}
                                </Title>
                                <p className={cx('card__text')}>{text}</p>
                                <div className={cx('card__prices')}>
                                    <span>Стоимость: {price} руб.</span>
                                    <span>Длительность: {duration} день</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AdaptiveContainer>
        </section>
    );
};
