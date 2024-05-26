import { ServiceCardProps } from '@/components/atoms/ServiceCard/servicecard.type';
import { StaticImageData } from 'next/image';

type BgColorTyle = 'base' | 'ligth';

export interface ServiceSectionProps {
    image: string;
    circle: string;
    bgColor?: BgColorTyle;
    reverce?: 'reverce';
    data: ServiceCardProps;
}
