import React, { Component } from 'react';

class AddRRUser extends Component {
    constructor()
    {
    super();
   this.state = {
       balance:0, trades_taken:0, win_percent:0, total_wins:0, loss_percent:0, total_losses:0, 
       calculations: {}, 
       response: [{id:0, text:"Total profit: "}, {id: 1, text: "Total profit: $"}, {id:2, text: "Your profit share: $"}],
       clicked:false
   }
   //this.handleChange=this.handleChange.bind(this);
}
    add_win =(e)=> {
      e.prevenDefault();
      this.setState({
            RR: e.target.value,
            clicked:true
        })
    
    
    }
       
  handleChange (evt, field) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({[field]:evt.target.value, clicked:false});
        console.log([evt.target.value]);
       
        }
    onClick =(e)=> {
        let response=[{response: {text:"Hello world"}}]

        //let responses = [...this.state.response, response];
       //Do the calculations
        let profit=0;
        let cycle=this.state.total_wins+this.state.total_losses;
        let total_cycles=this.state.trades_taken/cycle;
        for(let i=0;i<total_cycles;i++)
        {
            profit+=(this.state.win_percent*this.state.total_wins)-(this.state.loss_percent*this.state.total_losses);
        }
        let total_profit=(profit*this.state.balance);
        let profit_share=total_profit*0.80;
       this.setState({
          clicked:true, 
          calculations:{profit, total_profit, profit_share}
       }
       );
       console.log(this.state.clicked);
    
    }    
        
    
    render() {
         //console.log(this.state.RR.balance);
    
        //balance.style.display="none";
        
        return (
            <div>
           <form className='center-align' onSubmit={this.add_win}>
                <label>Enter your account balance:</label>
                <input type="number" className='center' name='this.state.RR.balance' onChange={(event)=>this.handleChange(event, "balance")}/>
                 <label>Enter total trades taken:</label>
                <input type="number" className='center' name='trades_taken' onChange={(event)=>this.handleChange(event, "trades_taken")}/>
                 <label>Enter win percent per trade:</label>
                <input type="number" className='center' name='this.state.RR.win_percent' onChange={(event)=>this.handleChange(event, "win_percent")}/>
                <label>Enter total days of wins:</label>
                <input type="number" className='center' name='this.state.RR.total_wins'  onChange={(event)=>this.handleChange(event, "total_wins")}/>
                <label>Enter loss percent per trade:</label>
                <input type="number" className='center' name='this.state.RR.loss_percent' onChange={(event)=>this.handleChange(event, "loss_percent")}/>
                <label>Enter total days of loss:</label>
                <input type="number" className='center' name='this.state.RR.total_losses' onChange={(event)=>this.handleChange(event, "total_losses")}/>
                <br/>
                  <br/>
                <input type="button" className='center-align btn blue waves-effect waves-light center' value="Calculate" onClick={this.onClick} />
            </form>
             
            {(() => {
       if(this.state.clicked)
            {
                let values=[Math.round(this.state.calculations.profit)+"%", this.state.calculations.total_profit/100, this.state.calculations.profit_share/100]
            return (
                    this.state.response.map(item =>  (
                    <h3>{item.text+values[item.id]}</h3>
                    ))                   
                )
            }
                
      })()}
               
    </div>
  )
}
}       
                
                
export default AddRRUser;