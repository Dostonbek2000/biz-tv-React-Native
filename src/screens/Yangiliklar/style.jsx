import styled from 'styled-components/native';


export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-top: 45px;
    background-color: white !important;
`

export const FlatContainer = styled.View`
    width: 100%;
    height: 50px;
`

export const CatText = styled.Text`
    font-weight: 600;
    font-size: 12px;
    color: ${p=>p.color};
`

export const OneNewsContainer = styled.View`
    width: 100%;
    height: 300px;
`
export const ReusableImage = styled.Image`
    width: 100%;
    height: 220px;
    border-radius: 10px;
`
export const Title = styled.Text`
    color: rgba(37, 53, 54, 1);
    font-family: 'Roboto';
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    padding-left: 4px;
    margin-top: 5px;
    word-wrap: break-word;

`
export const Title1 = styled.Text`
    color: rgba(37, 53, 54, 1);
    font-family: 'Roboto';
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    padding-left: 4px;
    margin-top: 5px;
    /* word-wrap: break-word; */

`
export const LoopWrapper = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 4px;
`
export const LoopCat = styled.TouchableOpacity`
    
    background-color: #E8F8F2;
    border-radius: 5px;
    
`
export const InTExt = styled.Text`
    padding: 4px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(31, 184, 132, 1);
`

export const LoopTime = styled.Text`
    text-transform: uppercase;
    color: #929A9B;
    margin-left: 10px;
    font-weight: 600;
`

export const AllFlatContainer = styled.View`
    width: 100%;
    height: 450px;
`

export const Wrapper = styled.TouchableOpacity`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 0px;

`

export const ImageFor  =styled.Image`
    height: 70px;
    width: 105.02564239501953px;
    border-radius: 7px;

`
export const RightView = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding: 5px;
    width: 70%;
    box-sizing: border-box;
`