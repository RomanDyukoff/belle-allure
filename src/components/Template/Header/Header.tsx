import cnBind from 'classnames/bind';

import { Logo } from '@/components/atoms/Logo/Logo';
import { NavBar } from '@/components/molecules/NavBar/NavBar';
import { useScrollTop } from '@/hooks/useScrollTop';

import styles from './Header.module.scss';
import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { useCn } from '@/hooks';


export const Header = ({ className }: { className?: string }) => {
    const cx = useCn(styles)
    const [, , v] = useScrollTop();

    return (
        <header className={cx('header', className, v >= 50 && 'scroll-active')}>
            <AdaptiveContainer>
                <div className={cx('header__wrapper')}>
                    <div className={cx('header-logo')}>
                        <Logo />
                        <span className={cx('title')}>салон ногтевого сервиса</span>
                    </div>
                    <NavBar />
                </div>
            </AdaptiveContainer>
        </header>
    );
};
