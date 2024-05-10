import { useSelector, useDispatch } from "react-redux"
import { dataActions } from "../store/data-slice";

export default function Landing(){

    const value = useSelector(state=>state.data.value);
    const dispatch = useDispatch();


    return (
        <div>
            <div>
                {value}
            </div>
            <div>
                <button onClick={()=>{
                    dispatch(dataActions.setValue({value : value+1}))
                }}>
                    increment
                </button>
                <button onClick={()=>{
                    dispatch(dataActions.setValue({value : value-1}))
                }}>
                    decrement
                </button>
            </div>
        </div>
    )
}