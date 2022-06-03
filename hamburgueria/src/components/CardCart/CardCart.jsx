import { FlexDiv } from "../styles/style";
import { FlexProduct } from "./style";

function CardCart({ elem }) {
  return (
    <FlexProduct j="space-between" w="100%">
      <FlexDiv >
        <figure id="figure">
          <img src={elem.img} alt="Produto" />
        </figure>
        <FlexDiv f="column" j="space-evenly" m="10px">
          <h3>{elem.name}</h3>
          <span>{elem.category}</span>
        </FlexDiv>
      </FlexDiv>
      <span id="span">Remover</span>
    </FlexProduct>
  );
}
export default CardCart;
