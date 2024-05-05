import { useCn } from '@/hooks';
import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';

import styles from './advantages.module.scss';
import { Title } from '@/components/atoms/TItle/Title';
import React from 'react';
import { FirstLetterStyle } from '@/components/atoms/FirstLetterStyle/FirstLetterStyle';
import { TextCard } from '@/components/atoms/TextCard/TextCard';
import Image, { StaticImageData } from 'next/image';
import image1 from '@/assets/images/card-image1.png';
import image2 from '@/assets/images/card-image2.png';

type DataTextCardType = {
	title: string;
	text: string;
}
type DataImageCardType = {
	image: StaticImageData;
}

type DataCardsType = DataTextCardType | DataImageCardType;

const dataCards: DataCardsType[] = [
	{
		title: 'Профессионально',
		text: 'Мастера с опытом от 4-х лет, регулярно проходят обучение. Только сертифицированные материалы и косметика'
	},
	{
		title: 'Качественно',
		text: 'Даем гарантию 14 дней на покрытие гель-лаком. Следим за выполнением стандартов работы'
	},
	{
		title: 'Безопасно',
		text: 'Мастера с опытом от 4-х лет, регулярно проходят обучение. Только сертифицированные материалы и косметика'
	},
	{
		title: 'Честно',
		text: 'Даем гарантию 14 дней на покрытие гель-лаком. Следим за выполнением стандартов работы'
	},
	{
		image: image1,
	},
	{
		image: image2,
	}
]

export const AdvantagesSection = (): JSX.Element => {
	const cx = useCn(styles);

	return (
		<section className={cx('advantages')}>
			<AdaptiveContainer>
				<div className={cx('advantages__wrapper')}>
					<Title classNames={cx('advantages__title')} level='h2'>
						<FirstLetterStyle text='Стандарты Работы' className={cx('first-latter')} />
					</Title>
					<div className={cx('cards')}>
						{
							dataCards.map((data, i) => {
								const isTexts = 'title' in data && 'text' in data;
								const isImage = 'image' in data;

								return isTexts ?
									<TextCard
										key={i}
										point={`0${i + 1}`}
										{...data}
									/> : isImage ?
										<div key={i} className={cx('card-image')}>
											<Image src={data.image} alt='image' />
										</div> : null

							})
						}
					</div>
				</div>
			</AdaptiveContainer>
		</section >
	)
}
