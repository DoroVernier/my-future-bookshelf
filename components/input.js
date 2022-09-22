import {nanoid} from 'nanoid';

export default function AddCard(onAddNewCard) {
  function handleSubmit(event) {
    event.preventDefault(); 

    const form = event.target; 
    const input = form.name.value; 

    console.log(inputValue); 

    const addNewCard = {id:nanoid(), name: inputValue}; 

    onAddNewCard(addNewCard); 
    console.log(addNewCard); 

  }  
   
    return (
        
<form onSubmit={handleSubmit}>
    <label for="name">Find your book </label>
    <input type="text" name="name" id="nanoid()" required />
    <button type="submit" >Submit</button>
</form>

    )
}