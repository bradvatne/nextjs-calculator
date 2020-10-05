import Screen from './screen'
import Button from './button'
import React, {useState} from 'react'

export default function Layout() {
    const [screen, setScreen] = useState();

    function update(val) {
        console.log(typeof screen)
        console.log('adding '+ val)
        console.log('output: ' + screen)
        setScreen(val)
        console.log(typeof screen)
        
    }

    return (
        <div className="grid-container">
            <Screen screen={screen}/>
            <Button label="1" update={update()}/>
            <Button label="2"/>
            <Button label="3"/>
            <Button label="+"/>
            <Button label="4"/>
            <Button label="5"/>
            <Button label="6"/>
            <Button label="-"/>
            <Button label="7"/>
            <Button label="8"/>
            <Button label="9"/>
            <Button label="*"/>
            <Button label="0"/>
            <Button label="C"/>
            <Button label="/"/>
            <Button label="="/>
        </div>
    )
}