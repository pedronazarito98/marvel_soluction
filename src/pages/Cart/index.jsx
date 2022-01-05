import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { useCart } from "../../contexts/useCart";
import { FormatCurrency } from "../../utils/format";
import { Container, ProductTable, Total } from "./styles";

export function Cart() {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map((product) => ({
    ...product,
    // priceFormatted: product.price,
    subTotal: FormatCurrency(product[0].price * product.amount),
  }));

  //   sumTotal acumula e soma product.price / product.amount;
  const total = FormatCurrency(
    cart.reduce((sumTotal, product) => {
      console.log("product", product);
      return sumTotal + product[0].price * product.amount;
    }, 0)
  );

  //adiciona um item no carrinho
  function handleProductIncrement(product) {
    updateProductAmount({
      productId: product[0].id,
      amount: product.amount + 1,
    });
  }

  //retira um item no carrinho
  function handleProductDecrement(product) {
    updateProductAmount({
      productId: product[0].id,
      amount: product.amount - 1,
    });
  }

  //limpa o carrinho
  function handleRemoveProduct(productId) {
    removeProduct(productId);
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map((product) => (
            <tr key={product[0].id}>
              <td>
                <img
                  src={`${product[0].thumbnail.path}.${product[0].thumbnail.extension}`}
                  alt={product[0].title}
                  loading="lazy"
                />
              </td>
              <td>
                <strong>{product[0].title}</strong>
                <span>{FormatCurrency(product[0].price)}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
