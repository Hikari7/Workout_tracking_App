import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  //   image: "",
  //   hours: 0,
  //   minuets: 0,
  //   text: "",
  //   timestanp:"",
  //userId:""
  posts: [
    {
      image: "",
      hours: 0,
      minuets: 0,
      text: "",
      timestanp: "",
      userId: "",
    },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      // 中身の処理をかく
      const addPost = action.payload;
    },
  },
});

export const store = configureStore({
  refucer: {
    post: postSlice.reducer,
  },
});

export const { setPost } = postSlice.actions;

export default postSlice.reducer;
