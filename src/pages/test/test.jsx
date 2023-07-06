import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from "../../stores/slices/products.slice";

export default function Test() {
    const dispatch = useDispatch();
    const userLoginStore = useSelector(store => store.userLoginStore);
    const productStore = useSelector(store => store.productStore);
    useEffect(() => {
        dispatch(productActions.findAllProducts());
    }, []);
    const [showSearch, setShowSearch] = useState(false);
    const [timeOutTarget, setTimeOutTarget] = useState(null);

    const handleChange = (e) => {
        clearTimeout(timeOutTarget);
        setTimeOutTarget(setTimeout(() => {
            if (!userLoginStore.loading) {
                if (e.target.value !== "") {
                    setShowSearch(true);
                    dispatch(productActions.searchProductByName(e.target.value));
                } else {
                    setShowSearch(false);
                }
            }
        }, 500));
    };

    console.log("search", productStore.searchData);

    return (
        <div>
            <input
                onChange={handleChange}
                type='text'
                className='search-item'
                placeholder='...Search'
            />
            {showSearch ? (
                productStore.searchData?.map((item) => (
                    <div className='searchItem' key={item.id}>
                        <img width='100px' height='100px' src={item.url} alt={item.name} />
                        <div>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))
            ) : (
                null
            )}
        </div>
    );
}
