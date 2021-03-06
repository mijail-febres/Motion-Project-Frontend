import styled from 'styled-components'
import MenuIcon from '../../../Assets/svgs/menu.svg'

export const PostHeaderWrapper = styled.div`
    height: 60px;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 45px auto 1fr 45px;
    align-items: center;
    width: 102%;
    grid-column-gap: 2%;
    
`

export const HeaderProfileIcon = styled.img`
    width: 100%;
    border-radius: 50%;
    grid-row: 1 / 3;
    grid-column: 1;
`

export const HeaderName = styled.h6`
    grid-row: 1;
    grid-column: 2;
    align-self: flex-end;
`

export const PostTimestamp = styled.p`
    grid-row: 2;
    grid-column: 2;
    align-self: flex-start;
    color: gray;
    margin-top: 10%;
    font-size: 14px;
    `

export const SharedPost = styled.span`
    grid-row: 1;
    grid-column: 3;
    align-self: flex-end;
    color: gray;
`

export const HeaderMenuButton = styled.button`
    grid-row: 1 / 3;
    grid-column: 4;
    height: 30px;
    width: 30px;
    align-self: center;
    justify-self: flex-end;
    border: transparent;
    background: url(${MenuIcon}) no-repeat center;
    opacity: 50%;

    &:hover {
        opacity: 100%;
        cursor: pointer;
    }
`

