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

export const PlayIcon  = styled.Image`
    position: absolute;
    top: 25%;
    left: 35%;
    z-index: 99909;
`

export const BottomContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 40px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`

export const TabWrapper = styled.View`
    width: 90%;
    height: 45px;
    background: #E7ECF5;
    border-radius: 22px;
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 2px;
`
export const Tab = styled.Text`
    width: 33%;
    height: 40px;
    border-radius: 22px;
    background-color: ${p=>p.bg ? '#FFFFFF' : '#E7ECF5'};
    padding: 11px;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    color:  #75758C;
`

export const Efirlar = styled.View`
    width: 100%;
    margin-top:24px;
`
export const Name = styled.Text`
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: #3A3F46;
    text-transform: uppercase;
    padding-left:30px;
`

export const ScrollDiv = styled.ScrollView`
    width: 100%;
    height: 100%;
    margin-top: 10px;
`
export const MainWords = styled.Text`
    margin-left: 20px;
    font-weight: 700;
    color: #253536;
    letter-spacing: 1px;
`
export const TimeName = styled.Text`
    color: #9CA1A2;
    font-weight: 400;
`
export const MainView = styled.View`
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    padding: ${p=>p.bg ? '10px' : '5px'};
    background-color: ${p=>p.bg ? '#FFF0F1' : 'white'};
    border-radius: 10px;

`

export const EfirdaWord = styled.Text`
    font-size: 13px;
    font-weight: 900;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    margin-left: 20px;
    color: #FF4B6A;
    margin-top: 5px;
`
