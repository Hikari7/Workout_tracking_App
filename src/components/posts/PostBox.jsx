//TweetBox.jsにあたる
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  useTheme,
  styled,
} from "@mui/material";

function PostBox() {
  const theme = useTheme();

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#1B225A",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "gr#1B225A",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#EBDEF3",
      },
      "&:hover fieldset": {
        borderColor: "#B586D8",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1B225A",
      },
    },
  });

  return (
    <>
      <Container>
        <Box
          sx={{
            width: "80%",
            height: "auto",
            mx: "auto",
            mt: 4,
          }}
        >
          <Avatar
            sx={{
              justifyContent: "spaceBetween",
              mx: "auto",
            }}
          />
          {/* <TextField
            variant="outlined"
            placeholder="Record your progress"
            multiline
            rows={5}
            rowsmax={10}
            sx={{
              justifyContent: "spaceBetween",
              width: "100%",
              mx: "auto",
            }}
          ></TextField> */}
          <CssTextField
            // contrasttext
            id="Multiline Placeholder"
            label="Record your progress"
            multiline
            rows={4}
            sx={{
              mt: 4,
              justifyContent: "spaceBetween",
              width: "100%",
              mx: "auto",
            }}
          />
          <CssTextField
            id="outlined-multiline-static"
            label="Upload Image"
            rows={4}
            sx={{
              justifyContent: "spaceBetween",
              width: "100%",
              mx: "auto",
              mt: 2,
            }}
          />
          <Button
            variant="contained"
            sx={{
              display: "block",
              mt: 2,
              ml: "auto",
              textTransform: "none",
            }}
          >
            Record
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default PostBox;
