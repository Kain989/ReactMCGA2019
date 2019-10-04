import React from 'react';
//import logo from './logo.svg';
import Card from './card'
import './App.css';

class App extends React.Component {

  state= {
    titulo: "Trabajao de MCGA 2019"
  }

  componentWillMount = () => {
    console.log("se esta por dibujar el componente");
  }

  render(){
    console.log("se esta dibujando el componente");
    return(
      <div>
        <button onClick={() => {
          this.setState({titulo: "nuevo titulo"})
          }}>Actualiza la Vista</button>
        <Card text={this.state.titulo} />
      </div>
    )
  }

  componentWillReceiveProps(nextProps, nextState){
    console.log("Se actualizo el componente");
    console.log(nextState);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("State Actual",this.state);
    console.log("State Actualizado",nextState);
    return true;
  }

  componentDidMount = ()=>{
    console.log("ya se dibujo el componente");
  }

}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           MCGA - Trabajo Practico
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
