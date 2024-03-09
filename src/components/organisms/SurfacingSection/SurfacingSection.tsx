'use client';

import { useEffect, useRef, useState } from 'react';

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
    const parentRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean[]>([]);

    const cx = useCn(styles);

    useEffect(() => {
        const { current } = parentRef;

        if (!current) return;

        const children = Array.from(current.children);
        setIsVisible(Array.from({ length: children.length }, () => false));

        const observers = children.map((child, i) => {
            const observer = new IntersectionObserver(
                ([{ isIntersecting }]) => {
                    setTimeout(() => {
                        setIsVisible((prevIsVisible) => {
                            const newIsVisible = [...prevIsVisible];
                            newIsVisible[i] = isIntersecting;

                            return newIsVisible;
                        });
                    }, i * 300);

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
    }, []);

    return (
        <section ref={parentRef} className={cx('surfacing')}>
            {dataItems.map(({ title, linkName, path, pathBg }, i) => {
                return (
                    <SurfacingCard
                        className={cx('surfacing__card', isVisible[i] && 'isVisible')}
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
