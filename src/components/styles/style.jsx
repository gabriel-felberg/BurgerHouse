import styled from "styled-components";

export const CurrentButtum = styled.button`
  @media (min-width: 280px) {
    background: ${(props) => props.b};
    color: ${(props) => props.c};
    border: 2px solid ${(props) => props.bo};

    border-radius: 8px;
    font-size: ${(props) => props.f};
    cursor: pointer;

    display: flex;
    justify-content: center;

    box-sizing: border-box;
    padding: ${(props) => props.p};
    color: ${(props) => props.c};

    width: ${(props) => props.w};
  }
  @media (min-width: 768px) {}
`;

export const CurrentFigure = styled.figure`
  @media (min-width: 280px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 5px;
    margin: 5px;
    width: 70%;

    height: 300px;
    max-width: 340px;

    flex: none;
    margin-bottom: ${(props) => props.mb};

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 12rem;
    }
    img {
      background-color: #e0e0e0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    p {
      color: #27ae60;
    }
    @media (min-width: 768px) {}
  }
`;
export const FlexDiv = styled.div`
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
    @media (min-width: 768px) {

    }
  
`;
export const DivImput = styled.form`
  @media (min-width: 280px) {
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

    border: 1px solid #cecece;
    border-radius: 8px;

    input {
      font-size: 17px;
      border: none;
      outline: none;
    }
    input:focus {
      outline: none;
    }
    @media (min-width: 768px) {}
  }
`;

export const Imagem = styled.img`

    src: ${(props) => props.s};
    alt: ${(props) => props.a};
  
  @media (min-width: 768px) {

  }
`;
