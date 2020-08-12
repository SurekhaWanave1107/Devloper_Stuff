
const redux = require('redux')
const reduxLogger= require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const logger=reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAME = 'BUY_ICECREAME'
const ADD_FLAVOUR = 'ADD_FLAVOUR'



function buyCake(){
   
    return {
        type: BUY_CAKE 
    }
}
function addFlavour(){
    return{
        type: ADD_FLAVOUR
    }
}

function buyIceCreame(){
  
    return {
        type:BUY_ICECREAME
    }
}


const initialCakeState= {
    numOfCakes: 10,
    flavourOfCake:3
}

const initialIceCreameState={
    numOfIceCreame: 20
}



const cakeReducer = (state=initialCakeState,action) => {
     switch(action.type){
         case BUY_CAKE: return {
            ...state,
             numOfCakes : state.numOfCakes - 1
         }
         case ADD_FLAVOUR: return{
             ...state,
             flavourOfCake:state.flavourOfCake + 1
         }
         default: return state
     }
}


const iceCreameReducer = (state= initialIceCreameState,action) =>{
    switch(action.type){
        case BUY_ICECREAME : return{
            ...state,
            numOfIceCreame :  state.numOfIceCreame - 1
        }
        default : return state

    }

}


const rootReducer= combineReducers({
    cake:cakeReducer,
    iceCreame: iceCreameReducer
})


const store = createStore(rootReducer)
console.log('initial state', store.getState())
store.subscribe(() => {console.log('updated state', store.getState())})
store.dispatch(buyCake())

store.dispatch(addFlavour())
store.dispatch(buyCake())
//store.dispatch(buyIceCreame())

const unsubscribe = store.subscribe
