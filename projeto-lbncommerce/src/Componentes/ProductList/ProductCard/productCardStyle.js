import styled from "styled-components";

export const ProductCardStyle = styled.div`
  display: grid;
  div img {
    height: 31vh;
    width: 93%;

    border: solid 2px lightblue;
  }
  div button {
    margin-bottom: 2vh;
  }
  .box-pagina-principal {
    border: 1px solid lightblue;
    
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65vh;
    margin: 1vh;
    color: white;
    font-size: 25px;
  }
  .produto {
    color: Black;
    display: flex;
    justify-content: center;
  }
  .preco {
    color: Black;
    display: flex;
    justify-content: center;
    margin-bottom: 1vh;
  }
  .box-pagina-principal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border-radius: 15px;
    background-color: lightblue;
    border: 2px solid white;
    margin-top: 7px;
  }
  button:hover {
    background-color: lightgreen;
    border: 2px solid white;
    
  }
  button:active {
    background-color: lightblue;
    border: 2px solid orangered;
    
  }
`;
export default ProductCardStyle;
