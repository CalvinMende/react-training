import styled from "styled-components";
import { Book } from "./testData/BookData";

interface Props {
  amountOfBooks: number;
  fetchedBooks: Book[];
}

export const BookComponent2 = ({ amountOfBooks, fetchedBooks }: Props) => {
  const StyledAuthor = styled.p`
    color: green;
  `;

  const filteredBooks = fetchedBooks.slice(0, amountOfBooks);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          flexWrap: "wrap"
        }}
      >
        {fetchedBooks.length === 0 && <p>Derzeit sind keine Bücher vorhanden.</p>}
        {fetchedBooks.length !== 0 && filteredBooks.length === 0 && <p>Derzeit sind keine Bücher mit dieser Filterung vorhanden.</p>}

        {filteredBooks.length !== 0 &&
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className='mt-6 relative'
              style={{ border: "1px solid black", borderRadius: "10px", padding: "20px", backgroundColor: "lightblue", textAlign: "left" }}
            >
              <h2 style={{ color: "blue", textDecoration: "underline" }} className='text-xl'>
                {book.title}
              </h2>
              <p>Subtitle: {book.subtitle}</p>
              <StyledAuthor>ISBN13: {book.isbn13}</StyledAuthor>
              <p>
                Price: <span style={{ fontWeight: 900 }}>{book.price}</span>
              </p>
              <img src={book.image} alt='Book' />
              <a href={book.url} className='text-blue-900'>
                Click me
              </a>
              <div
                data-popover-target='popover-default'
                className='absolute inline-flex items-center justify-center text-xs p-2 font-bold text-black bg-white border-2 border-white rounded-md -top-2 -end-2 dark:border-gray-900'
              >
                {parseFloat(book.price.slice(1)) < 30 ? <p style={{ color: "green" }}>Günstig</p> : <p style={{ color: "red" }}>Teuer</p>}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
