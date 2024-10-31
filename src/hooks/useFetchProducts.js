import { useState, useEffect } from "react";

function useFetchProduct(){
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data)=> setProducts(data.products))
        .catch((error) => setError(error));
    },[])

    return {products, error}
}
export default useFetchProduct