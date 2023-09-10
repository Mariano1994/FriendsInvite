import { AddButton } from "./AddButton";

export function FormSplitBill({selectedFriend}) {

  return (
    <>
      <form className="form-split-bill">
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label> 💰 Bill Value</label>
        <input type="text" />

        <label>🧍🏿 Your Expense</label>
        <input type="text" />
        <label>👬 {selectedFriend.name}'s expenses</label>
        <input type="text" disabled />

        <label>Who is payong the bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <AddButton>Split bill</AddButton>
      </form>
    </>
  );
}
