import { memo } from 'react';
import cnBind from 'classnames/bind';

import { Title } from '@/components/atoms/TItle/Title';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import type { IROUTESFOOTER } from '@/types';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
const FooterNavItem = memo(({ title, listHref }: { title: string; listHref: IROUTESFOOTER[] }) => {
    return (
        <div className={cx('footerTop__nav')}>
            <Title classNames={cx('footerTop__title')} level='h4'>
                {title}
            </Title>
            <Navigation listHref={listHref} />
        </div>
    );
});

export { FooterNavItem };
