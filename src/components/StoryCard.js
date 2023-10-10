import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease-in-out',
  alignContent:"center",
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 300,
}));

const StoryCard = ({ story }) => {
  return (
    <StyledCard>
      <Link href={story.url} target="_blank" rel="noopener noreferrer" underline="none">
        <StyledCardMedia
          component="img"
          image={story.multimedia[0].url}
          alt={story.title}
        />
        <CardContent>
        <Typography variant="h6" className="story-headline">
            {story.title}
          </Typography>
        </CardContent>
      </Link>
    </StyledCard>
  );
};

export default StoryCard;
