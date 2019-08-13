import * as React from 'react';


export function useDisabledNext<T>(item: T): {
    readonly disabledNext: boolean,
    readonly setDisabledNext: () => void,
} {
    const [disabledNext, setDisabledNext] = React.useState(true);

    React.useEffect(() => {
        setDisabledNext(true);
    }, [item]);

    return {
        disabledNext,
        setDisabledNext,
    }
}
