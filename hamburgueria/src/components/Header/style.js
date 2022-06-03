import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};
  #figure {

    height: 90px;
    margin: 10px;
  }
  #figure img {
    background: #e0e0e0;
    width: 100px;
    height: 100%;
  }
  #span {
    margin-top: 30px;
    font-size: 12px;
    color: #bdbdbd;
  }
  h4 {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px;
    background-color: #27ae60;
    color: white;
  }
  @media (min-width: 769px) {
      flex-direction: row;
  }
`;
