import {nanoid} from 'nanoid';

export default function AddCard(onAddBook) {
  function handleSubmit(event) {
    event.preventDefault(); 

    const form = event.target; 
    const bookWish= form.bookWish.value.trim(); 

    const NewCard = {id:nanoid(), bookWish: bookWish}; 

onAddBook(NewCard.value); 
  form.reset(); 

  }  
   
    return (
        
<form onSubmit={handleSubmit}>
    <label htmlFor="bookWish">Find your book </label>
    <input type="text" name="bookWish" id="nanoid()"  placeholder="Name, Titel or ISBN" maxlength="70"required />
    <button>Wish</button>
</form>

    )
}