/* eslint-disable import/prefer-default-export */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MusicState from "../../../types/musicData"

const initialState: MusicState = {
  musicUrl:
    "https://res.cloudinary.com/reeelecs/video/upload/v1625838646/albums/001._Olivia_Rodrigo_-_drivers_license_yausbh.mp3",
  imageUrl:
    "https://res.cloudinary.com/reeelecs/image/upload/v1625846497/albums/Drivers_License_by_Olivia_Rodrigo_tsn93m.png",
  artist: "Olivia Rodriguez",
  musicName: "Driver License",
};

export const appData = createSlice({
  name: "musicPlaying",
  initialState,
  reducers: {
    addMusic: (state, action: PayloadAction<MusicState>) => {
      state.musicUrl = action.payload.musicUrl;
      state.imageUrl = action.payload.imageUrl;
      state.artist = action.payload.artist;
      state.musicName = action.payload.musicName;
    },
  },
});

export const { addMusic } = appData.actions;

export default appData.reducer;
