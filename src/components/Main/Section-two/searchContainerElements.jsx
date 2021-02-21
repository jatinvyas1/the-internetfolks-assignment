import styled from "styled-components";
import DesktopBackground from "./bg-shorten-desktop.svg";
import MobileBackground from "./bg-shorten-mobile.svg";

export const Container = styled.div`
  display: flex;
  margin: 8% 12% 0 12%;
  position: relative;
  top: -5rem;
  height: 150px;
  width: 75%;
  justify-content: center;
  padding-top:1.2rem;
  align-items: center;
  background-image: url(${DesktopBackground});
  background-color: #3b3054;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    margin: 2rem 0 1rem 0 ;
    top:0;
    background-image: url(${MobileBackground})
  }
`;

export const ShortenButton = styled.div`
  border-radius: 8px;
  cursor: pointer;
  background: #2acfcf;
  padding: 0.9rem 5rem;
  color: #fff;
  position:relative;
  top:-.7rem;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #93e6e6;
  }

  @media screen and (max-width: 768px) {
    margin: 2% 0;
    width: 90%;
    transition: all 0.3s ease-in-out;
    padding: 0.5rem 0;
    text-align: center;
    vertical-align: middle;
  }
`;

export const UrlInput = styled.input`
  height: 3rem;
  width: 90%;
  font-size: 18px;
  border-radius: 8px;
  margin-right: 3rem;
  border: ${({isError})=>(isError?"2px solid #f46262":"none")};
  color: #35323e;
  padding-left:2px;
  &:focus {
    outline: none;
  }
  ::placeholder{
    color:${({isError})=>(isError?"#f46262":"#bfbfbf")}
  }
  @media screen and (max-width: 768px) {
    margin:  0;
    height: 2.5rem;
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
`;

export const InputLabel = styled.label`
  color:#f46262;
  font-size:12px;
  visibility:${({isError})=>(isError?"visible":"hidden")};
  @media screen and (max-width: 768px) {
    padding-bottom:6%;
  }
`

export const CopyButton = styled.div`
  border-radius: 8px;
  cursor: pointer;
  background: ${({ isCopied }) => (isCopied ? "#3b3054" : "#2acfcf")};
  padding: 0.3rem 1.5rem;
  width: 7rem;
  margin-right: 2rem;
  text-align: center;
  color: #fff;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ isCopied }) => (isCopied ? "#3b3054" : "#93E6E6")};
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

export const ShortenedUrlContainer = styled.div`
  display: flex;
  margin: 2% 12% 0 12%;
  height: 80px;
  width: 75%;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  vertical-align: middle;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 85%;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const Url = styled.div`
  display: flex;
  width: 50%;
  margin-left: 3rem;
  word-wrap: break-word;
  color: #35323e;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 10px;
    padding: 0.5rem;
  }
`;
export const ShortenedUrl = styled.div`
  color: #2acfcf;
  margin-left: 5rem;
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0.5rem;
  }
`;

export const Rule = styled.hr`
  width: 100%;
  color:#bfbfbf;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const GreySection = styled.div`
  background: #eff1f7;
  @media screen and (max-width: 768px){
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
`;

export const ErrorMessage = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  @media screen and (max-width:768px){
    width:90%;
  }
`