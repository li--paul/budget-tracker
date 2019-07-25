import * as React from "react";
import { YMD } from "../../interfaces";
import { monthToString, round } from "../../utils";
import { BudgetModel } from "../../domain/BudgetModel";
import { SubHeader } from "./SubHeader";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { CalendarDay } from "./CalendarDay";

interface CalendarMonthProps {
    days: number[];
    year: number;
    month: number;
    onDaySelected: (day: YMD) => void;
    budgetModel: BudgetModel;
}

export const CalendarMonth: React.FC<CalendarMonthProps> = (props) => {
    const {year, month, budgetModel, days} = props;

    return (
    <Card key={`expenses-month-${year}-${month}`} style={{marginBottom: '1rem'}}>
            <CardHeader 
                title={<SubHeader 
                    leftText={monthToString(new Date(2000, props.month, 1))}
                    rightText={round(budgetModel.getTotalExpensesByMonth(year, month), 0)} 
                    variant='h6'/>} />                
            <CardContent>
                {
                    Object.values(days)
                    .map((day) => (
                        <CalendarDay 
                            onDaySelected={props.onDaySelected}
                            expected={budgetModel.expectedDailyExpensesAverage}
                            total={ budgetModel.getTotalExpensesByDay(year, month, day) }
                            budgetId={budgetModel.identifier}
                            date={{year, month, day}}
                            key={`calendar-day-${year}-${month}-${day}`} />
                    ))
                }
            </CardContent>
        </Card >
    );
}
