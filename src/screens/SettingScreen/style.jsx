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
    margin-top: 110px;
    background-color: #E4E6EB;
    border-radius: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    
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

export const CuteCategory = styled.TouchableOpacity`
    width: 93%;
    height: 70px;
    border-radius: 8px;
    background-color: white;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    
`
export const CuteCategory1 = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    background-color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    padding-right: 20px;
    
`
export const CuteView = styled.View`
    margin-top: 20px;
    width: 93%;
    height: 210px;
    background-color: #ffffff;
    border-radius: 10px !important;

`

export const ImageIcon = styled.Image`
    margin-left: 20px;
`
export const TouchText = styled.Text`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.25600001215934753px;
    text-align: left;
    margin-left: 15px;
    color: #080040;
    font-weight: 600;

`