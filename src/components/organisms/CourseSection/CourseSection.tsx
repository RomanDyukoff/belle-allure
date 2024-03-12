'use client';

import { useEffect, useRef, useState } from 'react';

import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { LearnCard } from '@/components/atoms/LearnCard/LearnCard';
import { Title } from '@/components/atoms/TItle/Title';
import { useCn } from '@/hooks/useCn';

import type { CourseSectionPropsType } from './CourseSection.type';

import styles from './style.module.scss';

export const CourseSection = ({ title, subtitle, dataCards }: CourseSectionPropsType): JSX.Element => {
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
        <div className={cx('colorist')}>
            <AdaptiveContainer>
                <div className={cx('colorist__wrapper')}>
                    <Title classNames={cx('colorist__title')} level='h2'>
                        {title}
                    </Title>
                    {subtitle && (
                        <Title classNames={cx('colorist__subtitle')} level='h3'>
                            {subtitle}
                        </Title>
                    )}
                    <div ref={ref} className={cx('colorist__cards', isVisible && 'isActive')}>
                        {dataCards.map((data, i) => (
                            <LearnCard key={i} {...data} />
                        ))}
                    </div>
                </div>
            </AdaptiveContainer>
        </div>
    );
};
