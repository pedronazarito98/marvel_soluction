import { createContext, useContext, useState } from "react";
import { sendRequest } from "../services/sendRequest";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem("@Marvel:cart"); //busca od dados do localStorage

    if (storagedCart) {
      return JSON.parse(storagedCart); //retorna os dados como um array de produtos
    }

    return [];
  });

  const addProduct = async (productId) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product[0].id === productId
      ); //verifica se o produto tem o Id igual

      const result = await sendRequest.getDetailsComics(productId); //faz a requisição do estoque de produtos.

      // console.log("stock: ", result);
      const stockAmount = result.amount; //quantidade que tem no estoque
      const currentAmount = productExists ? productExists.amount : 0; //produto atual no carrinho
      const amount = currentAmount + 1; //quantidade desejada

      if (amount > stockAmount) {
        toast('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        return;
      } //quantidade desejada

      if (productExists) {
        toast("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        productExists.amount = amount; //atualiza produto
      } else {
        const result = await sendRequest.getDetailsComics(productId);

        const newProduct = {
          ...result,
          amount: 1,
        };
        toast.success("Produto adicionado");

        updatedCart.push(newProduct);
      }

      setCart(updatedCart);
      localStorage.setItem("@Marvel:cart", JSON.stringify(updatedCart));
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = (productId) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (product) => product[0].id === productId
      );
      if (productIndex >= 0) {
        toast.error("Erro na remoção do produto");
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        localStorage.setItem("@Marvel:cart", JSON.stringify(updatedCart));
      } else {
        throw Error(); //força o erro caso não encontrar
      }
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({ productId, amount }) => {
    try {
      if (amount <= 0) {
        return; // se o amount for menor ou igual a zero, sai da função
      }

      const result = await sendRequest.getDetailsComics(productId);
      const stockAmount = result.amount;

      if (amount > stockAmount) {
        toast.error("Quantidade solicitada fora de estoque");
        return;
      }

      const updatedCart = [...cart];

      const productExists = updatedCart.find(
        (product) => product[0].id === productId
      );

      if (productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
        localStorage.setItem("@Marvel:cart", JSON.stringify(updatedCart));
      } else {
        throw Error(); //força o erro caso não encontrar
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
