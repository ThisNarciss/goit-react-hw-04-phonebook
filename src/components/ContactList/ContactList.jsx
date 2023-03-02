import PropTypes from 'prop-types';
import { BiUser } from 'react-icons/bi';
import { Item, List, ButtonDel, Text } from './ContactList.styled';

export const ContactList = ({ contactList, onBtnClick }) => {
  return (
    <List>
      {contactList.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <BiUser />
            <Text>
              {name}: {number}
            </Text>
            <ButtonDel
              type="button"
              onClick={() => {
                onBtnClick(id);
              }}
            >
              Delete
            </ButtonDel>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
