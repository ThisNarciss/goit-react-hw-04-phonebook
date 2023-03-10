import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ChildrenBox, Container, Notification } from './App.styled';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onBtnDeleteClick = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const addNewContact = obj => {
    const findName = contacts.find(
      ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
    );
    const findNumber = contacts.find(
      ({ number }) => number.toLowerCase() === obj.number.toLowerCase()
    );

    if (findName) {
      Notify.failure(`${findName.name} is already in contacts`);
      return;
    }
    if (findNumber) {
      Notify.failure(`this is ${findNumber.name} phone number`);
      return;
    }

    Notify.success(`${obj.name} add to the contacts`);

    setContacts(prevContacts => [...prevContacts, { id: nanoid(), ...obj }]);
  };

  const getFilteredContacts = (filterName, contacts) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    );

  const filteredContacts = getFilteredContacts(filter, contacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addNewContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <ChildrenBox>
            <Filter onChange={setFilter} />
            <ContactList
              contactList={filteredContacts}
              onBtnClick={onBtnDeleteClick}
            />
          </ChildrenBox>
        ) : (
          <Notification>There are no contacts in the phone book</Notification>
        )}
      </Section>
    </Container>
  );
}
