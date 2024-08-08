import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { FormEvent, useRef } from 'react';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <form onSubmit={(event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      if (ref.current) {
        onSearch(ref.current?.value);
      }
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder='Поиск игры...' variant='filled' />
      </InputGroup>
    </form>
  );
};

export default SearchInput;