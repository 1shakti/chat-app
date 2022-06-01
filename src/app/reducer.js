import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: {},
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addUser(state, action) {
            const { name, userId } = action.payload;
            state.users[userId] = { name, chats: []};
        },
        newMessage(state, action) {
            const { id, userId, time, message } = action.payload;
            state.users[userId].chats.push({ id, time, message });
        },
        starMessage(state, action) {
            const { userId, id } = action.payload;
            const message = state.users[userId].chats.find((msg) => msg.id === id);
            message.isStarred = !message.isStarred;
        },
        deleteMessage(state, action) {
            const { userId, id } = action.payload;
            const index = state.users[userId].chats.findIndex((msg) => msg.id === id);
            state.users[userId].chats.splice(index, 1);
        }
    }
});


export const { addUser, newMessage, starMessage, deleteMessage } = chatSlice.actions;

export default chatSlice.reducer;