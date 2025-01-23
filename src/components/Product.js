import {useParams} from "react-router-dom";
import {useLocation} from "react-router-dom";

export default function Product() {
    // let params = useParams();
    const {state} = useLocation();
    return (
        <div>
            <h3>Id selected: {state.categoryId} </h3>
        </div>
    );
}
