import CardCart from "../CardCart/CardCart";
import { CurrentButtum, FlexDiv } from "../styles/style";
import { FlexCard, FlexCont } from "./style";
function Card({ cartProduts }) {

  const valor = cartProduts.reduce((acc, elem) => {
    return acc + elem.price
  },0);
  const resultado = Number(valor).toLocaleString("pt-br",{style: "currency", currency: "brl"})
  return (
    <>
      <FlexCard f="column" g="20px">
        <h4>Carrinho de compras</h4>
        <FlexCont f="column">
          {cartProduts.map((elem, index) => (
            <CardCart key={index} elem={elem}></CardCart>
          ))}
        </FlexCont>
        
        {(cartProduts.length > 0) ? (
          <FlexDiv f="column" h="100px" j="space-between" p="10px">
            <FlexDiv j="space-between">
              <h3>Total</h3>
              <span>{resultado}</span>
            </FlexDiv>
            <CurrentButtum p="10px" bo="white" b="#E0E0E0">
              Remover todos
            </CurrentButtum>
          </FlexDiv>
        ) : (
          <FlexDiv a="center" j="center" f="column">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </FlexDiv>
        )}
      </FlexCard>
    </>
  );
}
export default Card;
