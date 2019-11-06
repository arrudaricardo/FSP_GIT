import React,{useState, useEffect, useContext} from 'react';




const CrateFrom = () =>{

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div className='AcessForm'> 
            <div className="form-body">
            <div className='form-error'>
                {state.errors.length > 0 && state.errors.slice(-1)[0].map( (error, i) => (
                    <div key={i} > {error} </div>
                ))}
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} /> 
                    <input type="text" placeholder="description" value={description} onChange={e => setDescription(e.target.value)} /> 
                </div>
                <div className='form-submit'>
                    <input type="submit" value="Create repository"/>
                </div>
            </form>
        </div>
        </div>
    )

}



export default CreateForm;
