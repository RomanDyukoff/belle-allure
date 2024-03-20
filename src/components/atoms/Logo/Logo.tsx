import cnBind from 'classnames/bind';
import Link from 'next/link';

import { Title } from '@/components/atoms/TItle/Title';

import styles from './Logo.module.scss';

const cx = cnBind.bind(styles);
export const Logo = ({
    className,
    classNameTitle,
    title = 'Belle Allure',
}: {
    className?: string;
    classNameTitle?: string;
    title?: string;
}) => {
    return (
        <Link className={cx('link-logo', className)} href='/'>
            <Title classNames={cx('logo', classNameTitle)} level='h1'>
                {title}
            </Title>
        </Link>
    );
};
