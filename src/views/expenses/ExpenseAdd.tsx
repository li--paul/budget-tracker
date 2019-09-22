import * as React from "react";
import { RouteComponentProps } from "react-router";
import { HeaderNotifierProps } from "../../routes";
import { Expense } from "../../interfaces";
import { goBack } from "../../domain/utils/goBack";
import { BudgetPath } from "../../domain/paths/BudgetPath";
import { DateDay } from "../../domain/DateDay";
import { uuid } from "../../domain/utils/uuid";
import { useBudgetModel } from "../../hooks/useBudgetModel";
import { useCurrentCountry } from "../../hooks/useCurrentCountry";
import { CloseButtonHistory } from "../../components/buttons/CloseButton";
import { ExpenseForm } from "../../components/expenses/ExpenseForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useAppContext } from "../../contexts/AppContext";

interface ExpenseViewProps extends HeaderNotifierProps,
    RouteComponentProps<{ budgetId: string }> { }

export const ExpenseAdd: React.FC<ExpenseViewProps> = (props) => {
    
    const btApp = useAppContext();

    const {budgetId} = props.match.params;
    const {onActions, onTitleChange, history} = props;
    const budgetUrl = new BudgetPath(budgetId);
    const budgetModel = useBudgetModel(budgetId);
    const currentCountry = useCurrentCountry();
    const [currency, setCurrency] = React.useState();

    // TODO these should be called only once
    const identifier = uuid();
    const now = Date.now();
    
    React.useEffect(() => {
        async function initCurrency () {
            const store = await btApp.getCurrenciesStore();
            const lastCurrency = store.lastCurrencyUsed;
            if (lastCurrency) {
                setCurrency(lastCurrency);
            }
            if (currentCountry) {
                const currencyFromCountry = await store.getFromCountry(currentCountry);
                if (currencyFromCountry && lastCurrency !== currencyFromCountry) {
                    setCurrency(currencyFromCountry);
                }
            }
   
        }
        initCurrency();
    }, [currentCountry, btApp]);

    React.useEffect(() => {
        if (budgetModel && currency === undefined) {
            setCurrency(budgetModel.info.currency);
        }
    }, [budgetModel, currency]);

    React.useEffect(()=> {
        onTitleChange('Add expense');
        onActions([<CloseButtonHistory history={history} key='close-button'/>]);
        return function () {
            onActions(null); 
        }
        // eslint-disable-next-line
    }, []);

    const handleSubmit = async (expenses: Expense[]) => {
        goBack(
            props.history, 
            budgetUrl.pathExpensesByDay(DateDay.fromTimeMs(expenses[0].when)));
        
    }

    if (budgetModel) {
        return (
            <ExpenseForm
                amount={0}
                amountBaseCurrency={0}
                budgetId={budgetId}
                categoryId={''}
                identifier={identifier}
                baseCurrency={budgetModel.info.currency} 
                countryCode={currentCountry || 'ES'}
                currency={currency}
                when={now}
                onSubmit={handleSubmit}
                />
        );
    } else {
        return <CircularProgress/>;
    }

   
}

export default ExpenseAdd;
