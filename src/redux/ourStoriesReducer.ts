import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { OurStoryProps } from 'pages/OurStory/ourStoryArray'

const initialState: OurStoryProps[] = []

export const fetchOurStories = createAsyncThunk<OurStoryProps[], undefined>(
    'ourStories/fetchOurStories',
    async () => {
        const response = await axios.get(
            'https://638db19e4190defdb74a6f0d.mockapi.io/articales?page=1'
        )

        return response.data
    }
)

export const ourStoriesSlice = createSlice({
    name: 'ourStories',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchOurStories.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    },
})

export default ourStoriesSlice.reducer
