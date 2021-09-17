import styled from 'styled-components'

export const NewPostWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const NewPostInputDiv = styled.div`
    margin-left: 10px;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
`

export const NewPostProfileImg = styled.img`
    border-radius: 50%;
    width: 45px;
    height: 45px;
`

export const NewPostInput = styled.input`
    width: 60%;
    border: none;

    &:focus {
        outline: none;
    }
`

export const NewPostButtonWrapper = styled.div`
    background-color: purple; // Add global gradiant value
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-content: center;
    opacity: 70%;

    &:hover {
        cursor: pointer;
        opacity: 100%;
    }

`
export const NewPostButton = styled.img`
    width: 40%;
`