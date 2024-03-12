import type { LearnCardType } from '@/components/atoms/LearnCard/LearnCard.type';

export type SocialsType = {
    link: string;
    social: string;
};

export interface CourseSectionPropsType {
    title: string;
    subtitle?: string;
    dataCards: LearnCardType[];
}
