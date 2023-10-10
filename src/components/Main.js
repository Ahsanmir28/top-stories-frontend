import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoryList from './StoryList';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const Main = () => {
  const [topStories, setTopStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('/top-stories').then((response) => {
      setTopStories(response.data);
      setIsLoading(false); 
    });
  }, []);

  return (
    <>
      <Typography align='center' fontSize="34px" fontWeight="bold" padding="10px 10px">Top Stories</Typography>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <CircularProgress />
        </div>
      ) : (
        <StoryList stories={topStories} />
      )}
    </>
  );
};

export default Main;
