import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export type MenuState = {
    menu: string;
}

const initialState: MenuState = {
    menu: '사는얘기'
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        changeLiveCategory: state => { "사는 얘기" },
        changeQnaCategory: state => { "QnA" },
        changeComunityCategory: state => { "커뮤니티" },
        changeTechCategory: state => { "테크" },
        changeColumnCategory: state => { "칼럼" },
    }
})

export const {
    changeLiveCategory,
    changeQnaCategory,
    changeComunityCategory,
    changeTechCategory,
    changeColumnCategory
} = menuSlice.actions;

export const selectMenu = (state : RootState) => state.menus.menu;

export default menuSlice.reducer;