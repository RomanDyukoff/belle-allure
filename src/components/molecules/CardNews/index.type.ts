export interface CardNewsType {
    title: string;
    caption: string;
    slog: string;
}

export interface CardNewsGeneralType {
    className?: string;
    cur: number;
    newsProps: CardNewsType;
}
