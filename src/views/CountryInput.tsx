import * as React from 'react';
import { countriesStore, CountryEntry } from '../stores/CountriesStore';
import { TextInput } from './TextInput';

interface CountryInputProps {
    onCountryChange: (countryCode: string) => void;
    selectedCountry: string;
}

export const CountryInput: React.FC<CountryInputProps> = (props) => {

    const [country, setCountry] = React.useState(props.selectedCountry);
    const [countries, setCountries] = React.useState<CountryEntry[]>([]);

    React.useEffect(() => {
        const initCountries = async () => {
            const countries = await countriesStore.getCountries();
            setCountries(countries);
        }
        initCountries();
    }, []);

    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
        props.onCountryChange(e.target.value);
    }

    return (<TextInput
        label='Country'
        onChange={handleCountryChange}
        value={country||props.selectedCountry}
        select
        required 
        SelectProps={{ native: true }} >
        {
            countries
                .map(c => (
                    <option 
                        key={`country-option-${c.code}`} 
                        value={c.code}>
                        {c.name}
                    </option>))}
    </TextInput>);
}

export default CountryInput;