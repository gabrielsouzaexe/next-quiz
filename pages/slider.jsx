import { useEffect } from "react"
import { useState } from "react"
import styles from "../styles/Slider.module.css"

export default () => {
    const [squareColor, setSquareColor] = useState('')
    
    const squares = [
        "red",
        "blue",
        "green",
        "black" 
    ]

    let indiceColor = 0

    useEffect(() => { 
        setInterval(() => {
            setSquareColor(squares[indiceColor])
            if (indiceColor >= squares.length) return indiceColor = 0
            indiceColor++
        }, 3000)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.squares}>
                <div style={{
                    backgroundColor: `${squareColor}`,
                    width: '100%',
                    transition: "all ease-in-out 1s"
                }}></div>
            </div>
        </div>
    )
}