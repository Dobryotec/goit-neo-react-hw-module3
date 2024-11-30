import { useId } from 'react';

import { ISearchBoxProps } from './SearchBox.types';

import css from './SearchBox.module.css';

const SearchBox: React.FC<ISearchBoxProps> = ({ searchName, updateSearchName }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => updateSearchName(e.target.value);
  const searchNameId = useId();
  return (
    <div className={css['search-block']}>
      <label className={css["search-title"]} htmlFor={searchNameId}>Find contacts by name</label>
      <input
        className={css['search-input']}
        value={searchName}
        id={searchNameId}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
