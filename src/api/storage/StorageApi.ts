import { ExpensesMap, BudgetsMap, Budget, Expense, Categories, Category, ExportDataSet } from "../../interfaces";

export interface StorageApi {
    getBudgets(): Promise<BudgetsMap>;
    getExpenses(budgetId: string): Promise<ExpensesMap>;
    saveBudget(budget: Budget, timestamp?: number): Promise<void>;
    deleteBudget(budgetId: string, timestamp?: number): Promise<void>;
    saveExpenses(budgetId: string, expenses: Expense[], timestamp?: number): Promise<void>;
    deleteExpense(budgetId: string, expenseId: string, timestamp?: number): Promise<void>;

    getCategories(): Promise<Categories>;
    saveCategory(category: Category, timestamp?: number): Promise<void>;
    saveCategories(categories: Categories,timestamp?: number): Promise<void>;

    import(data: ExportDataSet): Promise<void>;
    export(): Promise<ExportDataSet>;
}

export interface AppStorageApi extends StorageApi {
    initRemote (remotePromise?: Promise<StorageApi|undefined>): Promise<StorageApi|undefined>;
}

export interface SubStorageApi extends StorageApi {
    getLastTimeSaved(): Promise<number>;
    setLastTimeSaved(timestamp: number): Promise<void>;
}
