import cnBind from 'classnames/bind';

import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { FooterMiddle } from '@/components/Template/Footer/FooterMiddle/FooterMiddle';
import { FooterNav } from '@/components/Template/Footer/FooterNav/FooterNav';
import { FooterPolicy } from '@/components/Template/Footer/FooterPolicy/FooterPolicy';

import styles from './Footer.module.scss';

const cx = cnBind.bind(styles);

export const Footer = () => {
    return (
        <footer className={cx('footer', 'footer-bg')}>
            <div className={cx('footer-container')}>
                <AdaptiveContainer>
                    <FooterNav />
                </AdaptiveContainer>

                <FooterMiddle />
                <FooterPolicy />
            </div>
        </footer>
    );
};
