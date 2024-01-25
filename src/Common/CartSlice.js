import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const ind = state.items.map(it=>it.card.info.id).indexOf(action.payload);
            console.log("index ::", ind);
            state.items.splice(ind, 1);
            // state.items.remove(action.payload);
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;