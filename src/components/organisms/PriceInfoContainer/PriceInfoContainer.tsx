import { memo } from 'react';
import cnBind from 'classnames/bind';

import STATIC from '@/assets/images/bellacures_icons-03-1-300x300.webp';
import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { Title } from '@/components/atoms/TItle/Title';
import { CardPrice } from '@/components/molecules/CardPrice/CardPrice';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
const PriceInfoContainer = memo(() => {
    const listCard = [
        {
            src: STATIC,
            title: 'Маникюр',
            desc: 'Аппаратный, комбинированный маникюр и др. Огромная палитра лаков и гель-лаков от CND, CNI, Emi, Beautix и др.',
        },
        {
            src: STATIC,
            title: 'Моделирование',
            desc: 'Мы специализируемся на наращивании и коррекции ногтей.Гарантия - 14 дней!',
        },
        {
            src: STATIC,
            title: 'Педикюр',
            desc: 'SMART-педикюр, аппаратный, комбинированный.Огромная палитра лаков и гель-лаков от CND, CNI, Emi, Beautix и др.',
        },
        {
            src: STATIC,
            title: 'Дизайн ногтей',
            desc: 'Дизайн любой сложности. Посмотрите часть нашей коллекции работ на сайте.Все наши работы в instagram и вконтакте.',
        },
    ];

    return (
        <div className={cx('price')}>
            <AdaptiveContainer classNames={cx('price__container')}>
                <Title classNames={cx('price__caption')} level='h2'>
                    Позвольте нам побаловать вас
                </Title>
                <div className={cx('price__items')}>
                    {listCard.map((el, i) => (
                        <CardPrice key={i} src={el.src} desc={el.desc} title={el.title} />
                    ))}
                </div>
            </AdaptiveContainer>
        </div>
    );
});
export { PriceInfoContainer };
