'use client';

import { useEffect, useRef } from 'react';

import { SurfacingCard } from '@/components/atoms/SurfacingCard/SurfacingCard';
import type { SurfacingCardType } from '@/components/atoms/SurfacingCard/SurfacingCard.type';
import { useCn } from '@/hooks/useCn';

import bgCard from '../../../assets/images/up.png';

import styles from './style.module.scss';

const dataItems: SurfacingCardType[] = [
    {
        point: '',
        title: 'Академия',
        linkName: 'подробнее',
        path: '/',
        pathBg: bgCard.src,
    },
    {
        point: '',
        title: 'Академия',
        linkName: 'подробнее',
        path: '/',
        pathBg: bgCard.src,
    },
    {
        point: '',
        title: 'Академия',
        linkName: 'подробнее',
        path: '/',
        pathBg: bgCard.src,
    },
    {
        point: '',
        title: 'Академия',
        linkName: 'подробнее',
        path: '/',
        pathBg: bgCard.src,
    },
];

export const SurfacingSection = () => {
    const ref = useRef<null | HTMLElement>(null);
    const cx = useCn(styles);

    useEffect(() => {
        const { current } = ref;

        if (!current) return;

        const observers = Array.from(current.children).map((el, i) => {
            const observer = new IntersectionObserver(
                ([{ isIntersecting, target }]) => {
                    setTimeout(() => {
                        target.classList.toggle(cx('isVivsible'), isIntersecting);
                    }, i * 500);
                },
                { threshold: 0.1 },
            );

            observer.observe(el);

            return observer;
        });

        return () => {
            observers.forEach((observer) => {
                observer.disconnect();
            });
        };
    }, [ref, cx]);

    return (
        <section ref={ref} className={cx('surfacing')}>
            {dataItems.map((items, i) => {
                const { title, linkName, path, pathBg } = items;

                return (
                    <SurfacingCard
                        className={cx('surfacing__card')}
                        key={i}
                        point={`0${i + 1}`}
                        title={title}
                        linkName={linkName}
                        path={path}
                        pathBg={pathBg}
                    />
                );
            })}
        </section>
    );
};
