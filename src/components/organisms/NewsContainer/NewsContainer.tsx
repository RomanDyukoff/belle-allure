'use client';

import { memo, useState } from 'react';
import cnBind from 'classnames/bind';

import { AdaptiveContainer } from '@/components/atoms/AdaptiveContainer/AdaptivContainer';
import { Title } from '@/components/atoms/TItle/Title';
import type { CardNewsType } from '@/components/molecules/CardNews/index.type';
import { ListCardNews } from '@/components/organisms/ListCardNews/ListCardNews';

import styles from './index.module.scss';

const cx = cnBind.bind(styles);
const NewsContainer = memo(() => {
    const arr: CardNewsType[] = [
        { title: 'Новость 1', caption: 'Тут краткое описание новости', slog: 'Ну и тут какой-то маленький текс' },
        { title: 'Новость 2', caption: 'Тут краткое описание новости', slog: 'Ну и тут какой-то маленький текс' },
        { title: 'Новость 3', caption: 'Тут краткое описание новости', slog: 'Ну и тут какой-то маленький текс' },
        { title: 'Новость 4', caption: 'Тут краткое описание новости', slog: 'Ну и тут какой-то маленький текс' },
        { title: 'Новость 5', caption: 'Тут краткое описание новости', slog: 'Ну и тут какой-то маленький текс' },
    ];
    const [cur, setCur] = useState<number>(0);

    const handleIsNext = () => {
        setCur((prevState) => (prevState === arr.length - 3 ? arr.length - 3 : prevState + 1));
    };
    const handleIsPrev = () => {
        setCur((prevState) => (prevState === 0 ? 0 : prevState - 1));
    };

    return (
        <div className={cx('news__page')}>
            <AdaptiveContainer>
                <Title classNames={cx('news__page-title')} level='h2'>
                    Новости
                </Title>
                <div className={cx('news__page-list')}>
                    <div onClick={() => handleIsPrev()} className={cx('news__page-btn')}>
                        -
                    </div>
                    <ListCardNews
                        listCardNews={arr.slice(cur, cur + 3)}
                    // listCardNews={cur === 0 ? [...arr].slice(0, 3) : arr.filter((_, i) => i >= cur).slice(0, 3)}
                    />
                    <div onClick={() => handleIsNext()} className={cx('news__page-btn')}>
                        +
                    </div>
                </div>
            </AdaptiveContainer>
        </div>
    );
});
export { NewsContainer };
