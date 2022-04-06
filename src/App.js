import './App.css'
import Actor from "./components/Actor";
import Users from "./components/Users";


const actors = [
  {id:1, name:'Tom', img:'https://shutnikov.club/wp-content/uploads/2020/01/tom-cat-my-talking-tom-jerry-mouse-tom-and-jerry-tom-and-jerry-png.jpg'},
  {id:2, name:'Jerry', img:'https://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG56.png'}
]
function App(){
  return (<div>
    {/*{actors.map(actor=><Actor key={actor.id} name = {actor.name} img = {actor.img}/>)}*/}
       <Users/>
  </div>
  )
}
export default App;