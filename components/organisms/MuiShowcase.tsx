"use client";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function MuiShowcase() {
  const [value, setValue] = useState("Material UI in a Next.js app");

  return (
    <Stack spacing={3}>
      <Alert severity="info">
        MUI is useful when you want a mature component library with consistent accessibility and theming built in.
      </Alert>

      <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider" }}>
        <CardContent>
          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
            <Chip label="Button" color="primary" />
            <Chip label="TextField" color="secondary" />
            <Chip label="Card" variant="outlined" />
          </Stack>
          <Typography variant="h5" gutterBottom>
            MUI Demo Card
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            This example shows how a component library can live alongside your own atoms, molecules, and organisms.
          </Typography>
          <TextField
            fullWidth
            label="Editable demo text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </CardContent>
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button variant="contained">Primary action</Button>
          <Button variant="outlined">Secondary action</Button>
        </CardActions>
      </Card>

      <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider" }}>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Current value
          </Typography>
          <Typography variant="body1">{value}</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
