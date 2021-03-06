import { useState, useEffect } from 'react';
import { CurrenciesStore } from '../domain/stores';
import { useAppContext } from '../contexts/AppContext';

export function useCurrenciesStore() {
    const btApp = useAppContext();
    const [store, setStore] = useState<CurrenciesStore>();

    useEffect(() => {
        async function fetchStore () {
            setStore(await btApp.getCurrenciesStore());
        }
        fetchStore();
    }, [btApp]);

    return store;
}