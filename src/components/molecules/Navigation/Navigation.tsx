import cnBind from 'classnames/bind';
import Link from 'next/link';

import type { IROUTESFOOTER } from '@/types';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
export const Navigation = ({ listHref }: { listHref: IROUTESFOOTER[] }) => {
    return (
        <div className={cx('navigation')}>
            {listHref.map((el, i) => (
                <Link key={i} href={el.href} className={cx('navigation__link', 'underline')}>
                    {el.title}
                </Link>
            ))}
        </div>
    );
};
