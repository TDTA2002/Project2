import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from "@stores/slices/products.slice";
import "./Serach.scss"
import navIcon3 from '../img/search.svg';

import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
function Serach() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
        <>
            <Navbar.Collapse id="basic-navbar-nav" variant="primary" onClick={handleShow} >
                <div className="social-icon">
                    <a ><img src={navIcon3} /></a>
                </div>
            </Navbar.Collapse>
            <div className='Cart'>
                <Offcanvas show={show} onHide={handleClose} placement="top" style={{ height: "50% " }}>
                    <Offcanvas.Header closeButton style={{ display: "flex", justifyContent: "center" }}>
                        <Offcanvas.Title>
                            <div className="input-group">
                                <button type="button" className="btn btn-outline" style={{ position: "absolute", border: "none", alignItems: "center" }}>
                                    <span class="material-symbols-outlined">
                                        search
                                    </span>
                                </button>
                                <input
                                    style={{ background: "#f6f5f3", border: "none", borderRadius: "0.25rem", padding: "0 1rem 0 2.75rem", width: "600px", height: "40px", position: "relative" }}
                                    onChange={handleChange}
                                    type="search"
                                    className="form-control rounded"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                            </div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                        <div className='allstem'>
                            {showSearch ? (

                                productStore.searchData?.map((item) => (

                                    <div className='searchItem' key={item.id} >
                                        <a href={"/detail/" + item.id} target="_self">
                                            <div className='searchItemin'>
                                                <img src={item.url} alt={item.name} style={{ width: "200px", height: "auto" }} />
                                                <div>
                                                    <p>{item.name}</p>
                                                    <p>${item.price}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                ))
                            ) : (
                                <div className='nearsearch'>
                                    Search something
                                </div>
                            )}
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div >
        </>
    );
}

export default Serach;