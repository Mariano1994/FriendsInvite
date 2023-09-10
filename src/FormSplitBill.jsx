import { useState } from "react";
import { AddButton } from "./AddButton";

export function FormSplitBill({ selectedFriend, onSplitValue }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill ? bill - userExpense : '';
  const [whoIsPaying, setWhoIsPaying] = useState("user");


  function handleUserExpense(event) {
    setUserExpense(Number(event.target.value < bill ? event.target.value : userExpense))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if(!bill || !userExpense) return
    onSplitValue(whoIsPaying === 'user' ? friendExpense : -userExpense)

  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label> 💰 Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(event) => setBill(Number(event.target.value))}
        />

        <label>🧍🏿 Your Expense</label>
        <input
          type="text"
          value={userExpense}
          onChange={handleUserExpense}
        />

        <label>👬 {selectedFriend.name}'s expenses</label>
        <input type="text" disabled value={friendExpense} />

        <label>Who is payong the bill</label>
        <select
          value={whoIsPaying}
          onChange={(event) => setWhoIsPaying(event.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <AddButton>Split bill</AddButton>
      </form>
    </>
  );
}
