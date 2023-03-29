import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//SETUP VARS

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You To The Moon and Back",
    author: "Amelia Hepworth",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },

  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
    title: "The Vanishing Half: A Novel",
    author: "Brit Bennett",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, author, title }) => {
  //attribute, eventHandler
  //onClick, onMouseOver

  const clickHandler = (title) => {
    console.log(title);
    alert(title);
  };

  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => clickHandler(title)}>
        Show Title
      </button>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
