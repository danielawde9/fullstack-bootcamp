import React, { useMemo, useState } from "react";
import "./BookstoreManager.css";
function BookstoreManager() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      id: 3,
      title: "Moby Dick",
      author: "Herman Melville",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const addBook = () => {
    setBooks((prev) => [...prev, { ...newBook, id: Date.now() }]);
    setNewBook({ title: "", author: "" });
  };
  const filteredBooks = books.filter((book) => {
    console.log("Filtering operation running...");
    if (!searchTerm) return true;
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // const filteredBooks = useMemo(() => {
  //   console.log("Use memo filtering operation running...");
  //   return books.filter((book) => {
  //     if (!searchTerm) return true;
  //     return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  // }, [searchTerm, books]);
  return (
    <div className={`container ${theme === "dark" ? "darkTheme" : ""}`}>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by title"
          className={"input"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={"addBook"}>
        <input
          placeholder="Title"
          className={"input"}
          value={newBook.title}
          onChange={(e) =>
            setNewBook((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          placeholder="Author"
          className={"input"}
          value={newBook.author}
          onChange={(e) =>
            setNewBook((prev) => ({ ...prev, author: e.target.value }))
          }
        />

        <button className={"button"} onClick={addBook}>
          Add Book
        </button>
      </div>

      <button
        className={"button"}
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Toggle Theme
      </button>

      <ul className={"list"}>
        {filteredBooks.map((book) => (
          <li key={book.id} className={"listItem"}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookstoreManager;
