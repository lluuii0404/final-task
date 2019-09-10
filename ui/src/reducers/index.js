import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from './reducerAuth'
import user from './reducerUser'
import companies from './reducerCompany'

export default combineReducers({
    form: formReducer,
    auth,
    user,
    companies,
})
