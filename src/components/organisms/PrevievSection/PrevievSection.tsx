'use client';

import { useEffect, useRef } from 'react';

import { Title } from '@/components/atoms/TItle/Title';
import { useCn } from '@/hooks/useCn';

import { AdaptiveContainer } from '../../atoms/AdaptiveContainer/AdaptivContainer';

import styles from './style.module.scss';

export const PrevievSection = () => {
    const ref = useRef<null | HTMLDivElement>(null);
    const cx = useCn(styles);

    useEffect(() => {
        const { current } = ref;

        if (!current) return;

        const observers = Array.from(current.children).map((child, i) => {
            const observer = new IntersectionObserver(
                ([{ isIntersecting, target }]) => {
                    setTimeout(() => {
                        target.classList.toggle(cx('isVivsible'), isIntersecting);
                    }, i * 500);

                    if (isIntersecting) {
                        observer.unobserve(child);
                    }
                },
                { threshold: 0.1 },
            );

            observer.observe(child);

            return observer;
        });

        return () => {
            observers.forEach((observer) => {
                observer.disconnect();
            });
        };
    }, [ref, cx]);

    return (
        <section className={cx('previev')}>
            <AdaptiveContainer>
                <div className={cx('previev__wrapper')}>
                    <div ref={ref} className={cx('previev__content')}>
                        <Title classNames={cx('previev__title')} level='h1'>
                            Belle Allure
                        </Title>
                        <Title classNames={cx('previev__subtitle')} level='h2'>
                            Академия Belle Allure
                        </Title>
                        <p className={cx('previev__text')}>
                            В методике и теории преподавания мы используем научный подход, основой которого являются
                            знания геометрии, баланса, золотого сечения, законов ритма и колористики.
                        </p>
                    </div>
                </div>
            </AdaptiveContainer>
        </section>
    );
};
