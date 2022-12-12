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
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import dayjs from "dayjs";

function PostBox({ displayName, username, avatar, verified }) {
  const theme = useTheme();

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      //   color: "primary.contrastText",
      color: "#e1bee7",
    },
    
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B586D8",
      //   borderBottomColor: "primary.contrastText",
      //   borderBottomColor: "#bada55",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        // borderColor: "#EBDEF3",
        borderColor: "#B586D8",
      },
      "&:hover fieldset": {
        // borderColor: "#B586D8",
        // borderColor: "promary.dark",
        borderColor: "#B586D8",
      },
      "&.Mui-focused fieldset": {
        // borderColor: "#1B225A",
        // borderColor: "primary.conrtrastText",
        borderColor: "#B586D8",
      },
    },
  });

  return (
    <>
      <Container>
        <Box
          sx={{
            minWidth: "80%",
            height: "auto",
            mx: "auto",
            mt: 4,
          }}
        >
          <Avatar
            src={avatar}
            sx={{
              justifyContent: "spaceBetween",
              mx: "auto",
            }}
          />
          <p className="displayName">{displayName}</p>
          {/* <p className="userName">{username}</p> */}
          {/* ✅日付も入れられたらボーナスポイントだよね、、 */}
          <CssTextField
            required
            id="outlined-required"
            label="Hours"
            defaultValue="1"
            variant="standard"
            sx={{
              mt: 4,
              ml: { xs: 2 },
            }}
          />
          <CssTextField
            required
            id="outlined-required"
            label="Minuets"
            defaultValue="30"
            variant="standard"
            sx={{
              mt: 4,
              ml: 2,
            }}
          />
          <CssTextField
            // contrasttext
            id="Multiline Placeholder"
            label="Record your progress"
            multiline
            rows={4}
            sx={{
              mt: 2,
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
              my: 4,
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
