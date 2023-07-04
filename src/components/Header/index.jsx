import { CurrentButtum, DivImput } from "../styles/style";
import logo from "../../img/Logo.png";
import { useState } from "react";
import { HeaderContainer } from "./style";


function Header({ showProducts }) {
  const [searchInput, setSearchInput]= useState("")

  function callBack(event) {
    event.preventDefault()
    showProducts(searchInput)
  }
  return (
    <header>
      <HeaderContainer h="100px" a="center" f="column" j="space-around">
        <figure>
          <img src={logo} alt="logo"></img>
        </figure>
        <DivImput p="4px" w="auto" onSubmit={callBack}>
            <input
              type="text"
              width="50px"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <CurrentButtum
              w="35%"
              p="10px"
              b="#27AE60"
              bo="#27AE60"
              c="white"
              type="submit"
            >
              Pesquisar
            </CurrentButtum>
        </DivImput>
      </HeaderContainer>
    </header>
  );
}
export default Header;
