
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import Rating from '@mui/material/Rating';


const App = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    if (rating && review) {
      setReviews([...reviews, { rating, review }]);
      setRating(0);
      setReview('');
    }
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom textAlign="center" sx={{ mt: 4 }}>
        Customer Reviews
      </Typography>
      <Box sx={{ width: 300, margin: 'auto', mt: 5 }}>
        <Typography variant="h6" gutterBottom>
          Submit your review
        </Typography>
        <Rating
          name="customer-rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />
        <TextField
          label="Review"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={review}
          onChange={(e) => setReview(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        {reviews.map((review, index) => (
          <Paper key={index} sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">Rating: {review.rating}</Typography>
            <Typography variant="body1">{review.review}</Typography>
          </Paper>
        ))}
      </Box>
    </Container>
    
  );
};

export default App;



