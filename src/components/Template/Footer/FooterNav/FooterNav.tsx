import { memo } from 'react';
import { SvgIcon } from '@mui/material';
import cnBind from 'classnames/bind';

import { Logo } from '@/components/atoms/Logo/Logo';
import { FooterNavItem } from '@/components/Template/Footer/FooterNav/FooterNavItem';
import { ROUTESFOOTER } from '@/const/Routes';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
const FooterNav = memo(() => {
    return (
        <div className={cx('footerTop')}>
            <FooterNavItem title='Навигация' listHref={ROUTESFOOTER} />
            <FooterNavItem title='Для Клиентов' listHref={ROUTESFOOTER} />
            <div className={cx('footerTop__items')}>
                <div className={cx('footerTop__socials')}>
                    <SvgIcon>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            x='0px'
                            y='0px'
                            width='100'
                            height='100'
                            viewBox='0 0 24 24'
                        >
                            <path d='M 20.302734 2.984375 C 20.013769 2.996945 19.748583 3.080055 19.515625 3.171875 C 19.300407 3.256634 18.52754 3.5814726 17.296875 4.0976562 C 16.06621 4.61384 14.435476 5.2982348 12.697266 6.0292969 C 9.2208449 7.4914211 5.314238 9.1361259 3.3125 9.9785156 C 3.243759 10.007156 2.9645852 10.092621 2.65625 10.328125 C 2.3471996 10.564176 2.0039062 11.076462 2.0039062 11.636719 C 2.0039062 12.088671 2.2295201 12.548966 2.5019531 12.8125 C 2.7743861 13.076034 3.0504903 13.199244 3.28125 13.291016 L 3.28125 13.289062 C 4.0612776 13.599827 6.3906939 14.531938 6.9453125 14.753906 C 7.1420423 15.343433 7.9865895 17.867278 8.1875 18.501953 L 8.1855469 18.501953 C 8.3275588 18.951162 8.4659791 19.243913 8.6582031 19.488281 C 8.7543151 19.610465 8.8690398 19.721184 9.0097656 19.808594 C 9.0637596 19.842134 9.1235454 19.868148 9.1835938 19.892578 C 9.191962 19.896131 9.2005867 19.897012 9.2089844 19.900391 L 9.1855469 19.894531 C 9.2029579 19.901531 9.2185841 19.911859 9.2363281 19.917969 C 9.2652427 19.927926 9.2852873 19.927599 9.3242188 19.935547 C 9.4612233 19.977694 9.5979794 20.005859 9.7246094 20.005859 C 10.26822 20.005859 10.601562 19.710937 10.601562 19.710938 L 10.623047 19.695312 L 12.970703 17.708984 L 15.845703 20.369141 C 15.898217 20.443289 16.309604 21 17.261719 21 C 17.829844 21 18.279025 20.718791 18.566406 20.423828 C 18.853787 20.128866 19.032804 19.82706 19.113281 19.417969 L 19.115234 19.416016 C 19.179414 19.085834 21.931641 5.265625 21.931641 5.265625 L 21.925781 5.2890625 C 22.011441 4.9067171 22.036735 4.5369631 21.935547 4.1601562 C 21.834358 3.7833495 21.561271 3.4156252 21.232422 3.2226562 C 20.903572 3.0296874 20.591699 2.9718046 20.302734 2.984375 z M 19.908203 5.1738281 C 19.799442 5.7198576 17.33401 18.105877 17.181641 18.882812 L 13.029297 15.041016 L 10.222656 17.414062 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272368 8.8887854 10.401283 11.664685 8.0058594 13.027344 C 7.8617016 12.96954 5.6973962 12.100458 4.53125 11.634766 C 6.6055146 10.76177 10.161156 9.2658083 13.472656 7.8730469 C 15.210571 7.142109 16.840822 6.4570977 18.070312 5.9414062 C 19.108158 5.5060977 19.649538 5.2807035 19.908203 5.1738281 z M 17.152344 19.025391 C 17.152344 19.025391 17.154297 19.025391 17.154297 19.025391 C 17.154252 19.025621 17.152444 19.03095 17.152344 19.03125 C 17.153615 19.024789 17.15139 19.03045 17.152344 19.025391 z' />
                        </svg>
                    </SvgIcon>
                    <SvgIcon>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            x='0px'
                            y='0px'
                            width='100'
                            height='100'
                            viewBox='0 0 64 64'
                        >
                            <path d='M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z' />
                        </svg>
                    </SvgIcon>
                </div>
                <Logo title='BA' />
                <div className={cx('footerTop__socials')}>
                    <SvgIcon>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            x='0px'
                            y='0px'
                            width='100'
                            height='100'
                            viewBox='0 0 64 64'
                        >
                            <path d='M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 32.740234 19.693359 L 32.740234 36.294922 C 32.740234 38.576922 30.756031 39.755859 29.332031 39.755859 C 28.259031 39.755859 25.818359 38.914578 25.818359 36.267578 C 25.818359 33.488578 28.095422 32.779297 29.357422 32.779297 C 30.092422 32.779297 30.380859 32.9375 30.380859 32.9375 L 30.380859 28.507812 C 30.380859 28.507813 29.830172 28.425781 29.201172 28.425781 C 24.682172 28.425781 21.464844 32.083578 21.464844 36.267578 C 21.464844 39.802578 24.229297 44.082031 29.279297 44.082031 C 34.658297 44.082031 37.121094 39.595969 37.121094 36.292969 L 37.121094 28.058594 C 37.121094 28.058594 39.518422 29.736328 42.732422 29.736328 L 42.732422 25.541016 C 39.045422 25.278016 37.0745 22.801359 36.9375 19.693359 L 32.740234 19.693359 z' />
                        </svg>
                    </SvgIcon>
                    <SvgIcon>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            x='0px'
                            y='0px'
                            width='100'
                            height='100'
                            viewBox='0 0 24 24'
                        >
                            <path d='M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M17.907,15.684 l-1.735,0.024c0,0-0.374,0.073-0.864-0.265c-0.649-0.446-1.261-1.606-1.738-1.455c-0.484,0.154-0.469,1.198-0.469,1.198 s0.004,0.184-0.107,0.304c-0.12,0.129-0.355,0.116-0.355,0.116h-0.777c0,0-1.714,0.142-3.225-1.433 c-1.646-1.717-3.1-5.106-3.1-5.106S5.452,8.853,5.543,8.744C5.646,8.623,5.924,8.62,5.924,8.62l1.857-0.009 c0,0,0.175,0.031,0.301,0.123c0.103,0.076,0.162,0.219,0.162,0.219s0.3,0.761,0.698,1.45c0.776,1.343,1.137,1.637,1.4,1.493 c0.384-0.21,0.269-1.898,0.269-1.898s0.007-0.613-0.193-0.886C10.262,8.899,9.969,8.836,9.84,8.82 c-0.105-0.014,0.066-0.257,0.289-0.367c0.334-0.163,0.925-0.173,1.622-0.166c0.543,0.006,0.7,0.039,0.912,0.091 c0.641,0.155,0.423,0.753,0.423,2.188c0,0.46-0.083,1.106,0.248,1.319c0.143,0.092,0.491,0.014,1.36-1.466 c0.413-0.702,0.722-1.527,0.722-1.527s0.068-0.147,0.173-0.21c0.108-0.065,0.253-0.045,0.253-0.045l1.955-0.012 c0,0,0.587-0.071,0.683,0.196c0.1,0.279-0.219,0.93-1.018,1.995c-1.311,1.75-1.457,1.587-0.368,2.599 c1.04,0.967,1.255,1.437,1.291,1.496C18.815,15.627,17.907,15.684,17.907,15.684z' />
                        </svg>
                    </SvgIcon>
                </div>
            </div>
            <FooterNavItem title='Академия' listHref={ROUTESFOOTER} />
            <FooterNavItem title='Карьера' listHref={ROUTESFOOTER} />
        </div>
    );
});

export { FooterNav };
