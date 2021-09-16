import styled from 'styled-components'

export const MainPostsDiv = styled.div`
    width: 60%;
    padding: 0 20%;
    background-color: #f5f5f5;
`

export const PostWrapper = styled.div`
flex-basis: 30%;
    margin: 20px 0px;
    width: auto;
    max-height: auto;
    padding: ${(props) => (props.type === 'isShared' ? '0px 20px' : '20px')};
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: flex-start;
    background-color: white;
    border-radius: ${(props) => (props.type === 'isShared' ? '0px' : '5px')};
    border: ${(props) => (props.type === 'isShared' ? 'none' : 'lightgray 1px solid')};
    border-left: ${(props) => (props.type === 'isShared' ? '2px solid lightgray' : 'none')};
    box-shadow: ${(props) => (props.type === 'isShared' ? 'none' : '0px 0px 5px lightgray')};
`


export const PostDisplayWrapper = styled.div`
    /* width: 100%;
    display: grid;
    min-height: 40px;
    grid-template-columns: 50% 50%; */
    display: flex;

    & .Posts-masonry-grid {
    /* Not needed if autoprefixing */
    display: -webkit-box;
    /* Not needed if autoprefixing */
    display: -ms-flexbox;
    display: flex;
    /* gutter size offset */
    margin-left: -20px;
    /* width adjusted for padding */
    width: calc(100% + 20px);
    }

    & .Posts-masonry-grid_column {
    /* gutter size */
    padding-left: 20px;
    background-clip: padding-box;
    }
`

export const PostContentWrapper = styled.div`
    width: 100%;
`

export const PostsNavWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    border-bottom: 1px solid lightgray;
`

export const SearchLabel = styled.label`
    flex-grow: 1;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: text;

    & input {
        width: 40%;
        outline: none;
        border: none;
        margin-left: 20px;
        font-size: 18px;
        background-color: transparent;
    }
`

export const NavButtonWrapper = styled.div`
    height: 100%;
    
    & button {
        height: 100%;
        width: auto;
        background-color: transparent;
        font-weight: bold;
        border: none;
        margin: 0 10px;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        color: gray;

        &:hover {
            border-bottom: 3px gray solid;
        }
        &:active {
            border-bottom: 3px black solid;
            color: black;
        }
    }
`