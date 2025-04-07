import { Wrapper } from './styles';

import SearchIcon from '../../assets/icons/search.svg?react';

export type SearchProps = {
  className?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'black'
    | 'white';
  value: string;
  fullWidth?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({
  color = 'primary',
  value,
  onChange,
  ...props
}: SearchProps) => {
  return (
    <Wrapper color={color} {...props}>
      <div className='search'>
        <div>
          <span className='icon left'>
            <SearchIcon />
          </span>
          <input
            type='text'
            value={value}
            onChange={onChange}
            placeholder='Search'
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Search;
