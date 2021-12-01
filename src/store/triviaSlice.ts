import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from "../models/IQuestion";



export const fetchTriviaCollectionAsync = createAsyncThunk(
	'trivia/fetchCollection',
	async () => {
		const response = await fetch('/questions.json');
		return await response.json();
	}
);


export const triviaSlice = createSlice({
    name: 'trivia',
    initialState: {
        items: new Array(),
       
        userAnwers: new Array(5),
        index: 0
    },
    reducers: {
        resetUserAnswer: (state) => {
            state.userAnwers = new Array(5);
        },

        addUserAnswer: (state, action: PayloadAction<number>) => {
            state.userAnwers[state.index] = action.payload;
        },
        changeIndex: (state, action: PayloadAction<number>) => {
            state.index = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchTriviaCollectionAsync.fulfilled,
                (state, action: PayloadAction<IQuestion[]>) => {
                    state.items = action.payload;
                }
            );
    },
});
export  const {addUserAnswer, changeIndex, resetUserAnswer} = triviaSlice.actions;
export default triviaSlice.reducer;