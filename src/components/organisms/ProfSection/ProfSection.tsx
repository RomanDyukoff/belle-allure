'use client';

import { ProfItem } from '@/components/atoms/ProfItem/ProfItem';
import { Title } from '@/components/atoms/TItle/Title';
import { useCn } from '@/hooks/useCn';

import type { DataCardsType } from './ProfSection.type';

import styles from './style.module.scss';

const dataCards: DataCardsType[] = [
    {
        point: '',
        title: 'мы двигаемся вперед без страха и сомнений.',
    },
    {
        point: '',
        title: 'мы двигаемся вперед без страха и сомнений.',
    },
    {
        point: '',
        title: 'мы двигаемся вперед без страха и сомнений.',
    },
    {
        point: '',
        title: 'мы двигаемся вперед без страха и сомнений.',
    },
];

const dataCounters: DataCardsType[] = [
    {
        point: '5000',
        title: 'студентов в год',
    },
    {
        point: '5000',
        title: 'студентов в год',
    },
    {
        point: '5000',
        title: 'студентов в год',
    },
    {
        point: '5000',
        title: 'студентов в год',
    },
];

export const ProfSection = () => {
    const cx = useCn(styles);

    return (
        <section className={cx('prof')}>
            <div className='container'>
                <div className={cx('prof__wrapper')}>
                    <Title classNames={cx('prof__title')} levet='h2'>
                        Мы верим в то, что только благодаря страсти к профессии, упорному труду и дисциплине рождается
                        талант парикмахера! Только так Вы способны реализоваться, как профессионал.
                    </Title>
                    <div className={cx('prof__cards')}>
                        {dataCards.map(({ title }, i) => (
                            <ProfItem key={i} className={cx('prof__card')} point={`0${i}`} title={title} />
                        ))}
                    </div>

                    <div className={cx('prof__counters')}>
                        {dataCounters.map(({ title, point }, i) => (
                            <ProfItem key={i} className={cx('prof__counter')} point={point} title={title} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
