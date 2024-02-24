import { useState } from 'react';
import cnBind from 'classnames/bind';

import type { ISelectType } from '@/components/molecules/Select/Select.type';
import { useBooleanState } from '@/hooks/useBooleanState';

import styles from './style.module.scss';

const cx = cnBind.bind(styles);

export const Select = ({ tabsTitle, counter, handleAction }: ISelectType) => {
    const { value, toggleValue } = useBooleanState(false);
    const [option, setOption] = useState<string>(tabsTitle[counter]);
    const handleChange = (val: string, i: number) => {
        setOption(val);
        handleAction(i);
        toggleValue();
    };

    return (
        <div className={cx('select')}>
            <div className={cx('select-header')} onClick={toggleValue}>
                <span className={cx('select-title')}>{option}</span>
            </div>
            <div className={cx('select-options', value && 'isActiveOption')}>
                {tabsTitle.map((el, i) => (
                    <div
                        key={i}
                        onClick={() => handleChange(el, i)}
                        className={cx('select-option', counter === i && 'isActive')}
                    >
                        {el}
                    </div>
                ))}
            </div>
        </div>
    );
};
