import { useCn } from '@/hooks/useCn';

import { Title } from '../TItle/Title';

import type { LearnCardType } from './LearnCard.type';

import styles from './style.module.scss';

export const LearnCard = ({ title, text, price, duration }: LearnCardType) => {
    const cx = useCn(styles);

    return (
        <article className={cx('learn-card')}>
            <Title classNames={cx('learn-card__title')} level='h3'>
                {title}
            </Title>
            <p className={cx('learn-card__text')}>{text}</p>
            <div className={cx('learn-card__prices')}>
                <span>Стоимость: {price} руб.</span>
                <span>Длительность: {duration} день</span>
            </div>
        </article>
    );
};
