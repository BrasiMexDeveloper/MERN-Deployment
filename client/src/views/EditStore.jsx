import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate,Link} from 'react-router-dom';


const EditStore = () => {
    const navigate = useNavigate();
    const [store, setStore] = useState('');
    const [storeNumber, setStoreNumber] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/store/${id}`)
        .then(res => {
            const store = res.data;
            setStore(store.store);    
            setStoreNumber(store.storeNumber);
            setIsOpen(store.isOpen);
        })
        .catch(err => console.log(err));

    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/store/edit/${id}`, {store, storeNumber,isOpen})
        .then(res => navigate(`/store/${id}`))
        .catch(err => console.log(err));
    }
    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/api/store/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Store Finder</h1>
            <form className='form' onSubmit={handleSubmit}>
                <p>
                    <label>Store</label>
                    <input type='text' 
                    name='store' 
                    className='form-control'
                    value={store} 
                    onChange={e => {setStore(e.target.value)}}/>
                </p>
                <p>
                    <label>Store Number</label>
                    <input type='text' 
                    name='storeNumber' 
                    className='form-control'
                    value={storeNumber}  
                    onChange={e => {setStoreNumber(e.target.value)}}/>
                </p>
                <p>
                    <label>Open</label>
                    <input type='checkbox' 
                    name='isOpen' 
                    checked={isOpen} 
                    onChange={e => {setIsOpen(e.target.value)}}/>
                </p>
                <button type="submit" className='btn btn-success'>Edit Store</button>
                <Link to="/" className='btn btn-secondary'>Home</Link>
                <button type="button" className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}

export default EditStore;
