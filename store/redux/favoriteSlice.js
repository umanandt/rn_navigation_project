import { createSlice } from "@reduxjs/toolkit";

// we put some parts of slices liker a

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState:{
        ids: []
    },

    reducers:{
        addFavorite: (state, action)=>{
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) =>{
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

// splice to remove something from array
// indexof at particular index

export default favoriteSlice.reducer;
export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;

// exporting reducer so that we can access it in store
// and then two actions