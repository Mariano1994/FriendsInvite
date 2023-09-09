import { useState } from "react";
import { AddButton } from "./AddButton";

export function FormAddFriend({onAddNewFriend}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleUserName(event) {
    setName(event.target.value);
  }

  function handleUserImageURL(event) {
    setImage(event.target.value);
  }

  function handleSubmitNewFriend(event) {
    event.preventDefault();

    const id = crypto.randomUUID()

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddNewFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmitNewFriend}>
        <label htmlFor="add-friend"> 👬 Friend Name </label>
        <input
          type="text"
          id="add-friend"
          value={name}
          onChange={handleUserName}
          required
        />

        <label htmlFor="image-friend"> 🌄 image URL</label>
        <input
          type="text"
          id="image-friend"
          value={image}
          onChange={handleUserImageURL}
          required
        />

        <AddButton>Add</AddButton>
      </form>
    </>
  );
}
