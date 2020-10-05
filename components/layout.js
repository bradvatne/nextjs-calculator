import React, {useState} from 'react'

export default function Layout() {
    const [screen, setScreen] = useState('');
    const [memory, setMemory] = useState('');
    
    const buttonsList = [1,2,3,'+',4,5,6,'-',7,8,9,'*','/',0,'C','='];

    const handleClick = (event) => {
        console.log(event.target.value)
        if (event.target.value.toString() == '=') {
            console.log('memory')
            setScreen(eval(memory));
            setMemory('');
        } else if (event.target.value == 'C') {
            setScreen('')
            setMemory('')
        } else if (Number.isInteger(parseInt(event.target.value))) {
            setScreen(screen.toString() + event.target.value.toString())
            setMemory(memory.toString() + event.target.value.toString())
        } else {
            setMemory(memory.toString() + event.target.value);
            setScreen('');
        }
        console.log('total:' + memory)
    }

    const renderButtons = buttonsList.map((number) => 
        <button key={number} type="button" className="button" onClick={handleClick} value={number}>
            {number}
        </button>)

    return (
        <div className="grid-container">
            <div className="screen">{screen}</div>
            {renderButtons}
        </div>
           )
}