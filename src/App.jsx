import { Home } from "./pages/Home";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { GetComicsProvider } from "./contexts/useComics";
export function App() {
  return (
    <>
      <GetComicsProvider>
        <Routes />
        <GlobalStyle />
      </GetComicsProvider>
    </>
  );
}
