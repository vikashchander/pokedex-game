import  React,{ Component } from 'react';
import './styles/pokecard.css'

//const Poke_Api ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const Poke_Api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const count =(number)=>
    (number<=999?`00${number}`.slice(-3):number);

class  Pokecard extends Component{
      render() {
          const image=`${Poke_Api}${count(this.props.id)}.png`;
          return (
               <div className="pokecard">
               <h2 className="pokecard-title">{this.props.name}</h2>
               <div className='pokecard-img'>
               <img src={image} alt={this.props.name}/>
               </div>
                
               <div className="pokecard-data">{this.props.type}</div>
               <div className="pokecard-data">{this.props.exp}</div>             
            </div>
          );
      }
}
export default Pokecard;
