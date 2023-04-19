import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  // combine 2 actions into 1
  const hanldeSubmit = () => {
    // after finish edit, close the form
    setShowEdit(false);
  };

  // dynamatically determine if going to display BookEdit component or book title
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={hanldeSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
