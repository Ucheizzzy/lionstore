import { createSlice } from '@reduxjs/toolkit'

const themes = {
  winter: 'winter',
  night: 'night',
}
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}
const initialState = {
  user: null,
  theme: getThemeFromLocalStorage(),
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { winter, night } = themes
      state.theme = state.theme === night ? winter : night
      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    },
  },
})

export const { toggleTheme } = userSlice.actions
export default userSlice.reducer
