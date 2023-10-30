/** @format */

import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  PersonAddAlt1,
  Photo,
  VideoCameraFront,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add'
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}>
        <IconButton>
          <Fab color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={3}
          bgcolor={"background.default"}
          color={"text.primary"}>
          <Typography
            variant='h6'
            color='gray'
            fontWeight={300}
            textAlign='center'>
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              alt='Agnes Walker'
              src='https://material-ui.com/static/images/avatar/6.jpg'
              sx={{ width: 30, height: 30 }}
            />
            <Typography pl={2}>John Doe</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id='standard-multiline-static'
            label='Multiline'
            multiline
            rows={3}
            defaultValue="What's on your mind?"
            variant='standard'
          />
          <Stack direction='row' gap={1} mb={3} mt={2}>
            <EmojiEmotions color='primary' />
            <Photo color='secondary' />
            <VideoCameraFront color='success' />
            <PersonAddAlt1 color='error' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'>
            <Button>Post</Button>
            {/* <Button>Two</Button> */}
            <Button
              sx={{
                width: "100px",
              }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
