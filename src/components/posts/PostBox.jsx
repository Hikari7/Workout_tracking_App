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

function PostBox() {
  //   const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  //   const handleChange = (newValue) => {
  //     setValue(newValue);
  //   };
  const theme = useTheme();

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#1B225A",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1B225A",
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

          <CssTextField
            required
            id="outlined-required"
            label="Hours"
            defaultValue="1"
            variant="standard"
            sx={{
              mt: 4,
              ml: { md: 2 },
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
              my: 2,
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

{
  /* <TextField
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
          ></TextField> */
}
{
  /* <TimePicker
            label="Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          /> */
}
