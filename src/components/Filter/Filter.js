import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, Label } from './Filter.styled';
import { updateFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  return (
    <Label>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contact by name"
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </Label>
  );
};
