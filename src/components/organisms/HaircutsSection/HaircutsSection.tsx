import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { LearnCard } from '@/components/atoms/LearnCard/LearnCard';
import type { LearnCardType } from '@/components/atoms/LearnCard/LearnCard.type';
import { Title } from '@/components/atoms/TItle/Title';
import { useCn } from '@/hooks/useCn';

import styles from './style.module.scss';

const cardData2: LearnCardType[] = [
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
    {
        title: 'CASUAL COLOR',
        text: 'повседневные премиальные техники окрашивания большого города',
        price: '8 500',
        duration: '1',
    },
    {
        title: 'CASUAL COLOR',
        text: 'повседневные премиальные техники окрашивания большого города',
        price: '8 500',
        duration: '1',
    },
    {
        title: 'CASUAL COLOR',
        text: 'повседневные премиальные техники окрашивания большого города',
        price: '8 500',
        duration: '1',
    },
];

export const HaircutsSection = () => {
    const cx = useCn(styles);

    return (
        <section className={cx('haircut')}>
            <AdaptiveContainer>
                <div className={cx('haircut__wrapper')}>
                    <Title classNames={cx('colorist__title')} level='h2'>
                        HAIRCUTS
                    </Title>

                    <div className={cx('haircut__cards')}>
                        {cardData2.map(({ title, text, price, duration }, i) => (
                            <LearnCard key={i} title={title} text={text} price={price} duration={duration} />
                        ))}
                    </div>
                </div>
            </AdaptiveContainer>
        </section>
    );
};
