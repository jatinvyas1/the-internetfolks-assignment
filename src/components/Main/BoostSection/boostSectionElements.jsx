import styled from "styled-components";
import BoostMobile from "./bg-boost-mobile.svg";
import BoostDesktop from "./bg-boost-desktop.svg";

export const BoostContainer = styled.div`
  background-image: url(${BoostDesktop});
  background-color: #3b3054;
  display: flex;
  width: 100%;
  displ: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 6rem;
    background-image: url(${BoostMobile})
  }
`;

export const BoostDescription = styled.div`
  color: white;
  text-align: center;
  padding: 3rem 0 1rem 0;
  font-size: 2.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BoostButton = styled.div`
  background: #2acfcf;
  width: 10%;
  border-radius: 240px/200px;
  text-align: center;
  color: white;
  font-size: 18px;
  padding: 1rem;
  margin-bottom: 3rem;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #93e6e6;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
