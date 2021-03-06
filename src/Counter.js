import React from 'react'
import Button from './Button'


class Counter extends React.Component {

    state = (
        JSON.parse(localStorage.getItem('State-number'))
        ||
        {
            number: this.props.startNumber || 0
        }
    )

    componentDidUpdate() {
        this.setLocalStorage()
    }

    incHandler = () => this.setState({ number: this.state.number + 1 })
    decHandler = () => this.setState({ number: this.state.number - 1 })

    incFiveHandler = () => this.setState({ number: this.state.number + 5 })
    decFiveHandler = () => this.setState({ number: this.state.number - 5 })

    setToZeroHandler = () => this.setState({ number: 0 })


    setLocalStorage = () => localStorage.setItem(
        'State-number',
        JSON.stringify(this.state)
    )


    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    label="Dodaj 1"
                    onClick={this.incHandler}
                />
                <Button
                    label="Odejmij 1"
                    onClick={this.decHandler}
                />
                <Button
                    label="Dodaj 5"
                    onClick={this.incFiveHandler}
                />
                <Button
                    label="Odejmij 5"
                    onClick={this.decFiveHandler}
                />
                <Button
                    label="Wyzeruj"
                    onClick={this.setToZeroHandler}
                />
            </div>
        )
    }
}

export default Counter