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
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddNewFriends(friendsData) {
    setFriends((friends) => [...friends, friendsData]);
    setIsOpen(false);
  }

  function handleOpenFriendForm() {
    setIsOpen((isOpen) => !isOpen);
    setSelectedFriend(null);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setIsOpen(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) => {
      return friends.map((friend) => {
        return friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      });
    });

    setSelectedFriend(null)
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friendsData={friends}
            onSelection={handleSelectFriend}
            selectedFriend={selectedFriend}
          />
          {isOpen && <FormAddFriend onAddNewFriend={handleAddNewFriends} />}

          <AddButton onClick={handleOpenFriendForm}>
            {isOpen ? "Close" : "Add Friend"}
          </AddButton>
        </div>

        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitValue={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
