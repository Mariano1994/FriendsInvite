import { AddButton } from "./AddButton";

export function FormAddFriend() {

  return (
    <>
      <form className="form-add-friend">
        <label htmlFor="add-friend">  👬 Friend Name </label>
        <input type="text"  id="add-friend"/>

        <label htmlFor="image-friend"> 🌄 image URL</label>
        <input type="text"  id="image-friend"/>

        <AddButton>Add</AddButton>
      </form>
    </>
  )
}