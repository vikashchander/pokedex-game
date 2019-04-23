import React, {Component} from 'react';
import Pokedex from './pokedex';
class Pokegame extends Component{
    static defaultProps={
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
       }
    render(){
         let pokegame1=[];
         let pokegame2 =[...this.props.pokemon];
         while(pokegame1<pokegame2){
             let randind = Math.floor(Math.random()*pokegame2.length);
            let  poke = pokegame2.splice(randind,1)[0];   // *important line ??  let  poke = pokegame2.splice(randind,1)[0]; 
            // console.log(poke);
            pokegame1.push(poke);
         }
          // console.log(pokegame1);
        //  console.log(pokegame2);
        let exp1 = pokegame1.reduce((sum,curr)=>{
           // console.log(curr);
            return sum+curr.base_experience},0);
            console.log(exp1);
            let exp2 = pokegame2.reduce((sum,curr)=>{return sum+curr.base_experience},0);
        console.log(exp2);
        return(
            <div>
            <Pokedex pokemongame={pokegame1} exp={exp1} isWinner={exp1>exp2}/>
            <Pokedex pokemongame={pokegame2}  exp={exp2} isWinner={exp2>exp1}/>
            </div>
        );
    }
}

export default Pokegame;