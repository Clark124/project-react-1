import React from 'react';

class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
            
    }

    render(){
        setInterval(()=>{
            this.setState ({
                date:new Date()
            })
        })  
        
        return (
            <div>
                <h1>hello ,{this.props.name}</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
 export default Welcome