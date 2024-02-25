import type { ProfItemType } from './ProfItem.type';

export const ProfItem = ({ className, point, title }: ProfItemType): JSX.Element => {
    return (
        <div className={className}>
            <span>{point}</span>
            <p>{title}</p>
        </div>
    );
};
