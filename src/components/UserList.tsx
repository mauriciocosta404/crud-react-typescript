import React,{useState} from 'react';
import{ User} from '../interfaces/interfaces';
import * as C from '../styles/styled';
import Modal from './Modal';
interface UserProps{
    user:User;
    deleteItem(id:number):void;
    setNome:(nome:string)=>void;
    setEmail:(email:string)=>void;
    upDateItem:(id:number)=>void;
}

const UserList=({user,upDateItem,setEmail,setNome,deleteItem}:UserProps)=>{
    const [showModal,setShowModal]=useState(false);
    return(
    <>
    <tr><td>{user?.nome}</td><td>{user?.email}</td>
    <C.DeleteButton onClick={()=>deleteItem(user.id)}>delete</C.DeleteButton>
    <C.UpdateButton onClick={()=>setShowModal(showModal?false:true)}>update</C.UpdateButton></tr>
    {showModal && (<Modal user={user} upDateItem={upDateItem} setEmail={setEmail} setNome={setNome} setShowModal={setShowModal}/>)}
    </>)

}

export default UserList;