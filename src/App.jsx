import { AddButton } from "./AddButton";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";
import { FriendsList } from "./FriendsList";




function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList/>
          <FormAddFriend/>
          <AddButton>Add friend</AddButton>
        </div>

        <FormSplitBill/>
      </div>
    </>
  );
}

export default App;
