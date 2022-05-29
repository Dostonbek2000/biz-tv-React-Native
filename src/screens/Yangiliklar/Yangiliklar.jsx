import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  AllFlatContainer,
  CatText,
  Container,
  FlatContainer,
  ImageFor,
  InTExt,
  LoopCat,
  LoopTime,
  LoopWrapper,
  OneNewsContainer,
  ReusableImage,
  RightView,
  Title,
  Wrapper,
} from "./style";
import { NewsCategories } from "../../data/new-category";
import { MaterialIcons } from "react-native-vector-icons";
import { YangiliklarData } from "../../data/yangiliklar";

const Yangiliklar = ({navigation}) => {
  const [category, setCategory] = useState("Barchasi");
  const [MyData, setMyData] = useState([])

  let Filtered = YangiliklarData.filter((item)=>{
    if(category==='Barchasi'){
      return item
    }else{
      return item.category.toLowerCase() === category.toLowerCase()
    }
  })

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setCategory(item.name)}
      style={{ ...styles.item, backgroundColor: item.bg }}
    >
      <CatText color={item.color}>{item.name}</CatText>
      <Text style={{ marginLeft: 5 }}>
        {item.name === category ? (
          <MaterialIcons name="check-circle" color={item.color} size={15} />
        ) : (
          ""
        )}
      </Text>
    </TouchableOpacity>
  );

  const renderNews = ({ item }) => (
    <Wrapper onPress={()=>navigation.navigate('detail',item)}>
      <ImageFor source={{uri:item.img}} />
      <RightView>
        <Title>{item.title} </Title>
        <LoopWrapper>
          <LoopCat><InTExt>{item.category}</InTExt></LoopCat>
          <LoopTime>{item.vaqt}</LoopTime>
        </LoopWrapper>
      </RightView>
    </Wrapper>
  );

  return (
    <Container>
      <FlatContainer>
        <SafeAreaView>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={NewsCategories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </FlatContainer>
      <OneNewsContainer>
        <ReusableImage source={{uri:Filtered[0].img}} />
        <Title>{Filtered[0].title}</Title>
        <LoopWrapper>
          <LoopCat><InTExt>{Filtered[0].category}</InTExt></LoopCat>
          <LoopTime>{Filtered[0].vaqt}</LoopTime>
        </LoopWrapper>
      </OneNewsContainer>
      <AllFlatContainer>
         <SafeAreaView>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={Filtered}
            renderItem={renderNews}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </AllFlatContainer>
    </Container>
  );
};

export default Yangiliklar;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 5,
    height: 33,
    width: 109,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
