import React from "react";
import { Container, Paper, Typography } from "@material-ui/core";

export const Text = ({ text }) => {
  return (
    <Container maxWidth="md">
      <Paper square elevation="0">
        <Typography>{text}</Typography>
      </Paper>
    </Container>
  );
};
