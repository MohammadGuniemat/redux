import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

const multiply = () => {
    return {
      type: 'multi',
    };
  };

export { addItem, deleteItem,multiply };