import cnBind from 'classnames/bind';

import { Logo } from '@/components/atoms/Logo/Logo';
import { NavBar } from '@/components/molecules/NavBar/NavBar';
import { useScrollTop } from '@/hooks/useScrollTop';

import styles from './Header.module.scss';

const cx = cnBind.bind(styles);

export const Header = ({ className }: { className?: string }) => {
    const [, , v] = useScrollTop();

    return (
        <header className={cx('header', className, v >= 50 && 'scroll-active')}>
            <div className={cx('header-container', 'container')}>
                <div className={cx('header-logo')}>
                    <Logo />
                    <span className={cx('title')}>салон ногтевого сервиса</span>
                </div>
                <NavBar />
            </div>
        </header>
    );
};
