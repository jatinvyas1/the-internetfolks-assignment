import styled from "styled-components";
import DesktopBackground from "./bg-shorten-desktop.svg";

export const Container = styled.div`
  display: flex;
  margin: 8% 12% 0 12%;
  position: relative;
  top: -5rem;
  height: 150px;
  width: 75%;
  justify-content: center;
  align-items: center;
  background-image: url(${DesktopBackground});
  background-color: #35323e;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 5rem;
  }
`;

export const ShortenButton = styled.div`
  border-radius: 8px;
  cursor: pointer;
  background: #2acfcf;
  padding: 0.9rem 5rem;
  color: #fff;
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
  width: 60%;
  font-size: 18px;
  border-radius: 8px;
  margin-right: 3rem;
  border: none;
  color: #35323e;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    margin: 2% 0;
    height: 2rem;
    width: 90%;
    transition: all 0.3s ease-in-out;
  }
`;

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
    width: 73%;
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
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const GreySection = styled.div`
  background: #eff1f7;
`;
