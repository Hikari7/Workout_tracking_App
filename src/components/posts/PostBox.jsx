import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  styled,
} from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../config/configs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { doc, setDoc, Timestamp } from "firebase/firestore";

function PostBox({ displayName, username, avatar, verified }) {
  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [minuets, setMinuets] = useState("");
  const [record, setRecord] = useState("");
  const [image, setImage] = useState("");

  const sendPost = (e) => {
    //add datas to the firebase data
    e.preventDefault();
    date.toString();

    addDoc(collection(db, "posts"), {
      // displayName: "Hikari Kobe",
      // username: "hk_Vancouver",
      // // veritied: true,
      date: date,
      // date: Timestamp.fromDate(),
      // date: Timestamp.fromMills(),
      // date: date.getTime,
      image: image,
      hours: hours,
      minuets: minuets,
      text: record,
      timestanp: serverTimestamp(),
    });

    console.log(date);

    setDate("");
    setRecord("");
    setHours("");
    setMinuets("");
    setImage("");
  };

  // const theme = useTheme();

  const poppserSx = {
    "& .MuiPaper-root": {
      backgroundColor: "#fe6b8b",
    },
    "& .MuiCalendarPicker-root": {
      backgroundColor: "#EBDEF3",
    },
    "& .MuiPickersDay-dayWithMargin": {
      color: "rgb(229,228,226)",
      backgroundColor: "#9BBAE6",
    },
    "& .MuiTabs-root": { backgroundColor: "#9BBAE6" },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <form onSubmit={sendPost}>
            <Box>
              <DesktopDatePicker
                label="Date"
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={setDate}
                PopperProps={{ sx: poppserSx }}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "primary.main",
                          },
                          "&:hover fieldset": {
                            borderColor: "secondary.dark",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                        my: 1,
                      }}
                    />
                  );
                }}
                showDaysOutsideCurrentMonth
                // color="#EBDEF3"
              />
            </Box>
            <Box>
              <TextField
                required
                onChange={(e) => setHours(e.target.value)}
                value={hours}
                id="outlined-required"
                label="Hours"
                variant="standard"
                sx={{
                  ml: { md: 2 },
                  my: 1,
                }}
              />
              <TextField
                onChange={(e) => setMinuets(e.target.value)}
                value={minuets}
                required
                id="outlined-required"
                label="Minuets"
                variant="standard"
                sx={{
                  my: 1,
                  ml: 2,
                }}
              />
            </Box>

            <TextField
              onChange={(e) => setRecord(e.target.value)}
              value={record}
              id="Multiline Placeholder"
              label="Add any comments"
              multiline
              rows={4}
              sx={{
                mt: 2,
                justifyContent: "spaceBetween",
                width: "100%",
                mx: "auto",
              }}
            />
            <TextField
              onChange={(e) => setImage(e.target.value)}
              value={image}
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
              type="submit"
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
          </form>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}

export default PostBox;

/* ✅CSSTextFieldをやめたらonChangeイベントが発火するようになった、つら */
// const CssTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "#e1bee7",
//   },

//   "& .MuiInput-underline:after": {
//     borderBottomColor: "#B586D8",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#B586D8",
//     },
//     "&:hover fieldset": {
//       borderColor: "#B586D8",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#B586D8",
//     },
//   },
// });
