import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { GetComicsProvider } from "./hooks/useComics";
import { CartProvider } from "./hooks/useCart";
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
