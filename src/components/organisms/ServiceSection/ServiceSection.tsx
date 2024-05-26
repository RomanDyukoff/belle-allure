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
					<Image
						src={image}
						className={cx('service__image')}
						width={421}
						height={600}
						alt="Picture of the author"
					/>
					<ServiceCard {...data} />
					<Image
						src={circle}
						className={cx('service__image-circle')}
						width={282}
						height={282}
						alt="Picture of the author"
					/>
				</div>
			</AdaptiveContainer>
		</section>
	)
}
