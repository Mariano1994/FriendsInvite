import { Friend } from "./Friend"


export function FriendsList({friendsData}) {
  return (
    <>
      <ul>
        {
          friendsData.map(friend => {
          return (
           <Friend friend={friend} key ={friend.id}/>
          )
        })     
        }
      </ul>
    </>
  )

}