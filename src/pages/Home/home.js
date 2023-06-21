import React, { useRef, useCallback, useEffect } from 'react';
import { View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Video } from 'expo-av';
import Logo from '../../components/Logo'
import NavigationService from '../../common/NavigationService';

const HomeScreen = () => {
  const videoRef = useRef(null);
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  
  useEffect(() => {
    const playVideoAsync = async () => {
      await videoRef.current.playAsync();
    };

    const stopVideoAsync = async () => {
      await videoRef.current.stopAsync();
    };

    playVideoAsync();

    return () => {
      stopVideoAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{
            uri: 'https://mcp-showroom-production.s3.ap-northeast-2.amazonaws.com/pillar_ad3.mp4',
          }}
          shouldPlay
          isLooping
          resizeMode="cover"
          isMuted
          style={{ 
            width,
            height,
            position: "absolute",
            left: 0,
            top: insets.top,
          }}
        />
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.row}>
          <Logo
            image="https://www.kbchachacha.com/IMG/statics/maker/o/maker189.png"
            name="제네시스"
            enName="GENESIS"
          />
          <Logo
            image="https://www.kbchachacha.com/IMG/statics/maker/o/maker108.png"
            name="벤츠"
            enName="BENZ"
          />
          <Logo
            image="https://www.kbchachacha.com/IMG/statics/maker/o/maker107.png"
            name="BMW"
            enName="BMW"
          />
        </View>
        <View style={styles.row}>
          <Logo
            image="https://www.kbchachacha.com/IMG/statics/maker/o/maker109.png"
            name="아우디"
            enName="AUDI"
          />
          <Logo
            image="https://www.kbchachacha.com/IMG/statics/maker/o/maker101.png"
            name="현대"
            enName="HYUNDAI"
          />
          <Logo
            image="https://www.kbchachacha.com/IMG/statics/maker/o/maker102.png"
            name="기아"
            enName="KIA"
          />
        </View>
        <View style={styles.row}>
          <Logo
            image="https://www.kbchachacha.com/IMG/statics/maker/o/maker116.png"
            name="랜드로버"
            enName="LANDROVER"
          />
          <Logo
            image="https://www.kbchachacha.com/IMG/statics/maker/o/maker117.png"
            name="볼보"
            enName="VOLVO"
          />
          <Logo
            image="https://www.kbchachacha.com/IMG/statics/maker/o/maker115.png"
            name="재규어"
            enName="JAGUAR"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  videoContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 3,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

export default HomeScreen;
