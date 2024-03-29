import { AddButton } from "./AddButton";

export function Friend({ friend,  onSelection, selectedFriend }) {

  const isSelected = selectedFriend?.id === friend.id;
  // let isSelected
  


  return (
 
    <>
      <li className={isSelected? "selected":""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="red">
            {" "}
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}

        {friend.balance > 0 && (
          <p className="green">
            {" "}
            {friend.name} owes you {Math.abs(friend.balance)}$
          </p>
        )}

        {friend.balance === 0 && <p> you and {friend.name} are even</p>} 

        <AddButton onClick={()=> onSelection(friend)}> {isSelected? "Close": "Select"} </AddButton>
      </li>
    </>
  );
}
