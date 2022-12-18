import styled from "styled-components";

export const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const SearchTerm = styled.input`
  width: 100%;
  border: none;
  border-radius: 33.33px;
  font-weight: 500;
  background: blue;
  padding: 15px;
  outline: none;
  color: #fff;
  font-size: 15px;
  height: 36px;

  ::placeholder {
    color: white;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  margin-left: 10px;
  height: 36px;
  border: none;
  background: blue;
  text-align: center;
  color: #fff;
  border-radius: 33.33px;
  cursor: pointer;
  font-size: 20px;
`;

export const Wrap = styled.div`
  width: 500px;
  position: absolute;
  top: 20px;
  right: 20px;

  @media (max-width: 700px) {
    right: initial;
    position: initial;
    margin: 0 auto;
    width: 100%;
  }
`;
