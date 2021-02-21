import React from "react";
import {
  CopyButton,
  ShortenedUrlContainer,
  Url,
  ShortenedUrl,
  Rule
} from "./searchContainerElements";

function ShortenedUrlCard({ url, shortenedLink ,onCopy,isCopied}) {
  return (
    <ShortenedUrlContainer>
      <Url>{url}</Url>
      <Rule/>
      <ShortenedUrl>{shortenedLink}</ShortenedUrl>
      <CopyButton onClick={onCopy} isCopied={isCopied}>{isCopied?"Copied!":"Copy"}</CopyButton>
    </ShortenedUrlContainer>
  );
}

export default ShortenedUrlCard;
