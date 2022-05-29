import styled from 'styled-components/native';

export const Img = styled.Image`
    width: 100%;
    border-radius: 10px;
    height: 250px;
`
export const Title = styled.Text`
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;
    padding: 10px;

`
export const UseText = styled.Text`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    padding: 10px;
    margin-top: 0px;

`
export const ToBack = styled.TouchableOpacity`
    position: absolute;
    top: 30px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(255,255,255,0.4);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
`
export const Back = styled.Text`
    
    
`