import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductProps } from "../home"
import ExtendedCard from "../../components/extendedCard/extendedCard"
import "./style.css"

export function Produto() {
    const { id } = useParams()
    const [product, setProduct] = useState<ProductProps>()
    
    useEffect(() => {
        function getProduct(id: string | undefined) {
            const url =`https://api.themoviedb.org/3/movie/${id}?api_key=6ae684194ce31c3d3494c66057593caa`
            fetch(url)
            .then(response => response.json())
            .then((data) => {
                setProduct(data)
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
        getProduct(id)
    }, [])

    return(
        <div className="center">
            <ExtendedCard 
                id={product?.id}
                title={product?.title}
                overview={product?.overview}
                release_date={product?.release_date}
                vote_average={product?.vote_average}
                media_type={product?.media_type}
                poster_path={product?.poster_path}
            />
        </div>
    )
}
