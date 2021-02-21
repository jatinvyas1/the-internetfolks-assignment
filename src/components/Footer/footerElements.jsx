import styled from "styled-components";

export const FooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  background: #232127;
  width: 100%;
  height: 20rem;
  justify-content: space-around;
  padding: 4rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

export const LogoContainer = styled.div`
  color: white;
`;

export const Feature = styled.div`
  color: white;
  padding-bottom: 1rem;
  font-size: 18px;
  @media screen and (max-width: 768px){
      padding:1rem 0;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Link = styled.div`
  color: white;
  cursor: pointer;
  padding: 0.25rem 0;
  &:hover {
    color: #2acfcf;
  }
`;

export const SocialIcon = styled.img`
  height: 2rem;
  width: 2rem;
  padding: 0 0.5rem;

`;

export const IconContainer = styled.div`
  @media screen and (max-width:768px){
      padding:2rem 0.5rem;
  }
`;