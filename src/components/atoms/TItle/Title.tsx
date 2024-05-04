import type { TitleProps } from '@/components/atoms/TItle/Title.type';

export const Title = ({ level = 'h1', classNames, children }: TitleProps): JSX.Element => {
    const Tag = level;

    return <Tag className={classNames}>{children}</Tag>;
};
