import useFetchProduct from '../hooks/useFetchProducts'
import ProductItem from'./ProductItem';
function ProductList(){
    const{products, error} = useFetchProduct();
    
    function groupByCategory(products){
        return products.reduce((categories, product) =>{
            const category = product.category;
            if(!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(product)
            return categories;
        }, {});
    }

    const productsByCategory = groupByCategory(products);
    if(error){
        return <p>Error fetching products: {error.message}</p>
    }
    return(
        <div className="product-list">
            {Object.keys(productsByCategory).map((category)=> (
                <div key={category} className="category-section">
                    <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                    <div className="products">
                        {productsByCategory[category].map((product)=>(
                            <div key={product.id} className="product-item">
                                <ProductItem  product={product}></ProductItem>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProductList;
