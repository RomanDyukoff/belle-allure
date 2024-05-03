import cnBind from 'classnames/bind';
import Link from 'next/link';

import { Logo } from '@/components/atoms/Logo/Logo';
import { NavBar } from '@/components/molecules/NavBar/NavBar';

import styles from './Footer.module.scss';

const cx = cnBind.bind(styles);

export const Footer = () => {
    return (
        <footer className={cx('footer', 'footer-bg')}>
            <div className={cx('footer-container', 'container')}>
                <div className={cx('footer-top')}>
                    <div className={cx('footer-logo')}>
                        <Logo className={cx('logo')} />
                        <span className={cx('title')}>салон ногтевого сервиса</span>
                    </div>
                    <p className={cx('caption')}>Для тех, кому важно качество без компромиссов!</p>
                </div>
                <div className={cx('footer-bottom')}>
                    <div className={cx('footer-contacts')}>
                        <div className={cx('item')}>
                            Адрес <span className={cx('title')}>г. Ханты-Мансийск</span>
                        </div>
                        <div className={cx('item')}>
                            График работы <span className={cx('title')}>пн-вс с 10:00 до 22:00</span>
                        </div>
                        <div className={cx('item')}>
                            Телефон
                            <Link className={cx('title')} href='tel:+73467300050'>
                                +7 (346) 730-00-50
                            </Link>
                        </div>
                        <div className={cx('item')}>Viber, WhatsApp, Telegram</div>
                        <div className={cx('item')}>Онлайн запись круглосуточно на сайте или в мессенджерах</div>
                    </div>
                    <div className={cx('footer-navigation')}>
                        <div className={cx('footer-nav')}>
                            <NavBar />
                        </div>
                        <div className={cx('footer-social')}>
                            <span>
                                Мы в соцсетях
                                <Link href='#'>
                                    <i className={cx('pi pi-instagram')} />
                                </Link>
                                <Link href='#'>
                                    <i className={cx('pi pi-vimeo')} />
                                </Link>
                            </span>
                            <div className={cx('raiting')}>
                                <span>Рейтинг салона</span>
                                <span>Google</span>
                                <span>Яндекс</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer-policy')}>
                        <Link href='#'>Дговор оферты</Link>
                        <Link href='#'>Политика конфиденциальности</Link>
                        <Link href='#'>Условия оплаты и возврат</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
