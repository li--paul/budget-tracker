import * as React from "react";
import { YMD } from "../../interfaces";
import { BudgetModel } from "../../domain/BudgetModel";
import { CalendarYear } from "./CalendarYear";

interface ExpensesCalendarProps {
    budgetModel: BudgetModel;
    onDaySelected: (day: YMD) => void;
}

export const ExpensesCalendar: React.FC<ExpensesCalendarProps> = (props) => {

    const {budgetModel} = props;

    return <React.Fragment>
        {
            Object.values(budgetModel.years)
                .map(year => (
                    <CalendarYear 
                        budgetModel={budgetModel}
                        key={`calendar-year-${year}`}
                        year={year} 
                        onDaySelected={props.onDaySelected} />
                ))
        }
    </React.Fragment>;
}
