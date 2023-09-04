import React, { createContext, useContext } from "react";


const FriendsContext = createContext();

export function FriendsContextProvider({ children }) {
  const initialContext = {
    friends: [
      { number: 1, name: "Valentine", hobby: "None", age: "14" },
      { number: 2, name: "Zahar", hobby: "Computer games", age: "15" },
      { number: 3, name: "Yaroslaw", hobby: "Basketball", age: "13" },
    ],
    getFriendById: (id) => {
      return initialContext.friends.find((friend) => friend.number === id);
    },
  };

  return (
    <FriendsContext.Provider value={initialContext}>
      {children}
    </FriendsContext.Provider>
  );
}

export function useFriendsContext() {
  const context = useContext(FriendsContext);
  if (!context) {
    throw new Error("useFriendsContext must be used within a FriendsContextProvider");
  }
  return context;
}