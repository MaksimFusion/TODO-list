import "./VisibilityFilter.css"
import {useDispatch, useSelector} from 'react-redux';
import {VISIBILITY_FILTER} from '../contants';
import {setFilter} from '../Redux/actions';
import { getCountNumber} from "../Redux/selector";

export const VisibilityFilter = () => {
    const dispatch = useDispatch();
    const { todos, visibilityFilter } = useSelector(state => state);
    const countNumber = getCountNumber(todos, visibilityFilter)
    return (

        <div className="filter">
            <label className="items">
                items left:{countNumber}
            </label>
            <div className="container">
            {Object.keys(VISIBILITY_FILTER).map(filterkey => {
                const currentFilter = VISIBILITY_FILTER[filterkey];
                return (
                    <div className="buttons">
                        <button className={`visibility-filter-${currentFilter}`}
                                onClick={() => dispatch(setFilter(currentFilter))}
                        >{currentFilter}</button>
                    </div>
                )
            })}
            </div>
        </div>

    )
}