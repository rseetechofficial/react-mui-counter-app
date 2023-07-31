import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const increment = (value) => {
    setCount(value);
  };

  const decrement = (value) => {
    setCount(value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box> <Typography sx={{ fontSize: "20px", fontWeight: 700, my: 5 }}>Counter App</Typography> </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: 700, marginRight: 5, marginTop: 10 }}>
          {count}
        </Typography>
        {count > 0 && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setCount(0);
            }}
            sx={{ height: "30px", marginTop: 10 }}
          >
            {" "}
            Reset{" "}
          </Button>
        )}
      </Box>

      <Box sx={{ marginTop: 20 }}>
        <Button
          variant="contained"
          onClick={() => increment(count + 2)}
          sx={{
            borderRadius: "2px",
            marginRight: 5,
            textTransform: "capitalize",
          }}
        >
          Increment
        </Button>
        <Button
          disabled={count > 2 ? false : true}
          variant="contained"
          onClick={() => decrement(count - 3)}
          sx={{
            borderRadius: "2px",
            textTransform: "capitalize"
          }}
        >
          Decrement
        </Button>
      </Box>
    </Box>
  );
}
