import "./VisibilityFilter.css"
import {useDispatch} from 'react-redux';
import {VISIBILITY_FILTER} from '../contants';
import {setFilter} from '../Redux/actions';

export const VisibilityFilter = () => {
    const dispatch = useDispatch();
    return (

        <div className="filter">
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

    )
}