import React, {useState} from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';

export const CreateStore = () => {
    const navigate = useNavigate();
    const [store, setStore] = useState('');
    const [storeNumber, setStoreNumber] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [errors, setErrors] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/store', {store, storeNumber, isOpen})
        .then(res => {
            const newStore = res.data;
            navigate(`/store/${newStore._id}`);
        })
        .catch(err => {
            const errors = err.response.data.errors;
            const errorArr = [];
            for(const key in errors) {
                errorArr.push(errors[key].message);
            }
            setErrors(errorArr);
        });
    }
    return (
        <div>
            <h1>Stor Finder</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Store Name</label>
                    <input type='text'
                    className='form-control' 
                    name='store'
                    value={store} 
                    onChange={(e) => setStore(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Store Number</label>
                    <input type='text' 
                    className='form-control' 
                    name='storeNumber'
                    value={storeNumber} 
                    onChange={(e) => setStoreNumber(e.target.value)}/>
                </div>
                <div className='from-group'>
                    <label>Open?</label>
                    <input type='checkbox'  
                    name='isOpen'
                    checked={isOpen} 
                    onChange={e => setIsOpen(e.target.checked)}/>
                </div>
                <button type='submit' className='btn btn-primary'>Add a New Store</button>
            </form>
            <Link to="/" className='btn btn-secondary'>Home</Link>
            {errors.map((error, idx)=>{
                return <p key={idx} style={{color:"red"}}>{error}</p>
            })}
        </div>
    )
}

export default CreateStore;
