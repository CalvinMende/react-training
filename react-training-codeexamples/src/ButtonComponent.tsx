import { Book } from "./testData/BookData";

interface Props {
  fetchedBooks: Book[];
  bookAnzeige: number;
  setBookAnzeige: React.Dispatch<React.SetStateAction<number>>; // () => void
}

export const ButtonComponent = ({ fetchedBooks, bookAnzeige, setBookAnzeige }: Props) => {
  return (
    <div className='mt-2 flex gap-2 justify-center'>
      <button
        className='bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded text-center w-24'
        onClick={() => bookAnzeige > 0 && setBookAnzeige(bookAnzeige - 1)}
        disabled={bookAnzeige == 0}
      >
        -
      </button>
      <button
        className='bg-transparent hover:bg-green-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded text-center w-24'
        onClick={() => bookAnzeige < fetchedBooks.length && setBookAnzeige(bookAnzeige + 1)}
        disabled={bookAnzeige == fetchedBooks.length}
      >
        +
      </button>
    </div>
  );
};
