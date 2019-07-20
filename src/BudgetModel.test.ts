import { BudgetModel, DAY_MS } from "./BudgetModel";
import { uuid } from "./utils";
import { Expense, CurrencyRates } from "./interfaces";

function createBudget (currency: string, days: number, total: number) {
    return { 
        currency: currency,
        from: new Date().getTime(),
        to: new Date().getTime() + (DAY_MS * days),
        identifier: uuid(),
        name: 'Test',
        total: total
    };
}

function createExpense (id: string) {
    return {
        amount: 100,
        amountBaseCurrency: 98,
        categoryId: 'Category',
        countryCode: 'ES',
        currency: 'USD',
        description: 'whatever description',
        identifier: id,
        when: new Date().getTime()
    };
}

it('Budget model creation without expenses', async () => {
    const bm = new BudgetModel(createBudget('EUR', 30, 1000), {});
    expect(await bm.getTotalExpenses()).toBe(0);
    expect(bm.expectedDailyExpensesAverage).toBe(33);
    expect(bm.expenseGroups).toStrictEqual({});
    expect(await bm.getAverage()).toBe(0);
    expect(bm.getExpense('whatever')).toBe(undefined);
    expect(await bm.getTotalExpenses()).toBe(0);
    expect(bm.numberOfExpenses).toBe(0);
    expect(bm.days).toBe(1);
    expect(bm.totalDays).toBe(30);
});


it('Budget model creation, no expenses, add them later', async () => {
    const budget = createBudget('EUR', 30, 1000);
    const bm = new BudgetModel(budget, {});
    const expenseDate1 = new Date(budget.from);
    const expenseDate2 = new Date(new Date().getTime() + DAY_MS);
    const expense1: Expense = {
        amount: 100,
        amountBaseCurrency: 98,
        categoryId: 'Category',
        countryCode: 'ES',
        currency: 'USD',
        description: 'whatever description',
        identifier: '1',
        when: expenseDate1.getTime(),
    };
    const expense2 = {...expense1,
        amount: 2,
        amountBaseCurrency: 2,
        currency: 'EUR',
        when: expenseDate2.getTime(),
        identifier: '2',
    };

    bm.setExpense(expense1);
    bm.setExpense(expense2);

    const expectedGroups = {
        [expenseDate1.getFullYear()]: { 
            [expenseDate1.getMonth()]: { 
                [expenseDate1.getDate()]: {
                    [expense1.identifier]: expense1
                },
                [expenseDate2.getDate()]: {
                    [expense2.identifier]: expense2
                } 
            }
        }
    };

    expect(bm.expenseGroups).toStrictEqual(expectedGroups);

    expect(await bm.getTotalExpenses()).toBe(98);
    expect(bm.expectedDailyExpensesAverage).toBe(33);

    expect(await bm.getAverage()).toBe(98);
    expect(bm.getExpense(expense1.identifier)).toBe(expense1);
    expect(bm.getExpense(expense2.identifier)).toBe(expense2);
    expect(await bm.getTotalExpenses()).toBe(98);
    expect(bm.numberOfExpenses).toBe(2);
    expect(bm.days).toBe(1);
    expect(bm.totalDays).toBe(30);

    const expense2Updated = {...expense2, when: new Date().getTime()};
    // change the date of the expense2 so it is added to calculations
    bm.setExpense(expense2Updated);
    expect(await bm.getAverage()).toBe(100);
    expect(await bm.getTotalExpenses()).toBe(100);

    // Modify budget dates to check that average is recalculated
    bm.setBudget({...budget, from: budget.from - DAY_MS, to: budget.to + DAY_MS});
    expect(bm.days).toBe(2);
    expect(bm.totalDays).toBe(32);
    expect(await bm.getAverage()).toBe(50);
    expect(await bm.getTotalExpenses()).toBe(100);
    expect(bm.getExpense('1')).toBe(expense1);
    expect(bm.getExpense('2')).toBe(expense2Updated);

    const expectedGroupsUpdated = {
        [expenseDate1.getFullYear()]: { 
            [expenseDate1.getMonth()]: { 
                [expenseDate1.getDate()]: {
                    [expense1.identifier]: expense1,
                    [expense2Updated.identifier]: expense2Updated
                },
                [expenseDate2.getDate()]: {}
            }
        }
    };

    expect(bm.expenseGroups).toStrictEqual(expectedGroupsUpdated);
});

