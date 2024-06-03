import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
// import styles from './style.module.scss';
import styles from './advantages.module.scss';
import image1 from '@/assets/images/card-image1.png';
import image2 from '@/assets/images/card-image2.png';
import { useCn } from '@/hooks';
import { FirstLetterStyle } from '@/components/atoms/FirstLetterStyle/FirstLetterStyle';
import { Title } from '@/components/atoms/TItle/Title';
import { TextCard } from '@/components/atoms/TextCard/TextCard';
import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';

type DataTextCardType = {
	title: string;
	text: string;
};
type DataImageCardType = {
	image: StaticImageData;
};

type DataCardsType = DataTextCardType | DataImageCardType | null;

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
		text: 'Мастера с опытом от 4-х лет, регулярно проходят обучение. Только сертифицированные материалы и косметика'
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
	},
	null,
	null,
	null
];

const shuffleArray = (array: DataCardsType[]) => {
	return array
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
};

export const AdvantagesSection = (): JSX.Element => {
	const [shuffledCards, setShuffledCards] = useState<DataCardsType[]>([]);
	const [animate, setAnimate] = useState(false);
	const cx = useCn(styles)

	useEffect(() => {
		setShuffledCards(shuffleArray(dataCards));

		const interval = setInterval(() => {
			setAnimate(true);
			setTimeout(() => {
				setShuffledCards(shuffleArray(dataCards));
				setAnimate(false);
			}, 1000);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	let textCardIndex = 1;

	return (
		<section className={cx('advantages')}>
			<AdaptiveContainer>
				<div className={cx('advantages__wrapper')}>
					<Title classNames={cx('advantages__title')} level="h2">
						<FirstLetterStyle text="Стандарты Работы" className={cx('first-latter')} />
					</Title>
					<div className={cx('cards')}>
						{shuffledCards.map((data, i) => {
							if (!data) {
								return <div key={i} className={cx('card-void', `${animate ? 'fadeOut' : 'fadeIn'}`)} />;
							}
							const isTextCard = 'title' in data && 'text' in data;
							const isImageCard = 'image' in data;

							return isTextCard ? (
								<TextCard
									className={cx('card', `${animate ? 'fadeOut' : 'fadeIn'}`)}
									key={i}
									point={`0${textCardIndex++}`}
									{...data}
								/>
							) : isImageCard ? (
								<div key={i} className={cx('card-image', `${animate ? 'fadeOut' : 'fadeIn'}`)}>
									<Image src={data.image} alt="image" />
								</div>
							) : null;
						})}
					</div>
				</div>
			</AdaptiveContainer>
		</section>
	);
};


