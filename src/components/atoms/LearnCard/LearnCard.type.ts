import type { SocialsType } from '@/components/organisms/CourseSection/CourseSection.type';

export interface LearnCardType {
    title: string;
    text: string;
    price: string | number;
    duration: string | number;
    socials?: SocialsType[];
}
