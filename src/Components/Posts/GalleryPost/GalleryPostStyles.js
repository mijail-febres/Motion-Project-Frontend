import styled from 'styled-components'

export const GalleryPostWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    
`

export const GalleryImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-gap: 2%;
    /* this margin needs to be here because auto doesn't take grid gap into account */
    margin-bottom: 2%;

    & img {
        width: 100%;
    }

`