import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';

import { IconSearch } from './Filter.styled';

const filterInputId = nanoid();

export const Filter = ({ onChange }) => {
  const handleFilterChange = e => {
    onChange(e.target.value.trim());
  };

  return (
    <FilterBox>
      <IconSearch size={20} />
      <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
      <FilterInput
        id={filterInputId}
        type="text"
        name="filter"
        placeholder="Search"
        onChange={handleFilterChange}
      />
    </FilterBox>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
