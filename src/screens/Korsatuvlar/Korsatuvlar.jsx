import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList
} from "react-native";
import Swiper from "react-native-web-swiper";
import {
  BGimg,
  Box,
  Container,
  DateText,
  IconsWrapper,
  ImageFor2,
  InerContainer1,
  InerContainer2,
  InnerIcWrapper,
  LikeText,
  LoopNextContainer,
  MainTitle,
  PlayIcon,
  Rows,
  Tabs,
  TabText,
  TabWrapper,
  Title,
  TouchIcon,
  VideoContainer,
} from "./style";
import NewPlay from "../../images/yangiplay.png";
import Mask from "../../images/Mask.png";
import { Ionicons, Feather, AntDesign } from "react-native-vector-icons";
import { KorsatuvlarData } from "../../data/korsatuvlar";

import imgg1 from '../../images/bg11.png'
import imgg2 from '../../images/bg12.png'
import imgg3 from '../../images/bg13.png'
import imgg4 from '../../images/bg14.png'
import imgg5 from '../../images/bg15.png'
import imgg6 from '../../images/bg16.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)",
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)",
  },
  image: {
    width: "100%",
    height: 220,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  play: {
    position: "absolute",
    top: '40%',
    left: '43%',
  },
});

const Korsatuvlar = () => {
  let swiperRef = useRef(null);
  const [render, setrender] = useState(false);
  const [myid, setmyid] = useState(0);
  const [mainshow, setmainshow] = useState(true)

  const SlideMore = (num) => {
    setmyid(num);
    if(num===0){
      setmainshow(true)
    }else{
      setmainshow(false)
    }
  };


  const KorsatuvRender = ({ item }) => (
    <LoopNextContainer>
      <VideoContainer>
        <BGimg source={item.img} />
        <TouchableOpacity style={styles.play}>
          <PlayIcon source={NewPlay} />
        </TouchableOpacity>
      </VideoContainer>
      <Title>{item.title}</Title>
      <IconsWrapper>
        <InnerIcWrapper>
          <TouchIcon>
            <Text>
              <Feather name="share-2" size={20} color="#8113E0" />
            </Text>
          </TouchIcon>
          <TouchIcon>
            <Text>
              <AntDesign name="like1" size={20} color="#0071D4" />
            </Text>
          </TouchIcon>
          <LikeText>{item.is_shown}</LikeText>
        </InnerIcWrapper>
        <DateText>{item.time}</DateText>
      </IconsWrapper>
    </LoopNextContainer>
  );

  let activestyle = {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(225, 8, 77, 1)",
  };
  let noactivestyle = { borderBottomWidth: 2, borderBottomColor: "#E5E5E5" };
  return (
    <Container>
      <TabWrapper>
        <Tabs
          style={myid === 0 ? activestyle : noactivestyle}
          onPress={() => SlideMore(0)}
        >
          <TabText>Barchasi</TabText>
        </Tabs>
        <Tabs
          style={myid === 1 ? activestyle : noactivestyle}
          onPress={() => SlideMore(1)}
        >
          <TabText>Ko’rsatuvlar</TabText>
        </Tabs>
      </TabWrapper>
      
        { mainshow ? <InerContainer1>
          <SafeAreaView>
            <FlatList
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={KorsatuvlarData}
              renderItem={KorsatuvRender}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </InerContainer1> :
        <InerContainer2>
           <Rows>
              <Box>
                <ImageFor2 source={imgg1} />
                <MainTitle>Markaziy Studia</MainTitle>
              </Box>
              <Box>
                <ImageFor2 source={imgg2} />
                <MainTitle>Markaziy Studia</MainTitle>
              </Box>
           </Rows>
           <Rows>
              <Box>
                <ImageFor2 source={imgg3} />
                <MainTitle>Ramazon Oyi Tuhfasi</MainTitle>
              </Box>
              <Box>
                <ImageFor2 source={imgg4} />
                <MainTitle>Ramazon Oyi Tuhfasi</MainTitle>
              </Box>
           </Rows>
           <Rows>
              <Box>
                <ImageFor2 source={imgg5} />
                <MainTitle>Markaziy Studia</MainTitle>
              </Box>
              <Box>
                <ImageFor2 source={imgg6} />
                <MainTitle>Ramazon Oyi Tuhfasi</MainTitle>
              </Box>
           </Rows>
        </InerContainer2> }
    </Container>
  );
};

export default Korsatuvlar;
