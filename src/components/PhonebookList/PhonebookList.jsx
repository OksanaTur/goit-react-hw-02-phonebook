import propTypes from 'prop-types';
import { PhonebookItem } from 'components/PhonebookItem/PhonebookItem';
import { List } from './PhonebookList.styled';

export const PhonebookList = ({ filterContacts, onDelete }) => {
    return (
        <List>
            {filterContacts().map(({ id, name, number }) => (
                <PhonebookItem
                    key={id}
                    name={name}
                    id={id}
                    number={number}
                    onDelete={onDelete}
                />
            ))}
        </List>
    )
}

PhonebookList.propTypes = {
    filterContacts: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired,
}