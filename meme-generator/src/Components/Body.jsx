import React, { useState, useEffect, useRef } from 'react';
import {toPng} from 'html-to-image';

const Body = () => {
  const [meme, setMeme] = useState({
    topText: "", 
    bottomText: "",
    randomImage: "https://i.imgflip.com/5c7lwq.png"
  });
  const [allMemes, setAllMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const memeRef = useRef(null);
  const downloadLinkRef = useRef(null);

  useEffect(() => {
    const apiUrl = `https://api.imgflip.com/get_memes`;
    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setAllMemes(data.data.memes);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  function getMemeImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  }

  const downloadMeme = () => {
    if (!meme.randomImage) {
      console.error('No image available to download');
      return;
    }
    toPng(memeRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'meme.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error converting meme image:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className='body'> 
      <div className='texts-box'>
        <div className='text'>
          <p>Top text</p>
          <input
            type="text"
            placeholder='Text to appear on top'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
          />
        </div>
        <div className='text'>
          <p>Bottom text</p>
          <input
            type="text"
            placeholder='Text to appear below'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className='get-image' onClick={getMemeImage}>Get a new image</button>
        
      </div>
      <div className='generated' ref={memeRef} style={{ position: 'relative', textAlign: 'center' }}>
        <img src={meme.randomImage} className='meme-image' alt="Random meme"/>
        <h2 className='meme-text-top'>{meme.topText}</h2>
        <h2 className='meme-text-bottom'>{meme.bottomText}</h2>
      </div>
      <div>
        <button className='download-meme' onClick={downloadMeme}>Download Meme</button>
        <a ref={downloadLinkRef} style={{ display: 'none' }}>Download</a>
      </div>
    </main>
  );
}

export default Body;
