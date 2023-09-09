
export function AddButton({children, onClick}) {

  return(
    <>
       <button className="button" onClick={onClick}> {children}</button>
    </>
  )
}