const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.items = [];
    },
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    updateQuantiy: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);

      if (payload.type === "increment") {
        item.quantity += 1;
      } else if (payload.type === "decrement") {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
    deleteItem: (state, { payload }) => {
      const restItems = state.items.filter((item) => item.id != payload.id);
      state.items = restItems;
    },
  },
});

export const { addToCart, updateQuantiy, deleteItem, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
