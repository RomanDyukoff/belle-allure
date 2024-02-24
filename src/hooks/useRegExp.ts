import { useEffect, useState } from 'react';

export const useRegExp = (value: string): boolean => {
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        /^((\+375)+([0-9]){9})$/.test(value.trim()) || Number.isNaN(+value) ? setError(true) : setError(false);
    }, [value]);

    return error;
};
