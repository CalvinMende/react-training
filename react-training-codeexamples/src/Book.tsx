import { Book } from "./testData/BookData";

export const BookComponent = (props: Book) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Id: {props.id}</p>
      <p>Author: {props.author}</p>
      <p>Release Date: {props.releaseDate}</p>
      <p>In Store? {props.inStore ? "Yes" : "No"}</p>
    </div>
  );
};
