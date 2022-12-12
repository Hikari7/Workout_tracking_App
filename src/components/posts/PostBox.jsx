//TweetBox.jsにあたる
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
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import dayjs from "dayjs";

function PostBox({ displayName, username, avatar, verified }) {
  const [record, setRecord] = useState("");
  const [hours, setHours] = useState(1);
  const [minuets, setMinuets] = useState(30);
  const [image, setImage] = useState("https://source.unsplash.com/random");

  // const onChangeRecord = (e) => {
  //   setRecord(e.target.value);
  // };

  const sendPost = (e) => {
    //add datas to the firebase data
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      // displayName: "Hikari Kobe",
      // username: "hk_Vancouver",
      // // veritied: true,
      image: image,
      hours: 1,
      minuets: 30,
      text: record,
      timestanp: serverTimestamp(),
    });

    setRecord("");
    setImage("");
  };

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#e1bee7",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#B586D8",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#B586D8",
      },
      "&:hover fieldset": {
        borderColor: "#B586D8",
      },
      "&.Mui-focused fieldset": {
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
          {/* ✅CSSTextFieldをやめたらonChangeイベントが発火するようになった、つら */}
          <TextField
            // contrasttext
            onChange={(e) => setRecord(e.target.value)}
            value={record}
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
          <TextField
            onChange={(e) => setImage(e.target.value)}
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
            onClick={sendPost}
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
