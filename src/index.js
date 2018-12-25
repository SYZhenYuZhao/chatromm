import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div>
                这是一个app
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))