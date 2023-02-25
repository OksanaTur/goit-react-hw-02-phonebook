import propTypes from 'prop-types';
import { FormInput } from 'components/PhonebookForm/Phonebook.styled';
import { FilterBox, FilterInput } from './PhonebookFilter.styled';

export const PhonebookFilter = ({ filter, onFilter }) => {
    return (
        <FilterBox>
            <FormInput htmlFor='filter'>Find contacts by name</FormInput>
            <div>
                <FilterInput
                            type="text"
                            name="filter"
                            value = {filter}
                            onChange = {onFilter}
                          /></div>
                        
        </FilterBox>
    )
}

PhonebookFilter.propTypes = {
    onFilter: propTypes.func.isRequired,
    filter: propTypes.string.isRequired,
}