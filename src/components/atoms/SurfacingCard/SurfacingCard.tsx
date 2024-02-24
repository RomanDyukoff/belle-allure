import { memo } from 'react';
import Link from 'next/link';

import { Title } from '@/components/atoms/TItle/Title';
import { useCn } from '@/hooks/useCn';

import type { SurfacingCardType } from './SurfacingCard.type';

import styles from './style.module.scss';

export const SurfacingCard = memo(({ point, title, linkName, path, pathBg, className }: SurfacingCardType) => {
    const cx = useCn(styles);

    return (
        <div className={cx('surfacing-card', className)} style={{ backgroundImage: `url(${pathBg})` }}>
            <div className={cx('surfacing-card__wrapper')}>
                <span className={cx('surfacing-card__point')}>{point}</span>

                <Title classNames={cx('surfacing-card__title')}>
                    <Link href='/'>{title}</Link>
                </Title>

                <Link className={cx('surfacing-card__link')} href={path}>
                    {linkName}
                </Link>
            </div>
        </div>
    );
});
