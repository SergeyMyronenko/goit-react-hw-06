import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  return (
    <ul className={css.contactList}>
      {selectContacts.map((item) => (
        <li key={nanoid()} className={css.contactListItem}>
          <Contact contacts={item} />
        </li>
      ))}
    </ul>
  );
};
