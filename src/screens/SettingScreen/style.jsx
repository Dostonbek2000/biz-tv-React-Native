import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
    height: 100%;
    width: 100%;
    background-repeat: repeat-y !important;
    background-size: contain !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    margin: auto;
`

export const LinksContainer = styled.View`
    width: 80%;
    height: 50px;
    border: 1px solid #DADCE0;
    margin-top: 150px;
    background-color: #E4E6EB;
    border-radius: 25px;
    
`
export const LinkButton  = styled.TouchableOpacity`
    height: 38px;
    width: 45px;
    border-radius: 19px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`