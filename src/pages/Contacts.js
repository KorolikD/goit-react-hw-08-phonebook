import { HorizontalLine, Title, TitleH2 } from './Contacts.styled';
import { ContactForm, Filter, ContactsList, Loader } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title>Add new contacts</Title>
      <ContactForm />

      <HorizontalLine />

      <TitleH2>Contacts</TitleH2>
      <Filter />

      {(isLoading && <Loader />) || (contacts.length > 0 && <ContactsList />)}

      {error && <p style={{ textAlign: 'center' }}>{error}</p>}
    </>
  );
};

export default Contacts;
