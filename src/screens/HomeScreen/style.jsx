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
`
export const Wrapper = styled.View`
    margin: 23px;
    height: 500px;
    margin-top: 70px;
`
export const MainText = styled.Text`
    font-family: 'Gilroy';
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(37, 53, 54, 1);
    margin-top: 10px;
    margin-bottom: 15px;
    padding-left: 10px;
`

export const BigButton1 = styled.Pressable`
    height: 128px;
    width: 328px;
    border-radius: 19px;
    background:  #E2336B ;
    margin-top:5px;
    display:flex;
    justify-content: center;
    align-items:center;
`
export const BigButton2 = styled.Pressable`
    height: 128px;
    width: 328px;
    border-radius: 19px;
    background: rgba(18, 36, 94, 1);
    margin-top:5px;
    display:flex;
    justify-content:center;
    align-items:center;

`
export const BigButton3 = styled.Pressable`
    height: 128px;
    width: 328px;
    border-radius: 19px;
    margin-top:5px;
    background: rgba(109, 212, 0, 1);
    display:flex;
    justify-content:center;
    align-items:center;

`
export const Img = styled.Image`
    width: 130px;
    height: 57px;
`
export const ImgLit = styled.Image`
    width: 165px;
    height: 95px;
`