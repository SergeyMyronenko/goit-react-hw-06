import { createAction } from "@reduxjs/toolkit";

export const filtersReducer = (state = "", action) => {
  switch (action.type) {
    case "filters/filteredContacts":
      return {
        contacts: { ...state.contacts },

        filters: {
          ...state,
          filters: {
            ...state.filters,
            name: state.contacts.items.filter((contact) =>
              contact.name
                .toLocaleLowerCase()
                .includes(action.payload.toLocaleLowerCase())
            ),
          },
        },
      };

    default:
      return state;
  }
};

export const filteredContacts = createAction("filters/filteredContacts");
