import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes',async () =>
{
    const res = await fetch('https://6a0393fe2afe8349b4b55a63.mockapi.io/items');
    const data = await res.json();
    return data;
})




export const recipesSlice = createSlice({
    name:'recipes',
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder) =>
    {
        builder.addCase(fetchRecipes.pending,(state,action) =>
        {
            state.loading = true;
        })
        builder.addCase(fetchRecipes.fulfilled,(state,action) =>
        {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchRecipes.rejected,(state,action) =>
        {
            state.loading = false;
            state.error = null
        })
    }

    })
export default recipesSlice.reducer;
