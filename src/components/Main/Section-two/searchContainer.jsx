import React, { useState, useEffect } from "react";
import { Container, ShortenButton, UrlInput,GreySection}  from "./searchContainerElements";
import ShortenedUrlCard from "./shortenedUrlCard";
function SearchContainer() {
  const [url, setUrl] = useState("");
  const [searches, setSearches] = useState([]);
  const [search, setSearch] = useState(false);
  const [copiedIndex,setCopiedIndex] = useState(-1);
  const handleClick = () => {
    setSearch(!search);
  };
  useEffect(() => {
    const shortUrl = async () => {
      await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((result) => result.json())
        .then((data) => {
          if (!data.ok) {
            return;
          }
          setSearches([
            ...searches,
            {
              url: url,
              shortenedLink: data.result.full_short_link,
            },
          ]);
        });
    };
    shortUrl();
    setUrl("");
  },[search]);
  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleCopy = (index)=>{
      navigator.clipboard.writeText(searches[index].shortenedLink)
      .then(()=>{
        setCopiedIndex(index);
      })
  }
  return (
    <GreySection>
      <Container>
        <UrlInput
          value={url}
          placeholder="Shorten a link here..."
          onChange={handleInputChange}
        />
        <ShortenButton onClick={handleClick}>Shorten It!</ShortenButton>
      </Container>

      {searches.map((search,index) => (
        <ShortenedUrlCard
          url={search.url}
          shortenedLink= {search.shortenedLink}
          isCopied={index===copiedIndex?true:false}
          onCopy={()=>handleCopy(index)}
        />
      ))}
    </GreySection>
  );
}

export default SearchContainer;
