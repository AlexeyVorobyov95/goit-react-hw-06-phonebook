import { Span, Item, Button } from './ContactsList.styled';

export const ContactsItem = ({ name, number, id, onClick }) => {
  return (
    <Item id={id}>
      <Span>{name}</Span>
      {number}
      <Button onClick={() => onClick(id)} type="button">
        Delete contact
      </Button>
    </Item>
  );
};
