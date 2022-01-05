import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { GetComicsProvider } from "./contexts/useComics";
import { CartProvider } from "./contexts/useCart";
export function App() {
  return (
    <>
      <GetComicsProvider>
        <CartProvider>
          <Routes />
          <GlobalStyle />
        </CartProvider>
      </GetComicsProvider>
    </>
  );
}
