import cnBind from 'classnames/bind';

import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { Logo } from '@/components/atoms/Logo/Logo';
import { NavBar } from '@/components/molecules/NavBar/NavBar';

import styles from './PreHeaderSection.module.scss';

const cx = cnBind.bind(styles);
export const PreHeaderSection = () => {
    return (
        <section className={cx('pre-header')}>
            <AdaptiveContainer classNames={cx('container')}>
                <div className={cx('logo')}>
                    <Logo classNameTitle={cx('logo-title')} />
                    <span className={cx('title')}>СТУДИЯ МАНИКЮРА И ПЕДИКЮРА</span>
                </div>
                <div className={cx('navbar')}>
                    <NavBar />
                </div>
            </AdaptiveContainer>
        </section>
    );
};
