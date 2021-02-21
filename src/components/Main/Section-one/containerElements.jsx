import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0%;
    justify-content: center;
  }
`;
export const StaticContainer = styled.div`
  display: flex;
  margin: 2% 0 0 12%;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 0 5%;
    text-align: center;
  }
`;
export const TagLine = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  color: #35323e;
  margin-bottom: 0;
  @media screen and (max-width:768px){
    font-size:2.5rem;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  z-index: 1;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 5%;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding-right: 0;
  }
`;

export const Description = styled.p`
  color: #bfbfbf;
  padding-right: 10%;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-right: 0;
  }
`;

export const StartedButton = styled.div`
  background: #2acfcf;
  color: #fff;
  width: 20%;
  text-align: center;
  padding: 16px 28px;
  border-radius: 240px/200px;
  cursor: pointer;
  margin: 0 0 2rem 0;
  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
  }
  @media screen and (max-width:768px){
    width: 80%;
  }
`;
