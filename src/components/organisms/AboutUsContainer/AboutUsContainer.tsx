'use client';

import type { SyntheticEvent } from 'react';
import { memo, useState } from 'react';
import cnBind from 'classnames/bind';
import Image from 'next/image';

import Photo_2 from '@/assets/images/6U3A0247.jpg';
import Photo_1 from '@/assets/images/6U3A1180_1604093993.jpg';
import quote from '@/assets/images/bg_quote_mone.png';
import Photo_3 from '@/assets/images/TOT_E_small_30_1_500x570_crop_center.webp';
import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { CustomTabs } from '@/components/atoms/CustomTabs/CustomTabs';
import { Title } from '@/components/atoms/TItle/Title';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
const AboutUsContainer = memo(() => {
    const listTitle = ['История', 'Философия', 'Достижения'];
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={cx('aboutUs')}>
            <AdaptiveContainer classNames={cx('aboutUs__container')}>
                <div className={cx('aboutUs__tabs')}>
                    <Title levet='h2' classNames={cx('aboutUs__title')}>
                        Осознательная красота.
                    </Title>
                    <CustomTabs value={value} handleChange={handleChange} titles={listTitle} />
                </div>
                <div
                    role='tabpanel'
                    hidden={value !== 1}
                    id={`simple-tabpanel-${1}`}
                    aria-labelledby={`simple-tab-${1}`}
                    className={cx('aboutUs__content')}
                >
                    {value === 1 && (
                        <div className={cx('aboutUs__philosophy')}>
                            <div className={cx('aboutUs__philosophy-principleOne')}>
                                <Title classNames={cx('aboutUs__philosophy-caption')} levet='h3'>
                                    Меньше значит больше.
                                </Title>
                                <div className={cx('aboutUs__philosophy-img')}>
                                    <Image loading='lazy' src={Photo_2} alt='' />
                                </div>

                                <p className={cx('aboutUs__philosophy-desc')}>
                                    «Во всем вообще совершенство достигается окончательно не тогда, когда уже нечего
                                    добавить, а когда уже нечего отнять».
                                </p>
                                <p className={cx('aboutUs__philosophy-desc')}> Антуан де Сент-Экзюпери</p>
                            </div>
                            <div className={cx('aboutUs__philosophy-more')}>
                                <div className={cx('aboutUs__philosophy-principleTwo')}>
                                    <Title classNames={cx('aboutUs__philosophy-caption')} levet='h3'>
                                        Практический подход.
                                    </Title>
                                    <div className={cx('aboutUs__philosophy-img')}>
                                        <Image loading='lazy' src={Photo_3} alt='' />
                                    </div>
                                    <p className={cx('aboutUs__philosophy-desc')}>
                                        В 2009 году мы открыли первый маникюрный салон, где меньше значит больше.
                                        Продуманно спроектированное пространство, в котором меньше внимания уделяется
                                        уходу за ногтями, а больше заботе о себе и окружающем мире с помощью формул,
                                        которые очищают, питают, окрашивают и придают блеск — и все это без вредных
                                        ингредиентов. Это было прекрасное начало, которое привело к появлению
                                        дополнительных пространств, каждое из которых уникально.
                                    </p>
                                </div>
                                <div className={cx('aboutUs__philosophy-principleThree')}>
                                    <Title classNames={cx('aboutUs__philosophy-caption')} levet='h3'>
                                        Лучший способ.
                                    </Title>
                                    <div className={cx('aboutUs__philosophy-img')}>
                                        <Image loading='lazy' src={Photo_1} alt='' />
                                    </div>
                                    <p className={cx('aboutUs__philosophy-desc')}>
                                        Когда мы приступили к созданию продуктов, которые позволят перенести ощущения в
                                        салоне Belle Allure домой, нетоксичность была необходимостью, как и результаты
                                        салонного качества. Наши формулы не только «не содержат восьми» (без
                                        дибутилфталата, толуола, формальдегида, формальдегидной смолы, камфоры,
                                        этилтозиламида, ксилола или трифенилфосфата), но также не содержат жестокого
                                        обращения и являются веганскими.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    role='tabpanel'
                    hidden={value !== 0}
                    id={`simple-tabpanel-${0}`}
                    aria-labelledby={`simple-tab-${0}`}
                    className={cx('aboutUs__content')}
                >
                    {value === 0 && (
                        <div className={cx('aboutUs__history')}>
                            <Title classNames={cx('aboutUs__history-caption')}>Belle Allure</Title>
                            <div className={cx('aboutUs__history-items')}>
                                <div className={cx('aboutUs__history-top')}>
                                    <p>
                                        История Belle Allure началась 16 сентября 1998 года, когда Александр Глушков
                                        открыл первый салон Belle Allure в Москве на Новинском бульваре. Первыми
                                        клиентами были женщины, любящие искусство, а особенно импрессионистов.
                                    </p>
                                </div>
                                <div className={cx('aboutUs__history-middle')}>
                                    <div className={cx('aboutUs__history-img')}>
                                        <Image src={quote} alt='' />
                                    </div>
                                    <div className={cx('aboutUs__history-desc')}>
                                        <p className={cx('aboutUs__history-item')}>
                                            Я назвал салон именем Belle Allure, потому что безумно люблю
                                            импрессионистов, цвет и творчество. Belle Allure для меня — самый близкий по
                                            духу и стилю художник.
                                        </p>
                                        <p className={cx('aboutUs__history-item')}>
                                            Я хочу сделать профессию парикмахера самой престижной и желанной в нашей
                                            стране.
                                        </p>
                                        <p className={cx('aboutUs__history-item')}>
                                            Мне нравится, когда женщина в сложный будний день, полный встреч и желания
                                            всюду успеть, не забывает надеть каблуки и сделать укладку.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('aboutUs__history-bottom')}>
                                    <div className={cx('aboutUs__history-items')}>
                                        <div className={cx('aboutUs__history-caption')}>
                                            <Title levet='h1'>
                                                <span>Я люблю красивых</span> женщин с умными глазами
                                            </Title>
                                        </div>
                                        <p className={cx('aboutUs__history-item')}>
                                            Эта фраза явилась для меня ключевой во время принятия решения об открытии
                                            салона красоты. Внешняя привлекательность позволяет женщине светиться
                                            изнутри и уверенно идти к успеху, неважно какому: быть гармоничной мамой или
                                            бизнес-леди.
                                        </p>
                                        <div className={cx('aboutUs__history-img')}>
                                            <Image src={Photo_2} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </AdaptiveContainer>
        </div>
    );
});

export { AboutUsContainer };
