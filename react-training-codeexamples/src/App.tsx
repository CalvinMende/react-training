import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { GesamtAnsichtComponent } from "./GesamtAnsichtComponent";
import { ThemeContextProvider } from "./ThemeContext";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className='App bg-white dark:bg-black'>
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
    </ThemeContextProvider>
  );
}

export default App;
