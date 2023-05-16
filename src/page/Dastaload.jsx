import { Box, List } from "@mui/material";
import React from "react";
import Lists from "../components/Lists";
import Button from "@mui/material/Button";
import AddCircle from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import "../page/style/dastaload.css";
function Dastaload({ setTodoId }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: "70px", width: "85%", marginRight: "40px" }}>
      <h1>Product List</h1>
      <Lists setTodoId={setTodoId} />
    </Box>
  );
}

export default Dastaload;
