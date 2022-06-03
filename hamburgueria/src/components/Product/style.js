import styled from "styled-components";

export const CurrentCard = styled.div`
  @media (min-width: 280px) {
    display: flex;
    flex-direction: column;
    
    gap: 1rem;
    padding: 5px;
    margin: 5px;
    width: 250px;

    height: 300px;
    max-width: 340px;

    flex: none;
  
    margin-bottom: ${(props) => props.mb};

    figure {
      display: flex;
      justify-content: center;
      width: 240px;
      height: 12rem;
      margin: 0 auto
    }
    img {
      align-items: center;
      background-color: #e0e0e0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    p {
      color: #27ae60;
    }
    @media (min-width: 769px) {
      height: 400px;
    }
  }
`;