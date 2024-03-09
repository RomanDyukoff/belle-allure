'use client';

import { useEffect, useRef, useState } from 'react';

import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { LearnCard } from '@/components/atoms/LearnCard/LearnCard';
import type { LearnCardType } from '@/components/atoms/LearnCard/LearnCard.type';
import { Title } from '@/components/atoms/TItle/Title';
import { useCn } from '@/hooks/useCn';

import styles from './style.module.scss';

const cardData: LearnCardType[] = [
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
                            <LearnCard key={i} title={title} text={text} price={price} duration={duration} />
                        ))}
                    </div>
                </div>
            </AdaptiveContainer>
        </section>
    );
};