import * as React from 'react';
import { HeaderNotifierProps } from '../routes';
import { RouterProps } from 'react-router';
import { ImportForm } from '../components/ImportForm';
import { ExportDataSet } from '../interfaces';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import { SubHeader } from '../components/expenses/SubHeader';
import { ExportCard } from '../components/ExportCard';
import { btApp } from '../BudgetTracker';
import { CloseButton } from '../components/buttons/CloseButton';

const ImportExport = (props: HeaderNotifierProps&RouterProps) => {

    const [data, setData] = React.useState<Partial<ExportDataSet>>();
    const {history, onActions, onTitleChange} = props;

    React.useLayoutEffect(() => {
        onTitleChange('Import & Export');
        onActions(<CloseButton history={history}/>);
        return function () {
            onTitleChange('');
            onActions(undefined);
        }
    // eslint-disable-next-line
    }, []);
    
    return (
        <React.Fragment>
        <Card style={{marginBottom: '1rem'}}>
            <CardHeader title='Import JSON'></CardHeader>
            { data &&  <CardContent>
                <ImportedElementInfo name='Budgets' elements={data.budgets}/>
                <ImportedElementInfo name='Expenses' elements={data.expenses}/>
                <ImportedElementInfo name='Categories' elements={data.categories}/>
            </CardContent> }
            <CardActions>
                <ImportForm onImportedData={setData}/>
            </CardActions>
        </Card>
        <ExportCard fileName='exportedData' fetchDataPromise={btApp.export()}/>
        </React.Fragment>
       
    );

}

const ImportedElementInfo: React.FC<{elements?:{[k: string]: any}, name: string}> = (props) => {
    const {elements, name} = props;
    if (elements) {
        return (
            <SubHeader leftText={Object.keys(elements).length} rightText={`${name} imported`} variant='body1' />
        );
    }
    return null;
}

export default ImportExport;