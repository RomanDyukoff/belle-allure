import { useCn } from '@/hooks';

import styles from './card.module.scss';
import { Title } from '../TItle/Title';


type TextCardType = {
	point: string;
	title: string;
	text: string;
	className?: string;
}

export const TextCard = ({ point, title, text, className }: TextCardType) => {
	const cx = useCn(styles)
	return (
		<div className={cx('text-card', className)}>
			<div className={cx('text-card__wrapper')}>
				<span className={cx('text-card__point')}>{point}</span>
				<Title classNames={cx('text-card__title')} level='h4'>
					{title}
				</Title>
				<p className={cx('text-card__text')}>
					{text}
				</p>
			</div>
		</div>
	)
}
