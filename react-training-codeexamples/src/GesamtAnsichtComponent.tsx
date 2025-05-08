import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BookComponent2 } from "./Book2";
import { ButtonComponent } from "./ButtonComponent";
import { ThemeToggleButton } from "./ThemeContext";

export const GesamtAnsichtComponent = () => {
  const [bookAnzeige, setBookAnzeige] = useState<number>(0);
  // const [fetchedBooks, setFetchedBooks] = useState<Book[]>([]);
  //const [loading, setLoading] = useState<boolean>(true);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const books = (await (await fetch("https://api.itbook.store/1.0/new")).json())["books"];
      setBookAnzeige(books.length);

      return books;
    }
  });

  /* useEffect(() => {
    fetch("https://api.itbook.store/1.0/new").then(async data => {
      const books: Book[] = (await data.json())["books"];

      setLoading(false);
      setFetchedBooks(books);
      setBookAnzeige(books.length);
    });
  }, []);*/

  if (isError) {
    return <p>Ein Fehler ist aufgetreten!</p>;
  }

  if (isLoading) {
    return (
      <div role='status' className='flex justify-center items-center h-screen'>
        <svg
          aria-hidden='true'
          className='w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1 className='text-3xl dark:text-white'>Booklist ({bookAnzeige})</h1>
        <ThemeToggleButton></ThemeToggleButton>
        <ButtonComponent fetchedBooks={data} bookAnzeige={bookAnzeige} setBookAnzeige={setBookAnzeige}></ButtonComponent>
        <BookComponent2 amountOfBooks={bookAnzeige} fetchedBooks={data}></BookComponent2>
      </div>
    </>
  );
};
