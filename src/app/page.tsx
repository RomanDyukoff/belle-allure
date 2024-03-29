import cnBind from 'classnames/bind';

import { AboutUsContainer } from '@/components/organisms/AboutUsContainer/AboutUsContainer';
import { AcademyContainer } from '@/components/organisms/AcademyContainer/AcademyContainer';
import { MastersContainer } from '@/components/organisms/MastersContainer/MastersContainer';
import { NewsContainer } from '@/components/organisms/NewsContainer/NewsContainer';
import { PreHeaderSection } from '@/components/organisms/PreHeaderSection';
import { PriceContainer } from '@/components/organisms/PriceContainer/PriceContainer';
import { PriceInfoContainer } from '@/components/organisms/PriceInfoContainer/PriceInfoContainer';

import styles from './page.module.scss';

const cx = cnBind.bind(styles);
export default function Home() {
    return (
        <>
            <PreHeaderSection />
            <div className={cx('home')}>
                <div className={cx('home-bg')} />
            </div>
            <NewsContainer />
            <AboutUsContainer />
            <AcademyContainer />
            <PriceInfoContainer />
            <PriceContainer />
            <MastersContainer />
        </>
    );
}