it('Remove expense', async () => {
    const expense1 = createExpense('1');
    const expense2 = {...expense1, identifier: '2'};
    const expense3 = {...expense1, identifier: '3', when: new Date().getTime() + DAY_MS * 3};
    const expense4 = {...expense1, identifier: '4', amountBaseCurrency: 55};
    const bm = new BudgetModel(
        createBudget('EUR', 30, 1000), 
        {
            '1': expense1,
            '2': expense2,
            '3': expense3,
            '4': expense4,
        });
    expect(await bm.getTotalExpenses()).toBe(
        expense1.amountBaseCurrency + 
        expense2.amountBaseCurrency + 
        expense4.amountBaseCurrency);

    expect(bm.deleteExpense('6')).toBe(false);
    expect(bm.deleteExpense('2')).toBe(true);
    expect(await bm.getTotalExpenses()).toBe(
        expense1.amountBaseCurrency + 
        expense4.amountBaseCurrency);
    
    expect(bm.deleteExpense('3')).toBe(true);
    expect(await bm.getTotalExpenses()).toBe(
        expense1.amountBaseCurrency + 
        expense4.amountBaseCurrency);
});


it('Modify expense amount', async () => {
    const expense1 = createExpense('1');
    const expense2 = {...expense1, identifier: '2'};
    const bm = new BudgetModel(
        createBudget('EUR', 30, 1000), 
        {
            '1': expense1,
            '2': expense2
        });

    const modifiedExpense2 = {
        ...expense2, 
        amountBaseCurrency: 10
    };
    bm.setExpense(modifiedExpense2);
    expect(await bm.getTotalExpenses()).toBe(
        expense1.amountBaseCurrency + 
        modifiedExpense2.amountBaseCurrency);
    expect(bm.getExpense('2').amountBaseCurrency)
        .toBe(modifiedExpense2.amountBaseCurrency);

    const expense1Date = new Date(expense1.when);
    const expense2ModifiedDate = new Date(modifiedExpense2.when);

    const expenseGroups = {
        [expense1Date.getFullYear()]: {
            [expense1Date.getMonth()]: {
                [expense1Date.getDate()]: {
                    [expense1.identifier]: expense1
                }    
            }
        }
    }

    expenseGroups[expense2ModifiedDate.getFullYear()]
        [expense2ModifiedDate.getMonth()]
        [expense2ModifiedDate.getDate()]
        [modifiedExpense2.identifier] = modifiedExpense2;

    expect(bm.expenseGroups).toStrictEqual(expenseGroups);

    const modifiedExpense2Date = {
        ...expense2, 
        when: new Date().getTime() + DAY_MS * 10
    };
    bm.setExpense(modifiedExpense2Date);
    expect(await bm.getTotalExpenses()).toBe(expense1.amountBaseCurrency);
    expect(bm.getExpense('2').amountBaseCurrency)
        .toBe(modifiedExpense2Date.amountBaseCurrency);

    delete expenseGroups[expense2ModifiedDate.getFullYear()]
        [expense2ModifiedDate.getMonth()]
        [expense2ModifiedDate.getDate()]
        [modifiedExpense2.identifier];

    const expense2ModifiedDate2 = new Date(modifiedExpense2Date.when);
    expenseGroups
        [expense2ModifiedDate2.getFullYear()]
        [expense2ModifiedDate2.getMonth()]
        [expense2ModifiedDate2.getDate()] = {
            [modifiedExpense2Date.identifier]: modifiedExpense2Date
        };
        
    expect(bm.expenseGroups).toStrictEqual(expenseGroups);

});

function getYMD(expense: Expense){
    const date = new Date(expense.when);
    return {y: date.getFullYear(), m: date.getMonth(), d: date.getDate()};
}

it('Check groups are created properly when model is initialized from constructor', async () => {
    const budget = createBudget('EUR', 30, 1000);
    const expense1: Expense = {
        amount: 100,
        amountBaseCurrency: 98,
        categoryId: 'Category',
        countryCode: 'ES',
        currency: 'USD',
        description: 'whatever description',
        identifier: '1',
        when: new Date().getTime()
    };
    const expense2 = {...expense1,
        amount: 2,
        amountBaseCurrency: 2,
        currency: 'EUR',
        when: (expense1.when + (DAY_MS * 2)),
        identifier: '2',
    };
    const bm = new BudgetModel(
        budget, 
        {
            [expense1.identifier]: expense1, 
            [expense2.identifier]: expense2, 
        });

    const {y, m, d} = getYMD(expense1);

    const expenseGroups = {
        [y]: {[m]: {[d]: {[expense1.identifier]: expense1}}}
    };

    const dateE2 = getYMD(expense2);
    expenseGroups[dateE2.y][dateE2.m][dateE2.d] = {
        [expense2.identifier]: expense2};

    expect(bm.expenseGroups).toStrictEqual(expenseGroups);

    expect(await bm.getTotalExpenses()).toBe(98);
    expect(bm.expectedDailyExpensesAverage).toBe(33);

    expect(await bm.getAverage()).toBe(98);
    expect(bm.getExpense(expense1.identifier)).toBe(expense1);
    expect(bm.getExpense(expense2.identifier)).toBe(expense2);
    expect(await bm.getTotalExpenses()).toBe(98);
    expect(bm.numberOfExpenses).toBe(2);
    expect(bm.days).toBe(1);
    expect(bm.totalDays).toBe(30);

});

