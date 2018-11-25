import React from 'react'
import Button from './Button'


class Counter extends React.Component {


    render() {
        return (
            <div>
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