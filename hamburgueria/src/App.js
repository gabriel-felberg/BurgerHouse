import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { FlexDiv } from "./components/styles/style";
import { AppFlex } from "./style";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [cartProduts, setCartProduts] = useState([]);
  const [mostrarProduts, setMostrarProduts] = useState([]);
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProdutos(res);
      });
  }, []);

  function limparString(string) {
    return string.toLowerCase().replace("-", "").replace(/\s/g, "");
    //colocando tudo em caixa baixa com toLowerCase
    //tirando o "-" com o replace
    //tirando todos os " " da pesquisa com o replace
  }
  function showProducts(valorImput) {
    const resultado = produtos.filter((elem) => {
      return (
        limparString(elem.name).includes(limparString(valorImput)) ||
        limparString(elem.category).includes(limparString(valorImput))
      );
    });
    console.log(resultado);
    setMostrarProduts(resultado);
  }

  function handleClick(obj) {
    let resultado = cartProduts.find((elem) => elem === obj);
    if (resultado === undefined) {
      setCartProduts([...cartProduts, obj]);
    }
  }
  return (
    <FlexDiv p="10px" f="column">
      <Header showProducts={showProducts} />
      <AppFlex f="column"  j="center">
        <ProductsList
          produtos={produtos}
          mostrarProduts={mostrarProduts}
          handleClick={handleClick}
        />
        <Cart cartProduts={cartProduts} />
      </AppFlex>
    </FlexDiv>
  );
}

export default App;
