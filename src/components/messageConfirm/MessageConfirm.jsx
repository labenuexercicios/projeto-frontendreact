import { True, False } from "./style"

export const MessageConfirm = ({type, msg, visible, setVisible}) => {

    return (
        <>
            {visible && type===true &&(
               <True>{msg}</True>
            )}{visible && type===false && (
                <False>{msg}</False>
            )}
        </>
    )
}