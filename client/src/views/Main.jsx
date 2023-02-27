import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"

const Main = () => {
    const [store, setStore] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/store')
            .then(res => setStore(res.data))
            .catch(err => console.log(err));
    }, []);
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/store/${deleteId}`)
            .then(res => {
                const filteredStore = store.filter(eachStore => eachStore._id!== deleteId);
                setStore(filteredStore);
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h1>Store Finder</h1>
            <h3>Find Store in You Area!!</h3>
            <table className='table table-stripe'>
                <thead>
                    <tr>
                        <th>Store</th>
                        <th>Store NUmber</th>
                        <th>Open</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {store.map((eachStore, idx) => {
                        return <tr key={idx}>
                            <td><Link to={`/store/${eachStore._id}`}>{eachStore.store}</Link></td>
                            <td>{eachStore.storeNumber}</td>
                            <td>{eachStore.isOpen?"Yes":"No"}</td>
                            {/* <td><Link to={`/store/edit/${eachStore._id}`} className='btn btn-dark'>Edit</Link> */}
                            <td>
                            <button className='btn btn-danger' onClick={(e)=> handleDelete(eachStore._id)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Link to="/store/new">Can't find your Store?</Link>
        </div>
    )
}
export default Main;