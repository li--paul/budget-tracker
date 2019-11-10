import { BudgetsStoreImpl } from "./BudgetsStoreImpl";
import { BudgetModelImpl } from "../BudgetModelImpl";
import { createBudget } from "../../__mocks__/createBudget";
import { createBudgetTrackerMock } from "../../__mocks__/budgetTracker";
import { createExpense } from "../../__mocks__/createExpense";
import { CategoriesMap } from "../../api";
import { ExpenseModel } from "../ExpenseModel";
import { ExpensesYearMap } from "../ExpensesYearMap";


describe('Budget Model Creation', () => {
    let btApp = createBudgetTrackerMock();
    let store = new BudgetsStoreImpl(btApp);

    beforeEach(() => {
        btApp = createBudgetTrackerMock();
        store = new BudgetsStoreImpl(btApp);
    });

    it('Set first budget', async () => {

        const budgetInfo = createBudget();
        btApp.storage.getBudget.mockReturnValue(budgetInfo);

        await store.setBudget(budgetInfo);
        const observedModel = await store.getBudgetModel(budgetInfo.identifier);
        expect(observedModel).toStrictEqual(new BudgetModelImpl(budgetInfo));
    });

    it('Split expenses', async () => {

        const budgetInfo = createBudget();
        btApp.storage.getBudget.mockReturnValue(budgetInfo);
        btApp.getCategoriesStore.mockReturnValue({ 
            getCategories: () => ([]),
            setCategories: (categories: CategoriesMap) => {}
        });
        btApp.storage.getBudgets.mockReturnValue({[budgetInfo.identifier]: budgetInfo});


        await store.setBudget(budgetInfo);

        const expense = {
            ...createExpense('1', budgetInfo), 
            amount: 40, 
            amountBaseCurrency: 4, 
            splitInDays: 4};
        await store.setExpenses(budgetInfo.identifier, [expense]);

        const splitExpense = {...expense, amountBaseCurrency: 1, amount: 10, splitExpense: 1};
        const em = new ExpenseModel({...splitExpense});
        const expectedDates = [
            em.date.clone(),
            em.date.clone().addDays(1),
            em.date.clone().addDays(2),
            em.date.clone().addDays(3),
        ];
        const expectedGroups = new ExpensesYearMap();
        expectedDates.forEach(
            dateDay => expectedGroups.addExpense( 
                new ExpenseModel({...splitExpense, when: dateDay.timeMs})));

        const bm = await store.getBudgetModel(budgetInfo.identifier);
        expect(expectedGroups).toStrictEqual(bm.expenseGroups);

        const observedByDay = expectedDates.map(d => bm.getTotalExpenses(d.year, d.month, d.day));
        expect(observedByDay).toStrictEqual([1,1,1,1]);
    });

    it('Export data directly loaded from local storage', async () => {
        
        btApp.getCategoriesStore.mockReturnValue({ 
            getCategories: () => ([]),
            setCategories: (categories: CategoriesMap) => {}
        });
        const budgetInfo = createBudget();
        const budgetInfo2 = createBudget({identifier: '2'});
        const budgets = {
            [budgetInfo.identifier]: budgetInfo,
            [budgetInfo2.identifier]: budgetInfo2
        };
        const expenses = [
            createExpense('1', budgetInfo), 
            createExpense('2', budgetInfo), 
            createExpense('3', budgetInfo2)];
        btApp.storage.getBudgets.mockReturnValue(budgets);
        btApp.storage.getBudget.mockImplementation((id: string) => budgets[id]);
        btApp.storage.getExpenses.mockReturnValue(expenses);

        const exported = await store.export();
        expect(exported.budgets).toStrictEqual(budgets);
        expect(Object.values(exported.expenses)).toStrictEqual(expenses);
    });
});