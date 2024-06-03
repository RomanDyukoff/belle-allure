'use client'

import { useCn } from '@/hooks'
import style from './service.module.scss';
import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';

import Image from 'next/image'
import { type ServiceSectionProps } from './service.type';
import { ServiceCard } from '@/components/atoms/ServiceCard/ServiceCard';



export const ServiceSection = ({ bgColor = 'base', reverce, image, circle, data }: ServiceSectionProps) => {
	const cx = useCn(style);


	return (
		<section className={cx('service', bgColor)}>
			<AdaptiveContainer>
				<div className={cx('service__wrapper', reverce)}>
					<div className={cx('image-box')}>
						<Image
							src={image}
							className={cx('image-box__picture')}
							alt="Picture of the author"
							width={421}
							height={600}
							loading='lazy'
						/>
					</div>

					<ServiceCard {...data} />
					<div className={cx('image-box')}>
						<Image
							src={circle}
							className={cx('image-box__ircle')}
							alt="Picture of the author"
							loading='lazy'
							width={282}
							height={282}
						/>
					</div>
				</div>
			</AdaptiveContainer>
		</section>
	)
}
