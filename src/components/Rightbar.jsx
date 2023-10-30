/** @format */

import { Box } from "@mui/system";
import React from "react";

function Rightbar() {
  return (
    <Box
      bgcolor='orange'
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>
      Rightbar
    </Box>
  );
}

export default Rightbar;
