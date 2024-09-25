import React, { useState } from 'react';
import { Box, Typography, Button, TextField, IconButton, Paper } from '@mui/material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import EditIcon from '@mui/icons-material/Edit';
import BookIcon from '@mui/icons-material/Book';
import TimerIcon from '@mui/icons-material/Timer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'
// import DeleteIcon from '@mui/icons-material';
// import GoogleIcon from '@mui/icons-material';

const ChatUI = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
 
   
  const handleBigBangReply = () => {
    setResponse("The Big Bang was a huge explosion that created the universe a long, long time ago. It was the start of everything—stars, planets, and even us!");
  };

  const handleGiftIdeasReply = () => {
    setResponse("Here are 10 gift ideas: 1) Personalized mug, 2) Book, 3) Skincare set, 4) Handmade candle, 5) Bluetooth speaker, 6) Board game, 7) Cozy blanket, 8) Succulent plant, 9) Art supplies, 10) Fitness tracker.");
  };

  const handleChatGPTTitlesReply = () => {
    setResponse("Here are 5 catchy titles for your writing: 1) 'Revolutionizing Communication with ChatGPT', 2) 'ChatGPT: The Future of AI Conversations', 3) 'How ChatGPT Transforms Human-AI Interaction', 4) 'The Power of ChatGPT for Everyday Solutions', 5) 'Unlocking Creativity with ChatGPT'.");
  };
 function onSuccess(credentialResponse) {
  const decoded =jwtDecode(credentialResponse?.credential)
        console.log(decoded);
        console.log(decoded.given_name)
 }

 function onError(){
  console.log ("Login Failed")
 }
  return (
    <Box sx={{ width: '100%', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      {/* <GoogleIcon/> */}
      <div style={{ display:"flex", justifyContent:"space-between", margin:"1.9rem"}}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
      
      </Typography>
   
      
      <GoogleLogin
      onSuccess={onSuccess}
      onError={onError}
     />
 {/* <Typography variant="h4" sx={{ marginBottom: '20px' }}> */}
 {/* Hello {decoded.given_name}  </Typography> */}
</div> 

      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign:"center" }}>
      How Can Help Today,
      </Typography>
    
      <Box sx={{ marginBottom: '20px', width:"50" }}>
        <Button variant="contained" fullWidth onClick={handleBigBangReply}>
          Tell me something about the Big Bang so that I can explain it to my 5-year-old child →
        </Button>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Button variant="contained" fullWidth onClick={handleGiftIdeasReply}>
          Please provide me with 10 gift ideas for my friend's birthday →
        </Button>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Button variant="contained" fullWidth onClick={handleChatGPTTitlesReply}>
          Generate five catchy titles for my writing about the use case of ChatGPT →
        </Button>
      </Box>
      <Box sx={{ marginTop: '20px', padding: '10px' }}>
        {response && (
          <Paper elevation={3} sx={{ padding: '15px' }}>
            <Typography variant="body1">{response}</Typography>
          </Paper>
        )}
      </Box>
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', marginTop: '20px' }}>
        <IconButton>
          <ContentCutIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <BookIcon />
        </IconButton>
        <IconButton>
          <TimerIcon />
        </IconButton>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </Box>
      <Box sx={{ marginTop: '10%', width:"96%", display:"flex" }}>
        <TextField fullWidth placeholder="Type a message..." />
        <Button style={{backgroundColor:"blue", color:"white", marginLeft:"1rem"}}>Send</Button>
      </Box>
    </Box>
  );
};

export default ChatUI;
