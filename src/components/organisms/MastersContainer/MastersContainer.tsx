'use client';

import { memo, useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import nina from '@/assets/images/6U3A0247.jpg';
import galya from '@/assets/images/6U3A1180_1604093993.jpg';
import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { Title } from '@/components/atoms/TItle/Title';
import { useCn } from '@/hooks/useCn';

import styles from './index.module.scss';

interface MastersDataType {
    name: string;
    id: string;
}

interface ImagesDataType {
    src: StaticImageData;
    id: string;
}

const dataImage: ImagesDataType[] = [
    { src: galya, id: '1' },
    { src: nina, id: '2' },
    { src: galya, id: '3' },
    { src: nina, id: '4' },
];

const dataMasters: MastersDataType[] = [
    { name: 'Наталья', id: '1' },
    { name: 'Светлана', id: '2' },
    { name: 'Марина', id: '3' },
    { name: 'Мария', id: '4' },
];

const MastersContainer = memo(() => {
    const cx = useCn(styles);
    const [imageIndex, setImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = (id: string) => {
        setIsHovering(true);
        setImageIndex(dataImage.findIndex((image) => +image.id === +id));
    };

    const handleMouseLeave = () => setIsHovering(false);


    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isHovering) {
            interval = setInterval(() => {
                setImageIndex((prevIndex) => (prevIndex + 1) % dataImage.length);
            }, 2000);
        }

        return () => clearInterval(interval);
    }, [isHovering]);

    return (
        <section className={cx('masters')}>
            <AdaptiveContainer>
                <Title classNames={cx('masters__title')} level='h2'>
                    Познакомьтесь с нашими сотрудниками!
                </Title>
                <div className={cx('masters__wrapper')}>
                    <ul className={cx('masters__list')}>
                        {dataMasters.map(({ name, id }) => (
                            <li
                                key={id}
                                className={cx('masters__item', imageIndex + 1 === +id && 'isActivePoint')}
                                onMouseEnter={() => handleMouseEnter(id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span>{name}</span>
                                {/* <ArrowForwardIcon className={cx('arrow')} /> */}
                            </li>
                        ))}
                    </ul>

                    <div className={cx('masters__images')}>
                        <div className={cx('masters__image')}>
                            {dataImage.map((img, i) => (
                                <Image
                                    key={i}
                                    className={cx(+img.id === imageIndex + 1 ? 'isActive' : '')}
                                    src={img.src}
                                    alt='photo'
                                    priority
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </AdaptiveContainer>
        </section>
    );
});
export { MastersContainer };
