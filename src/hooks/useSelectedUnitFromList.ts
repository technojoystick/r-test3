import * as React from 'react';
import {TListUnit} from "../types/list";

export function useSelectedUnitFromList(items: Array<TListUnit>): {
    readonly activeItem: TListUnit,
    readonly isLastItem: boolean,
    readonly handleNext: () => void,
} {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const activeItem = React.useMemo(() => {
        return items[activeIndex];
    }, [items, activeIndex]);

    const handleNext = React.useCallback(() => {
        setActiveIndex((activeIndex) => activeIndex + 1);
    }, []);

    const isLastItem: boolean = activeIndex + 1 === items.length;

    return {
        activeItem,
        isLastItem,
        handleNext,
    }
}
