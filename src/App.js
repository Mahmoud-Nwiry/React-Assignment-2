import {useState} from 'react'
import RandomSentences from './component/RandomSentences'
import ChangeValue from './component/ChangeValue'
import './App.css'


// const changeUserName = () =>{
    //     setUsername()
    // }
    
    const App = () => {
        
        const [text, setText] = useState('Hello World')
        
        const changeText = () => 
            text === 'Hello World' ? setText('Hello Palestine') : setText('Hello World')
        

    return (
        <div>
            <p className="textChange" onClick={changeText}>
                <span className="left" id="s">Ex.1</span>
                {text}
            </p>
            <hr />
            <ChangeValue />
            <hr />
            <RandomSentences />
        </div>
    )
}

export default App
