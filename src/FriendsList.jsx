import { Friend } from "./Friend";

export function FriendsList({ friendsData, onClick, onSelection, selectedFriend }) { 
  
  return (
    <>
      <ul>
        {friendsData.map((friend) => {
          return (
            <Friend
              friend={friend}
              key={friend.id}
              onClick={onClick}
              onSelection={onSelection}
              selectedFriend= {selectedFriend}
            />
          );
        })}
      </ul>
    </>
  );
}
