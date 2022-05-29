import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { Back, Img, Title, ToBack, UseText } from './style'
import {Ionicons} from 'react-native-vector-icons'
const DetailComponent = ({route,navigation}) => {

//   alert(JSON.stringify(route.params))
  return (
    <View>
        <ToBack onPress={()=>navigation.navigate('yangiliklar')}>
            <Back>
                <Ionicons name='ios-chevron-back-sharp' color='white'  size={23} />
            </Back>
        </ToBack>
      <Img source={{uri:route.params.img}} />
      <Title>{route.params.title}</Title>
      <ScrollView>
      <UseText>
        — O‘zbekistonga qaytishni xohlagan xorijdagi fuqarolarning katta qismi Rossiya Federatsiyasi hissasiga to‘g‘ri keladi. E'lon qilingan parvozlar ro‘yxatida Rossiyaning 8 ta shaharlaridan 11-24 may oralig‘ida charter reyslar amalga oshiriladi. Albatta, bu 8 ta aviareyslar orqali barcha fuqarolarni olib kelishning imkoniyati yo‘q. Buni fuqarolar to‘g‘ri tushunishlari lozim. Konsulliklar va elchixonalarimiz orqali qaytish istagida bo‘lgan fuqarolarning ro‘yxati shakllantirib borilyapti. Ro‘yxatdan o‘tgan barcha fuqarolarni charter reyslar orqali olib kelishga harakat qilinadi. Ulardan bizni to‘g‘ri tushungan holda sabrli bo‘lishni so‘raymiz.
        — Qozog‘iston chegarasida yuzlab o‘zbekistonliklar o‘z avtomashinalarida O‘zbekistonga o‘tish uchun ruxsat berilishini kutmoqda. Transport vazirligi bu masalada qo‘shnilar bilan aloqa o‘rnatdimi?
       
      </UseText>
      </ScrollView>
    </View>
  )
}

export default DetailComponent

const styles = StyleSheet.create({})