import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FILMS_LIST } from "../../constants/endpoints";
import { IFilm } from "../../types/film";

interface IInitialState {
  isLoading: boolean;
  films: IFilm[];
  filmDetails: any;
  error: any;
}

interface IFilmParams {
  id?: any;
  genre?: number | null | undefined | string;
  value?: any;
  order?: string;
  page?: string | null;
}

export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async (
    { genre, value, order, page }: IFilmParams,
    rejectedWithValue: any
  ) => {
    try {
      const response = await fetch(
        `${FILMS_LIST}?keyword=${!!value ? value : "%20"}&order=${
          !!order ? order : "NUM_VOTE"
        }&genres=${!!genre ? genre : ""}&page=${!!page ? page : 1}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "0ad61c67-5efd-4b69-b20e-77555bcc8f8e",
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      ).then((res) => res.json());

      return response.items;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const fetchFilmDetailsAsync = createAsyncThunk(
  "films/fetchFilmDetailsAsync",
  async ({ id }: IFilmParams, rejectedWithValue: any) => {
    try {
      const response = await fetch(`${FILMS_LIST}/${id}`, {
        method: "GET",
        headers: {
          "X-API-KEY": "0ad61c67-5efd-4b69-b20e-77555bcc8f8e",
          accept: "application/json",
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

const initialState: IInitialState = {
  isLoading: false,
  films: [],
  filmDetails: null,
  error: null,
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilms.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFilms.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.films = action.payload;
    },
    [fetchFilms.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchFilmDetailsAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFilmDetailsAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.filmDetails = action.payload;
    },
    [fetchFilmDetailsAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default filmsSlice.reducer;
