import cnBind from 'classnames/bind';

export const useCn = (styles: Record<string, string>) => {
    const cx = cnBind.bind(styles);

    return cx;
};
