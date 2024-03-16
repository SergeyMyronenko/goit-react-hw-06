import { useId } from "react";
import css from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filteredContacts } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => {
    state.filters.name;
  });
  const searchId = useId();

  const searchInput = (e) => {
    search(e.target.value);
  };

  return (
    <div className={css.searchBar}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        className={css.textInput}
        type="text"
        value={search}
        onChange={() => dispatch(filteredContacts())}
      />
    </div>
  );
};
