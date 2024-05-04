import { useCn } from '@/hooks'
import styles from './welcome.module.scss';

import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { Title } from '@/components/atoms/TItle/Title';
import { Button } from '@/components/atoms/Button/Button';
import { WelcomeSectionType } from './welcomeSection.type';


const descriptionBlock = (text: string, className?: string, key?: number | string): JSX.Element => {
	return (
		<p key={key} className={className}>
			{text}
		</p>
	)
}

export const WelcomeSection = ({ image, title, description, btnName, btnVisible = true, }: WelcomeSectionType): JSX.Element => {
	const cx = useCn(styles);

	return (
		<section className={cx('welcome')} style={{ backgroundImage: `url(${image})` }}>
			<AdaptiveContainer>
				<div className={cx('welcome__wrapper')}>
					<article className={cx('content')}>
						<Title level='h1' classNames={cx('content__title')}>
							{title}
						</Title>
						{
							Array.isArray(description) ?
								description.map((text, i) => (
									descriptionBlock(text, cx('content__text'), i)
								)) :
								descriptionBlock(description, cx('content__text'))
						}
					</article>
					{btnVisible && <Button classNames={cx('welcome__button')} label={btnName || 'Записаться'} />}
				</div>
			</AdaptiveContainer>
		</section >
	)
}
