import * as C from '../styles/styled';
import {User} from '../interfaces/interfaces';

interface ModalProps{
    user:User;
    setShowModal:(state:boolean)=>void;
    setNome:(name:string)=>void;
    setEmail:(email:string)=>void;
    upDateItem:(id:number)=>void;
}

const Modal=({user,setShowModal,setEmail,setNome,upDateItem}:ModalProps)=>{
    return(
    <C.ModalContainer>
        <div>
            <span onClick={()=>{setShowModal(false)}}>x</span>
            <h2>Login</h2>
            <input onChange={(event)=>setNome(event.target.value)} placeholder="digite o seu nome" type="text" />
            <input onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="digite o seu gmail"/>
            <button onClick={()=>upDateItem(user?.id)}>update</button>
        </div>
    </C.ModalContainer>);
}

export default Modal;