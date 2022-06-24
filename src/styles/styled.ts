import styled from 'styled-components';

export const Container=styled.div`
    margin-top: 7rem;
    h1{
        text-align: center;
        margin: 2rem;
    }
    input{
        padding: 1rem 5rem;
        box-shadow: 0 0 5rem rgba(0,0,0,0.2);
        margin: 1rem;
    }
    table{
        border-collapse: collapse;
        margin:1rem;
        font-size: 1.5rem;
    }
    tr:nth-child(even){
        background-color:#eee;
        padding: 0.2rem;
    }
    th{
        padding: 1rem 8.2rem;
        background-color: blueviolet;
        color: #fff;
    }
    td{
        padding: .5rem;
    }
`;
export const DeleteButton=styled.button`
        padding: 1rem 2rem;
        background-color: red;
        color:#fff;
        font-weight: bold;
        margin:.5rem .6rem;
        cursor: pointer;
`
export const AddButton=styled(DeleteButton)`
        background-color: blueviolet;
`
export const UpdateButton=styled(DeleteButton)`
        background-color:blueviolet;
`
export const ModalContainer=styled.div`
        position: absolute;
        top:0;left:0;
        width:100%;
        height: 100%;
        background-color:rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            position: absolute;
            right: 3rem;top:2rem;
            font-size: 5rem;
            font-weight: 590;
            cursor: pointer;
        }
        div{
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 2rem;
            background-color: #eee;
        }
        button{
            margin: 1rem;
            width: 26rem;
            padding: 1rem ;
            background-color: blueviolet;
            color:#fff;
            font-size: 1.5rem;
            cursor:pç+ointer;
        }
`;