import { useState } from "react";

export function useCounter({ min, max, initial }) {
    const [quant, setQuant] = useState(initial || 1);
    const increment = (num = 1) => {
        if (max) {
            if (quant < max) { setQuant((x) => x + num); } else {
                alert(`O máximo que você pode comprar desse produto e ${max} unidades`);
            }
        } else {
            setQuant((x) => x + num);
        }

    };
    const decrement = (num = 1) => {
        if (quant > min) {
            setQuant((x) => x - num);
        }
        else {
            alert(`A quantidade minima desse produto e 1`);
        }
    };

    const reset = () => {
        setQuant(0);
    };
    const onInput = (e) => {
        setQuant(1)
        if (max && e > max) {
            alert(`o máximo que você pode comprar desse produto e ${max}`);
        }
        else if ((e < min || e < 1) && e !== "") {
            alert(`A quantidade minima desse produto e 1`);
        } else {
            setQuant(e)
        }

    };

    return { quant, increment, decrement, reset, onInput };
}
