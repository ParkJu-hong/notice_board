import react, { useState, useEffect } from "react";
import {
    useAppDispatch,
    useAppSelector
} from "../app/hook";
import {
    changeLiveCategory,
    changeQnaCategory,
    changeComunityCategory,
    changeTechCategory,
    changeColumnCategory,
    selectMenu
} from '../features/menu/menuSlice'

const NavBar = () => {
    const dispatch = useAppDispatch();
    const menu = useAppSelector(selectMenu);

    useEffect(() => {
        console.log("useAppSelector(selectMenu) : ", menu);
    }, [menu])

    return (
        <>
            <div>
                <h1 onClick={() => {
                    /*
                        여기서 redux-toolkit을 사용해서 디스패치 액션을 생성해서
                        store에 있는 state를 바꿔서 바뀐 state에 따라 Main게시판이
                        컴포넌트로 바뀌도록 할 것

                        => dispatch가 안됌
                        
                    */
                }}>사는얘기</h1>
                <h1
                    onClick={() => {
                        console.log("실행됌");
                        dispatch(changeQnaCategory());
                    }}
                >QnA</h1>
                <h1>커뮤니티</h1>
                <h1>테크</h1>
                <h1>칼럼</h1>
            </div>
        </>
    );
}

export default NavBar;