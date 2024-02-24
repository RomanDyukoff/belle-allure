import cnBind from 'classnames/bind';
import Link from 'next/link';

import type { IDropdown } from '@/components/molecules/Dropdown/Dropdown.type';

import styles from './Dropdown.module.scss';

const cx = cnBind.bind(styles);

export const Dropdown = ({ title, ROUTES_CHILDREN }: IDropdown) => {
    return (
        <div className={cx('menu')}>
            <span className={cx('menu-point', 'underline')}>
                {title}
                <div className={cx('t-menusub__arrow')} />
            </span>
            <div className={cx('dropdown')}>
                {ROUTES_CHILDREN.map((elem, i) => (
                    <Link key={i} href={elem.href} className={cx('option', 'underline')} onClick={() => {}}>
                        {elem.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};
