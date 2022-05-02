import {useReducer, useState} from "react";
import  './App.css'

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'addCat' :
            return { ...state, cats: [...state.cats, { name: payload, id: Date.now() }] }
        case 'deleteCat' :
            return { ...state, cats: state.cats.filter(cat => cat.id !== payload) }

        case 'addDog' :
            return { ...state, dogs: [...state.dogs, { name: payload, id: Date.now() }] }
        case 'deleteDog' :
            return { ...state, dogs: state.dogs.filter(dog => dog.id !== payload) }

        default :
            console.error('невідомий тип!');
            return state;
    }
}

export const App = () => {
    const [state, dispatch] = useReducer(reducer, { cats: [], dogs: [] });

    const [catValue, setCatValue] = useState('');
    const [dogValue, setDogValue] = useState('');

    // const settler = ( type, payload, setEmpty ) => { you can also use this variant
    //     dispatch({ type, payload });
    //     setEmpty('');
    // }


    const createCat = () => {
        dispatch({ type: 'addCat', payload: catValue });
        setCatValue('');
    }

    const createDog = () => {
        dispatch({ type: 'addDog', payload: dogValue });
        setDogValue('');
    }

    return (
        <div>
            {/*<div className={'header'}>*/}
            {/*    <div>*/}
            {/*        <label>Cat name : <input type="text" onChange={({ target }) => setCatValue(target.value)} value={catValue}/></label>*/}
            {/*        <button onClick={() => settler('addCat', catValue, setCatValue)}>Save</button>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <label>Dog name : <input type="text" onChange={({ target }) => setDogValue(target.value)} value={dogValue}/></label>*/}
            {/*        <button onClick={() => settler('addDog', dogValue, setDogValue)}>Save</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={'header'}>
                <div>
                    <label>Cat name : <input type="text" onChange={({ target }) => setCatValue(target.value)} value={catValue}/></label>
                    <button onClick={createCat}>Save</button>
                </div>
                <div>
                    <label>Dog name : <input type="text" onChange={({ target }) => setDogValue(target.value)} value={dogValue}/></label>
                    <button onClick={createDog}>Save</button>
                </div>
            </div>

            <hr/>
            <div className={'body'}>
            <div>
                {
                    state.cats.map(cat => (
                        <div key={cat.id}>
                            {cat.name}
                            <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>delete</button>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    state.dogs.map(dog => (
                        <div key={dog.id}>
                            {dog.name}
                            <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>delete</button>
                        </div>
                    ))
                }
            </div>
            </div>

        </div>
    );
};

export default App;