import React from 'react'
import Button from './Button'


class Counter extends React.Component {

    state = {
        number: 0
    }


    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    label="Dodaj 1"
                />
                <Button
                    label="Odejmij 1"
                />
                <Button
                    label="Dodaj 5"
                />
                <Button
                    label="Odejmij 5"
                />
                <Button
                    label="Wyzeruj"
                />
            </div>
        )
    }
}

export default Counter