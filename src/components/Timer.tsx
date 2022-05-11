import { useEffect, useRef, useState } from "react";

type TimerArgs = {
    milisegundos: number
}

export const Timer = ( { milisegundos }: TimerArgs) => {

    const [segundos, setSegundos] = useState(0);

    // guarda la referencia el interval
    const ref = useRef<NodeJS.Timer>()

    useEffect(() => {
        ref.current && clearInterval( ref.current ) // limpia el interval
        ref.current = setInterval( () => setSegundos( s => s + 1 ), milisegundos ); // crea el interval
    }, [ milisegundos ]);
    
  return (
    <>
        <h4>Timer: <small> { segundos } </small></h4>
    </>
  )
}
