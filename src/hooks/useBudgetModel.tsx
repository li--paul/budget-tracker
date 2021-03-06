import { useState, useEffect } from 'react';
import { BudgetModel } from '../domain/BudgetModel';
import { useBudgetsStore } from './useBudgetsStore';
import { BudgetsStore } from '../domain/stores';

export function useBudgetModel(budgetId: string) {
    const store = useBudgetsStore();
    const [budgetModel, setBudgetModel] = useState<BudgetModel>();

    useEffect(() => {
        async function fetchBudget (store: BudgetsStore) {
            setBudgetModel(await store.getBudgetModel(budgetId));
        }
        
        store ? fetchBudget(store) : setBudgetModel(undefined);
    }, [budgetId, store]);

    return budgetModel;
}