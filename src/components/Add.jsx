/** @format */

import { Fab, IconButton, Modal, Tooltip, styled } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
        <Box width={400} height={280} bgcolor='white' p={3} borderRadius={3}>
          hello
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
