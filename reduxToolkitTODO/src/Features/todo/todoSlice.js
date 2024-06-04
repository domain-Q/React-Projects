import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};
export const todoSlice = createSlice({
  name: "todo", // inbuilt property
  initialState,
  reducers: {
    // isme aata ha properties and function
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // payload is object
      };
      state.todos.push(todo);
    }, // isme hume hamesha do cheese milengi ek toh milega  state aur doosa milega hume actioon
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {addtodo,removetodo} =todoSlice.actions
export default todoSlice.reducer