import { ServiceSectionProps } from '../ServiceSection/service.type'
import { ServiceSection } from '../ServiceSection/ServiceSection'




const data: ServiceSectionProps[] = [
	{
		image: '/image/service1.png',
		circle: '/image/circle1.png',
		bgColor: 'ligth',
		data: {
			labelCard: 'Услуги',
			textCard: 'это не косметическая процедура, это способ улучшитьнастроение и повысить самооценку это не косметическаяпроцедура,это способ улучшить настроение и повысить самооценку',
			btnLabel: 'Хочу на ноготочки',
		}
	},
	{
		image: '/image/service2.png',
		circle: '/image/circle2.png',
		reverce: 'reverce',
		data: {
			labelCard: 'Обучение',
			textCard: 'это не косметическая процедура, это способ улучшитьнастроение и повысить самооценку это не косметическаяпроцедура,это способ улучшить настроение и повысить самооценку',
			btnLabel: 'Хочу на обучение',
		}
	},
	{
		image: '/image/service3.png',
		circle: '/image/circle3.png',
		bgColor: 'ligth',
		data: {
			labelCard: 'Вакансии',
			textCard: 'это не косметическая процедура, это способ улучшитьнастроение и повысить самооценку это не косметическаяпроцедура,это способ улучшить настроение и повысить самооценку',
			btnLabel: 'Хочу в команду',
		}
	}
]


export const LayotServices = () => {
	return (
		data.map(d => (
			<ServiceSection {...d} />
		))

	)
}
