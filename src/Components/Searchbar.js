import React , {useState} from 'react'

function Searchbar(props) {
    const[term , setTerm] = useState('');
    
    const onSerarchChange = e => {
        setTerm(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();

        // Code From Parent
        props.onFormSubmit(term)
    }
    return (
        <div>
            <form className="mx-auto my-3 w-50" onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    
                    <input 
                        type="text" 
                        className="form-control" 
                        value={term} 
                        placeholder="Search For Youtube"
                        onChange={onSerarchChange}    
                    />
                    <div className="input-group-append">
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Searchbar
