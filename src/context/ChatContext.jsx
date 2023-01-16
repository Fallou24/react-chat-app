import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
export const userInfo = createContext();
const ChatContext = ({ children }) => {
  const initialState = {
    chatId: "",
    user: {},
  };
  function reducer(state, action) {
    switch (action.type) {
      case "selectUser":
        return {
          chatId: action.payload.id,
          user: action.payload.user,
        };
      case "logout":
        return {
          chatId: "",
          user: {},
        };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <userInfo.Provider value={{ state, dispatch }}>
      {children}
    </userInfo.Provider>
  );
};

export default ChatContext;
