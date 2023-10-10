import React from 'react';
import StoryCard from './StoryCard';
import { styled } from '@mui/material/styles';

const StyledStoryListContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center', 
});

const StyledStoryList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', 
  gap: '16px',
  maxWidth: '1200px', 
});

const StoryList = ({ stories }) => {
  return (
    <StyledStoryListContainer>
      <StyledStoryList>
        {stories.map((story) => (
          <StoryCard key={story.url} story={story} />
        ))}
      </StyledStoryList>
    </StyledStoryListContainer>
  );
};

export default StoryList;
