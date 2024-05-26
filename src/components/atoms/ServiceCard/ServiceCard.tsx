import React from 'react'
import { Title } from '../TItle/Title'
import { Button } from '../Button/Button'
import { useCn } from '@/hooks'
import style from './servicecard.module.scss'
import { type ServiceCardProps } from './servicecard.type'

export const ServiceCard = ({ labelCard, textCard, btnLabel }: ServiceCardProps) => {
	const cx = useCn(style)

	return (
		<article className={cx('card')}>
			<div className={cx('card__content')}>
				<Title classNames={cx('card__title')} level='h2'>
					{labelCard}
				</Title>
				<div className={cx('card__text')}>
					{textCard}
				</div>
			</div>
			<Button classNames={cx('card__button')} label={btnLabel} />
		</article>
	)
}
