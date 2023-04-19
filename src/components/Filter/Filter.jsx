import { FilterContainer, Input } from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(setStatusFilter(evt.target.value));
  };
  return (
    <FilterContainer>
      <h2>Finde contact</h2>
      <label htmlFor="">
        <Input type="text" onChange={handleFilter} />
      </label>
    </FilterContainer>
  );
};
