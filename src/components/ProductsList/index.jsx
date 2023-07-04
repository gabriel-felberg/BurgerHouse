import Product from "../Product";

import { FlexList } from "./style";


function ProductsList({produtos, mostrarProduts, handleClick}) {

  return (
    <FlexList ox="scroll" oy="none" w="100%" h="370px" mb="10px" m="0 auto" j="flex-start">
        {( mostrarProduts.length > 0 ? mostrarProduts : produtos).map((elem , index)=>(
            <Product key={elem.id} elem={elem} id={index} handleClick={handleClick}/>
        ))}
    </FlexList>
  );
}
export default ProductsList;
