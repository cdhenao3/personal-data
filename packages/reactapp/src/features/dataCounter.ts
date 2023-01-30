import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { initialValues as initialPersonal } from "components/DataPersonal";
import { initialValues as initialAcademic } from "components/DataAcademic";
import { URL } from "./../constants";

export const dataCounter = createSlice({
    name: 'data',
    initialState: {
        personal: initialPersonal,
        academic: initialAcademic,
        data: [],
        error: null
    },
    reducers: {
        savePersonalData: (state, action) => {
            state.personal = action.payload
        },
        saveAcademicData: (state, action) => {
            state.academic = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.error = action.payload.error;
            state.data = action.payload.data.map((data: any) => ({
                ...data.personalData,
                educationLevel: data.educationLevel,
                educationCenter: data.educationCenter
            }))
        })
    }
})

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    try {
        const response = await axios.get(`${URL}/personal`)

        return { data: response.data }
    } catch (error: any) {
        return {
            data: [],
            error: error.message
        }
    }
})

export const { saveAcademicData, savePersonalData } = dataCounter.actions

export default dataCounter.reducer