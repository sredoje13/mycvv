import { createSlice,configureStore } from "@reduxjs/toolkit";

const sliderimage=createSlice({
    name:"sliderimage",
    initialState:{item:{},click:false},
    reducers:({
        clickondot(state,action){
        const currdot=action.payload
        console.log(currdot)
        state.item=currdot
        state.click=true
        },
    unclick(state,action){
        
        state.click=false  
    }})

})

const scroll=createSlice({
    name:"scroll",
    initialState:{item:{}},
    reducers:{
        scrollto(state,action){
       state.item=action.payload
       console.log(state.item)
        }
    }
})
const shownavigation=createSlice({
  name:"shownavigation"  ,
  initialState:{navshow:false},
  reducers:({
    shownavig(state,active){
    state.navshow=!state.navshow
    }
  })

})
export const store=configureStore({
    reducer:{
        sliderimage:sliderimage.reducer,
        scroll:scroll.reducer,
        shownavigation:shownavigation.reducer
    }
})
export const shownavigate=shownavigation.actions
export const scrolling=scroll.actions
export const slider=sliderimage.actions