import {useParams} from "react-router-dom";

export default function Product() {
    let params = useParams();
    return (
        <div>
            <h3>Id selected: {params.categoryId} </h3>
        </div>
    );
}
