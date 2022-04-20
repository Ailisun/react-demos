import {CarForm, Cars} from "./components";
import {useState} from "react";

const App = () => {
    const [newCar, setNewCar] =  useState(null)
    const [carForUpdate,setCarForUpdate ] = useState()
    return (
        <div>
          <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <hr/>
                <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default App;