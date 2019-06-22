import * as React from 'react';
import { Category } from '../interfaces';
import { uuid } from '../utils';
import CategoryInput from './CategoryInput';
import { SaveButtonFab } from './buttons';

interface CategoryFormProps {
    onSubmit: (category: Category) => void,
    category?: Category;
}

export const CategoryForm: React.FC<CategoryFormProps> = (props) => {

    const [category, setCategory] = React.useState<Category>(
        props.category ||
        {name: '', icon: 'Label', id: uuid()});
    
    const handleSave = (e: React.SyntheticEvent) => {
        e.preventDefault();
        props.onSubmit(category);
    }
    
    return (
        <form onSubmit={handleSave}>
            <CategoryInput 
                icon={category.icon} 
                name={category.name} 
                id={category.id} 
                onChange={setCategory}
                />
            <SaveButtonFab type='submit' color='primary' disabled={category.name === ''} />
        </form>);
}