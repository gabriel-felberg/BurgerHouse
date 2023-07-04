import { CurrentButtum, FlexDiv } from "../styles/style";
import { CurrentCard } from "./style";

function Product({ elem, handleClick}) {
  const preco = Number(elem.price).toLocaleString("pt-br",{style: "currency", currency: "brl"})
  return (
    <CurrentCard  mb="10px">
      <figure>
        <img src={elem.img} alt={elem.name} />
      </figure>
      <FlexDiv f="column" g=".6rem" a="flex-start" j="space-between">
        <h3>{elem.name}</h3>
        <span>{elem.category}</span>
        <p>{preco}</p>
        <CurrentButtum p="10px" b="#27AE60" bo="#27AE60" c="white" id={elem.id} onClick={()=> handleClick(elem)}>Adicionar</CurrentButtum>
      </FlexDiv>
    </CurrentCard>
  );
}
export default Product;
