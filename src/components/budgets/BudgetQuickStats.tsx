import * as React from 'react';
import { Link } from 'react-router-dom';
import { VersusInfo } from '../VersusInfo';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useLocalization } from '../../hooks/useLocalization';

interface BudgetQuickStatsProps {
    totalBudget: number,
    totalSpent: number,
    totalDays: number,
    passedDays: number,
    expectedDailyAverage: number,
    dailyAverage?: number,
    urlStats?: string;
    urlOut?: string;
}

const spacing = '0.5rem';

const ActionButton: React.FC<{url: string}> = ({url, children}) => (
     <Button
        size='small'
        component={Link}
        color='primary'
        to={url}>
        {children}
    </Button>
);

export const BudgetQuickStats: React.FC<BudgetQuickStatsProps> = (props) => {
    const loc = useLocalization();
    
    return <Card style={{ marginBottom: '1rem' }}>
        <CardContent>
            <VersusInfo
                total={props.totalBudget}
                spent={props.totalSpent}
                title={loc.get('Spent')} />
            <Box marginTop={spacing}>
                <VersusInfo
                    total={props.totalDays}
                    spent={props.passedDays}
                    title={loc.get('Days')} /></Box>
            {props.dailyAverage !== undefined &&
                <Box marginTop={spacing}>
                    <VersusInfo
                        total={props.expectedDailyAverage}
                        spent={props.dailyAverage}
                        title={loc.get('Daily Average')} /></Box>}
        </CardContent>
        <CardActions>
            { props.urlStats && <ActionButton url={props.urlStats}>
                {loc.get('More Stats')}
            </ActionButton> }
            { props.urlOut && <ActionButton url={props.urlOut}>
                {loc.get('Expenses Out')}
            </ActionButton> }
        </CardActions>
    </Card>;
}