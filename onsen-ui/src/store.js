import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import homeReducer from './pages/home/homeReducer'
import loginReducer from './components/loginModal/loginReducer'
import {adapterReducer} from './adapterService/adapterReducer'
import {customToastReducer} from './components/customToast/customToastReducer' // eslint-disable-line no-unused-vars
import metadataTreeReducer from './components/metadataTree/metadataTreeReducer'
import projectListReducer from './pages/projectList/projectListReducer'
import newProjectReducer from './components/addProject/addProjectReducer'
import projectDialogReducer from './components/projectDialog/projectDialogReducer'
import projectPropertiesReducer from './pages/projectProperties/projectPropertiesReducer'
import conformationDialogReducer from './components/conformationDialog/conformationDialogReducer'

let middlewares = []

middlewares.push(thunk)

const showLogs = true

// if (process.env.NODE_ENV !== 'production') {
// 	if (showLogs) {
// 		middlewares.push(createLogger({
// 		  collapsed: true,
// 		  predicate: (getState, action) => action.type !== 'UPDATE_BBOX'
// 		}));
// 	}
// }
if (showLogs) {
	middlewares.push(createLogger({
		collapsed: true,
		predicate: (getState, action) => action.type !== 'UPDATE_BBOX'
	}));
}

const reducer = combineReducers({
	home: homeReducer,
	login: loginReducer,
	adapter: adapterReducer,
	customToast:customToastReducer,
	metadataTree:metadataTreeReducer,
	projectList: projectListReducer,
	newProject: newProjectReducer,
	projectDialog:projectDialogReducer,
	project: projectPropertiesReducer,
	conformationDialog:conformationDialogReducer
})

export function getStore(preloadedState) {
	return createStore(reducer, preloadedState,
		applyMiddleware(...middlewares)
	);
}
