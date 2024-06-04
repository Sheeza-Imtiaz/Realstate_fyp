import React, { useEffect, useState } from 'react'

const nproduct = () => {

    const [stated, upstated] = useState([]);
    useEffect(() => {
        const fetchit = async () => {
            const data = await fetch('http://127.0.0.104/product/products/');
            const resu = await data.json();
            // console.log(resu)
            upstated(resu);
        }
        fetchit();
    }, [])
    console.log(stated);
    return (
        <div className='container'>
            <div className='row'>
                {stated.map((item, val) => {
                    return (
                        <>
                            <div className='col-md-4 mt-5 newproduct'>
                                <div class="card">
                                    <img src={item.product_picture} class="card-img-top" alt="checkit" />
                                    <div class="card-body" key={val}>
                                        <h5 class="card-title">{item.name}</h5>
                                        <h5 class="card-title">{item.size}</h5>
                                        <h5 class="card-title">{item.color}</h5>
                                        <h5 class="card-title">{item.price}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default nproduct