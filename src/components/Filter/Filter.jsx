import { FilterContainer, Input } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { getStatusFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilter = evt => {
    dispatch(setStatusFilter(evt.target.value));
  };
  return (
    <FilterContainer>
      <h2>Finde contact</h2>
      <label htmlFor="">
        <Input type="text" value={filter} onChange={handleFilter} />
      </label>
    </FilterContainer>
  );
};
