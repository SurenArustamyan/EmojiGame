import Emoji1 from "../../assets/images/emoji1.png"
import Emoji2 from "../../assets/images/emoji2.png"
import Emoji3 from "../../assets/images/emoji3.png"
import Emoji4 from "../../assets/images/emoji4.png"
import Emoji5 from "../../assets/images/emoji5.png"
import Emoji6 from "../../assets/images/emoji6.png"
import Emoji7 from "../../assets/images/emoji7.png"
import Emoji8 from "../../assets/images/emoji8.png"
import Emoji9 from "../../assets/images/emoji9.png"
import Emoji10 from "../../assets/images/emoji10.png"
import Emoji11 from "../../assets/images/emoji11.png"
import Emoji12 from "../../assets/images/emoji12.png"
import Emoji13 from "../../assets/images/emoji13.png"
import Emoji14 from "../../assets/images/emoji14.png"
import Emoji15 from "../../assets/images/emoji15.png"
import Emoji16 from "../../assets/images/emoji16.png"
import Emoji17 from "../../assets/images/emoji17.png"
import Emoji18 from "../../assets/images/emoji18.png"
import Emoji19 from "../../assets/images/emoji19.png"
import Emoji20 from "../../assets/images/emoji20.png"
import Emoji21 from "../../assets/images/emoji21.png"
import Emoji22 from "../../assets/images/emoji22.png"
import Emoji23 from "../../assets/images/emoji23.png"
import Emoji24 from "../../assets/images/emoji24.png"
import Emoji25 from "../../assets/images/emoji25.png"
import { SET_HISTORY, SET_NEW_CLICKS, SET_NEW_STATE, SET_POPUP } from "../actions/actions"


const data = [
    {
        id:1,
        src:Emoji1,
    },
    {
        id:2,
        src:Emoji2,
    },
    {
        id:3,
        src:Emoji3,
    },
    {
        id:4,
        src:Emoji4,
    },
    {
        id:5,
        src:Emoji5,
    },
    {
        id:6,
        src:Emoji6,
    },
    {
        id:7,
        src:Emoji7,
    },
    {
        id:8,
        src:Emoji8,
    },
    {
        id:9,
        src:Emoji9,
    },
    {
        id:10,
        src:Emoji10,
    },
    {
        id:11,
        src:Emoji11,
    },
    {
        id:12,
        src:Emoji12,
    },
    {
        id:13,
        src:Emoji13,
    },
    {
        id:14,
        src:Emoji14,
    },
    {
        id:15,
        src:Emoji15,
    },
    {
        id:16,
        src:Emoji16,
    },
    {
        id:17,
        src:Emoji17,
    },
    {
        id:18,
        src:Emoji18,
    },
    {
        id:19,
        src:Emoji19,
    },
    {
        id:20,
        src:Emoji20,
    },
    {
        id:21,
        src:Emoji21,
    },
    {
        id:22,
        src:Emoji22,
    },
    {
        id:23,
        src:Emoji23,
    },
    {
        id:24,
        src:Emoji24,
    },
    {
        id:25,
        src:Emoji25,
    },
]

const initialState = {
    data,
    clicksId: [],
    popup:false,
    history:false,
}
function main(state = initialState,action){
    switch (action.type) {
        case SET_NEW_CLICKS:
            return{
                ...state,
                clicksId: action.payload
            }
        case SET_NEW_STATE:
            return{
                ...state,
                data: action.payload
            }
        case SET_POPUP:
            return{
                ...state,
                popup:action.payload
            }
        case SET_HISTORY:
            return {
                ...state,
                history:action.payload
            }
        default:
            return state;
    }
}

export default main