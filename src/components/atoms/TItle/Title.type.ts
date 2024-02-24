import type { ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps {
    levet?: HeadingLevel;
    classNames?: string;
    children?: ReactNode;
}
