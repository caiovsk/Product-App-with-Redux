import React from 'react'
import {useDispatch} from 'react-redux'
import {filterChange} from '../reducers/filterReducer'

const VisibilityFilter = () => {
    const dispatch = useDispatch()
    return(
        <div>
            all <input type="radio" name="filter"
                onChange={() => dispatch(filterChange('ALL'))} />
            available <input type="radio" name="filter"
                onChange={() => dispatch(filterChange('AVAILABLE'))} />
            sold-out <input type="radio" name="filter"
                onChange={() => dispatch(filterChange('SOLD-OUT'))} />
        </div>
    )
}

export default VisibilityFilter