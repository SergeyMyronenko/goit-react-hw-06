import { selectContacts } from "../../redux/selector";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return contacts.length > 0 ? (
    <ul className={css.contactList}>
      {contacts.map((item) => (
        <li key={nanoid()} className={css.contactListItem}>
          <Contact contacts={item} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Phonebook is empty</p>
  );
};
