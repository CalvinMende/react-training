import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { GesamtAnsichtComponent } from "./GesamtAnsichtComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
      {/*books.map((book, index) => (
        // always define keys when looping, unique identifier for React DOM
        <BookComponent
          key={index}
          author={book.author}
          id={book.id}
          inStore={book.inStore}
          releaseDate={book.releaseDate}
          title={book.title}
        />
      ))*/}
      <GesamtAnsichtComponent />
    </div>
    </QueryClientProvider>
  );
}

export default App;
