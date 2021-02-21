import styled from "styled-components";

export const AboutUs = styled.div`
    background:#EFF1F7;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center 
    margin:0%;
`;

export const Features = styled.h1`
  color: #35323e;
  margin-top: 5%;
`;

export const Description = styled.div`
  color: #bfbfbf;
  width: 40%;
  text-align: center;
  font-size: 18px;
`;

export const FeatureCard = styled.div`
  position: relative;
  padding-top: 30px;
  text-align: left;
  top:${({top})=>(top+"rem")};
  background:#fff;
  margin:2%;
  width:30%;
  padding:3%;
  border-radius:8px;
  z-index:1;
`;

export const FeatureImage = styled.div`
  width: 50px;
  height: 50px;
  padding: 1rem;
  border-radius: 50%;
  text-align: center;
  font-size: 18px;
  color: white;
  background: #3b3054;
  position: absolute;
  top: -40px;
  left: 20%;
  transform: translateX(-50%);
  
`;

export const FeatureCardContainer = styled.div`
    margin:5% 12%;
    display:flex;
    justify-content: space-between;
    width: 75%;
`;

export const CardHeading = styled.h3`
    color:#35323e;
    padding-top: 1.5rem;
`

export const BlueConnector = styled.hr`
    color:#2acfcf;
    width: 70%;
    border:5px solid;
    position: relative;
    top:-14rem;
    z-index:0;
`

export const CardText = styled.div`
    color:#bfbfbf;

`;