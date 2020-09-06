import React, {useEffect} from 'react';
import './App.css';
import NewProduct from './components/NewProduct';
import Display from './components/Display';
import VisibilityFilter from './components/VisibilityFilter';
import {useDispatch} from 'react-redux'
import {initializeProducts} from './reducers/productReducer'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return(
      <div>
          <NewProduct />
          <VisibilityFilter />
          <Display />
      </div>
  )
}

export default App;

