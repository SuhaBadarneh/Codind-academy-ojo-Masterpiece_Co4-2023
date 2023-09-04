import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://i.etsystatic.com/18888049/r/il/70de2a/4440821307/il_794xN.4440821307_gqda.jpg",
      "https://i.etsystatic.com/44434232/r/il/6c8296/5256197733/il_794xN.5256197733_5r7g.jpg",
      "https://i.etsystatic.com/12035891/r/il/247fbb/3830916899/il_794xN.3830916899_4wbf.jpg",
    ]);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Swiper
          showButtons={false}
          autoplay={true}
          style={styles.swiperContainer}
          autoplayTimeout={5}
        >
          {bannerData.map((item, index) => {
            return (
              <View key={index} style={styles.bannerItem}>
                <Image
                  style={styles.imageBanners}
                  resizeMode="cover"
                  source={{ uri: item }}
                />
                <View style={styles.overlay}>
                  <Text style={styles.overlayText}>
                    Enjoy 50% Savings Today!
                  </Text>
                </View>
              </View>
            );
          })}
        </Swiper>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  swiperContainer: {
    height: width / 2.5,
  },
  bannerItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  imageBanners: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
  },
  overlayText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Banner;
