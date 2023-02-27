import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

export const Detail = () => {
    const {id} = useParams();
    const [store, setStore] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/store/${id}`)
        .then(res => setStore(res.data))
        .catch(err => console.log(err)
    )
    }, [id]);
    return (
        <div>
            <h1>Store Finder</h1>
            <hr/>
            {
                store?
                <div>
                    <h3>Store: {store.store}</h3>
                    <h3>Store Number: {store.storeNumber}</h3>
                    <h3>Open: {store.isOpen?"Store Open":"Store Closed"}</h3>
                </div>:<h2>Loading...</h2>
            }
            <Link to="/" className='btn btn-secondary'>Home</Link>
            <Link to={`/store/edit/${id}`} className='btn btn-success'>Edit Store</Link>
        </div>
    )
}

export default Detail;
