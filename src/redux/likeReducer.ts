import { createSlice } from '@reduxjs/toolkit'

type likeState = {
    isLike: {
        [id: number]: boolean
    }
    disLike: {
        [id: number]: boolean
    }
    countLike: number

    countDisLike: number
}

const initialState: likeState = {
    isLike: { 1: false },
    disLike: { 1: false },
    countLike: 0,
    countDisLike: 0,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            isLike: { [action.payload]: true },
            disLike: { [action.payload]: false },
            countLike: state.countLike + 1,
            countDisLike: state.countDisLike > 0 ? state.countDisLike - 1 : 0,
        }),
        removeLike: (state, action) => ({
            ...state,
            isLike: { [action.payload]: false },
            disLike: { [action.payload]: true },
            countDisLike: state.countDisLike + 1,
            countLike: state.countLike > 0 ? state.countLike - 1 : 0,
        }),
    },
})

export const { addLike, removeLike } = likeSlice.actions
export default likeSlice.reducer
