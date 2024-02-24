import { Title } from '@/components/atoms/TItle/Title';
import { useCn } from '@/hooks/useCn';

import { AdaptiveContainer } from '../../atoms/AdaptiveContainer/AdaptivContainer';

import styles from './style.module.scss';

export const PrevievSection = () => {
    const cx = useCn(styles);

    return (
        <section className={cx('previev')}>
            <AdaptiveContainer>
                <div className={cx('previev__wrapper')}>
                    <div className={cx('previev__content')}>
                        <Title classNames={cx('previev__title')} levet='h1'>
                            Belle Allure
                        </Title>
                        <Title classNames={cx('previev__subtitle')} levet='h2'>
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
