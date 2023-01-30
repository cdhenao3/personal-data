import { configureStore } from '@reduxjs/toolkit'

import dataCounter from 'features/dataCounter'

export const store = configureStore({
    reducer: {
        data: dataCounter
    },
})

export type RootState = ReturnType<typeof store.getState>