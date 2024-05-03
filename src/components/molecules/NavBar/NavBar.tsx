import cnBind from 'classnames/bind';
import Link from 'next/link';

import { ROUTES } from '@/const/Routes';

import styles from './NavBar.module.scss';

const cx = cnBind.bind(styles);

export const NavBar = ({ className }: { className?: string }) => {
    return (
        <nav className={cx('navigation', className)}>
            <div className={cx('navigation__list')}>
                {ROUTES.map((el, i) => (
                    <Link key={i} href={el.href} className={cx('navigation__link', 'underline')}>
                        {el.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
};
