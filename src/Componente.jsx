import './index.css';
import React from 'react';
        var clear=false;
        var calc='';
        var ans='';
export class Componente extends React.Component {
    constructor(props){
        super(props);
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){

             var text = event.target.value;
              if (parseInt(text,10)==text || text=='.' || text=='*' || text=='/' || text=='+' || text=='-' || text=='%') {
                  if (clear==false) {
                      calc+=text;
                     document.getElementById("Pantalla").value= calc;
                  }else {
                      calc=text;
                      document.getElementById("Pantalla").value= calc;
                      clear=false;
                  }
              }else{
                  if (text=='AC') {
                      calc='';
                      document.getElementById("Pantalla").value= calc;
                  }else{
                      if (text=='CE') {
                          calc=calc.slice(0,-1);
                          document.getElementById("Pantalla").value= calc;
                      }else{
                          if (text=='=') {
                              ans=eval(calc);
                              document.getElementById("Pantalla").value= ans;
                              clear=true;
                          }else{
                              if (text=='ANS') {
                                  calc+=ans;
                                  document.getElementById("Pantalla").value= calc;
                              }
                          }
                      }
                  }
              }
    }
    render(){
        return (    
        <div id="Principal">
            <div id="Calculadora">
                <input id="Pantalla" type="text" className='textbox'/>
                <div id="Teclado">
                    <button className="button" value="AC" onClick={this.handleClick}>AC</button>
                    <button className="button" value="CE" onClick={this.handleClick}>CE</button>
                    <button className="button" value="%" onClick={this.handleClick}>%</button>
                    <button className="button" value="/" onClick={this.handleClick}>/</button><br/>
                    <button className="button" value="7" onClick={this.handleClick}>7</button>
                    <button className="button" value="8" onClick={this.handleClick}>8</button>
                    <button className="button" value="9" onClick={this.handleClick}>9</button>
                    <button className="button" value="*" onClick={this.handleClick}>*</button><br/>
                    <button className="button" value="4" onClick={this.handleClick}>4</button>
                    <button className="button" value="5" onClick={this.handleClick}>5</button>
                    <button className="button" value="6" onClick={this.handleClick}>6</button>
                    <button className="button" value="-" onClick={this.handleClick}>-</button><br/>
                    <button className="button" value="1" onClick={this.handleClick}>1</button>
                    <button className="button" value="2" onClick={this.handleClick}>2</button>
                    <button className="button" value="3" onClick={this.handleClick}>3</button>
                    <button className="button" value="+" onClick={this.handleClick}>+</button><br/>
                    <button className="button" value="." onClick={this.handleClick}>.</button>
                    <button className="button" value="0" onClick={this.handleClick}>0</button>
                    <button className="button" value="ANS" onClick={this.handleClick}>ANS</button>
                    <button className="button" value="=" onClick={this.handleClick}>=</button>
                </div>
            </div>
        </div>
        );
    }
};
