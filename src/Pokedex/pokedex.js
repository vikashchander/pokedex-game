import React, { Component } from 'react'
import Pokecard  from './pokecard';
import "./styles/pokedox.css";

 
class Pokedex extends Component{
  
    render(){     
       var title;
       if(this.props.isWinner){
           title= <h3 className="Pokedox-winner">Winner  😊</h3>
       }else{
        title= <h3 className="Pokedox-looser">Looser 😔</h3>
       }
        return(     
            <div className="Pokedox">
           {title}
            <h3  className="Pokedox-exp">Total Experience : {this.props.exp}</h3>
            
               
               <div className="Pokedox-cards">
               {
                this.props.pokemongame.map((poke)=>(
                       <Pokecard  
                       id={poke.id}
                       name={poke.name}
                       type={poke.type}
                       exp ={poke.base_experience}  
                       />
                   ))
                }
               </div>
            </div>

        );
    }
};
export  default  Pokedex;