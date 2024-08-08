import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}


const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Популярность' },
    { value: '-added', label: 'Релевантность' },
    { value: 'name', label: 'Имя' },
    { value: '-released', label: 'Дата релиза' },
    { value: '-metacritic', label: 'Популярность' },
    { value: '-rating', label: 'Рейтинг' },
  ];
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Сортировать по: {currentSortOrder?.label || 'Популярность'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;