it('Modify budget base currency ', async () => {
    const info = createBudget('EUR', 30, 1000);
    const expense1 = {
        ...createExpense('1'), 
        currency: 'USD', 
        amount: 12, 
        amountBaseCurrency: 10};
    const expense2 = {
        ...expense1, 
        identifier: '2', 
        currency: 'BTH', 
        amount: 350, 
        amountBaseCurrency: 10};
    const expense3 = {
        ...expense1, 
        identifier: '3', 
        currency: 'EUR', 
        amount: 1, 
        amountBaseCurrency: 1};
    const bm = new BudgetModel(
        info, 
        {
            '1': expense1,
            '2': expense2,
            '3': expense3
        });

    const rates: CurrencyRates = {
        base: 'USD',
        rates: { 'EUR': 0.8, 'BTH': 35 },
        date: new Date()
    };
    expect(await bm.getTotalExpenses()).toBe(21);

    await bm.setBudget({...info, currency: 'USD'}, rates);
    expect(await bm.getTotalExpenses()).toBe(23.25);
});


it('Modify budget base currency not passing currency rates. Throws error.', async () => {
    const info = createBudget('EUR', 30, 1000);
    const expense1 = {
        ...createExpense('1'), 
        currency: 'USD', 
        amount: 12, 
        amountBaseCurrency: 10};
    const expense2 = {
        ...expense1, 
        identifier: '2', 
        currency: 'BTH', 
        amount: 350, 
        amountBaseCurrency: 10};
    const expense3 = {
        ...expense1, 
        identifier: '3', 
        currency: 'EUR', 
        amount: 1, 
        amountBaseCurrency: 1};
    const bm = new BudgetModel(
        info, 
        {
            '1': expense1,
            '2': expense2,
            '3': expense3
        });
    await expect(bm.setBudget({...info, currency: 'USD'}))
        .rejects
        .toThrowError('Required conversion rates to update budget currency');

    const rates: CurrencyRates = {
        base: 'USD',
        rates: { 'BTH': 35 },
        date: new Date()
    };
    await expect(bm.setBudget({...info, currency: 'USD'}, rates))
        .rejects
        .toThrowError('Cannot get currency exchange rate from USD to EUR');
});

it('Returns expenses and info attributes', async () => {
    const info = createBudget('USD', 180, 56000);
    const expense1 = {...createExpense('1')};
    const expense2 = {...expense1, identifier: '2', currency: 'ARS', amount: 3040, amountBaseCurrency: 10};
    const expense3 = {...expense1, identifier: '3', currency: 'EUR', amount: 101, amountBaseCurrency: 105.2};
    const expenses = {
        '1': expense1,
        '2': expense2,
        '3': expense3
    }
    const bm = new BudgetModel(info, expenses);

    expect(bm.info).toStrictEqual(info);
    expect(bm.expenses).toStrictEqual(expenses);

    const updatedInfo = {...bm.info, total: 20220};
    const expense0 = {...expense3, identifier: '0', currency: 'BTH', categoryId: 'General'};
    const updatedExpenses = {...expenses, '0': expense0};
    bm.setExpense(expense0);
    bm.setBudget(updatedInfo);

    expect(bm.info).toStrictEqual(updatedInfo);
    expect(bm.expenses).toStrictEqual(updatedExpenses);

    await expect(bm.setBudget({...updatedInfo, identifier: 'invalid'}))
        .rejects
        .toThrowError('Cannot update budget information with different IDs');

});

it('Sets Expense without base amount throws error', () => {
    const info = createBudget('USD', 180, 56000);
    const expense1 = {...createExpense('1')};
    delete expense1['amountBaseCurrency'];
    const expenses = {
        '1': expense1,
    }

    const bm = new BudgetModel(info, {});
    try {
        bm.setExpense(expense1);
        fail('Error should have happened');
    } catch (error) {
        expect(error).toBeTruthy();
    }

    try {
        new BudgetModel(info, expenses);
        fail('Error should have happened');
    } catch (error) {
        expect(error).toBeTruthy();
    }
});