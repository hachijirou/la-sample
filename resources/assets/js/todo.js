import { createStore, combineReducers } from 'redux'

// Action Creator
function addTodo(text) {
    return { type: 'ADD_TODO', text }
}

function completeTodo(id) {
    return { type: 'COMPLETE_TODO', text }
}

function setVisibilityFilter(filter) {
    return { type: 'SET_VISIBILITY_FILTER', text }
}

// Reducer
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { text: action.text, completed: false }
            ]
        case 'COMPLETE_TODO':
        default:
            return state
}

function visibilityFilter(state = 'SHOW_ALL', action) {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }

}

const todoApp = combineReducers({ todos, visibilityFilter })

const initialState = {
    todos: [
        {
            text: 'WEB+DB PRESSの原稿書く',
            completed: true
        },
        {
            text: '燃えるゴミを捨てる',
            completed: false
        }
    ],
    visibilityFilter: 'SHOW_ALL'
}

const store = createStore(todoApp, initialState)
store.subscribe(() => console.log(store.getState()))

// Actionのディスパッチ
store.dispatch(addTodo('電球を替える'))
store.dispatch(addTodo('公共料金を払う'))
store.dispatch(completeTodo(2))
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
