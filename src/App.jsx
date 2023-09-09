import { useState } from "react";
import { AddButton } from "./AddButton";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";
import { FriendsList } from "./FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);


  function handleAddNewFriends(friendsData) {
    setFriends((friends) => [...friends, friendsData]);
  }

  function handleOpenFriendForm() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList friendsData={friends} />
          {isOpen && <FormAddFriend onAddNewFriend={handleAddNewFriends} />}

          <AddButton onClick={handleOpenFriendForm}>
            {isOpen ? "Close" : "Add Friend"}
          </AddButton>
        </div>

        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
