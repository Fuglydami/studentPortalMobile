import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Colors} from '../contants/themes';

import CustomButton from './button';
import assets from '../contants/assets';

const {width: screenWidth} = Dimensions.get('window');

const HomeSlider = ({navigation, onPress}: any) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const handleButtonPress = index => {
    if (carouselRef.current) {
      carouselRef.current.snapToItem(index);
      setActiveSlide(index);
    }
  };
  const slides = [
    {
      id: 1,
      title: <Text style={styles.heroTitle}>Attend classes from you are</Text>,
      image: assets.HomeGif1,
      button: (
        <CustomButton
          title="Next"
          buttonColor={Colors.primaryGreen}
          textColor="#fff"
          onPress={() => handleButtonPress(1)}
          position="relative"
          bottom={-110}
        />
      ),
      description:
        'Attend lectures, read and download lecture materials from anywhere comfortably. ',
    },
    {
      id: 2,
      title: <Text style={styles.heroTitle}>Get notified of your class </Text>,
      image: assets.HomeGif2,
      button: (
        <CustomButton
          title="Next"
          buttonColor={Colors.primaryGreen}
          textColor="#fff"
          onPress={() => handleButtonPress(2)}
          position="relative"
          bottom={-110}
        />
      ),
      description:
        'On time notifications and class schedule to keep you in check and avoid missing classes.',
    },
    {
      id: 3,
      title: <Text style={styles.heroTitle}>classes</Text>,
      image: assets.HomeGif3,
      button: (
        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate('Login')}
          position="relative"
          bottom={-110}
        />
      ),
      description:
        'Videos and materials from previous weeks and classes can be acessed, read and revised.',
    },
  ];
  const renderSlide = ({item, index}: any) => {
    return (
      <View>
        <View style={styles.announcementContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Announcements!!!</Text>
            <Text style={styles.subtitle}>
              Harmattan Course registration closes on or before 29th of April
              2022.
            </Text>
            <CustomButton
              buttonColor={Colors.secondaryYellow}
              onPress={onPress}
              fontSize={14}
              textColor={Colors.primaryBlack}
              title="Click to Register"
              width={'70%'}
              height={40}
              paddingVertical={10}
              borderRadius={5}
            />
            <Image
              style={styles.image}
              source={assets.MaskGroup}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      const newIndex = (activeSlide + 1) % slides.length;
      handleButtonPress(newIndex);
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [activeSlide, slides.length]);

  return (
    <View style={styles.centered}>
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <Carousel
        data={slides}
        ref={carouselRef}
        renderItem={renderSlide}
        sliderWidth={300}
        itemWidth={300}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        onSnapToItem={index => setActiveSlide(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
  },
  card: {
    width: '75%',
  },
  title: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 10,
  },
  subtitle: {
    color: '#F0FFF7',
    fontWeight: '400',
    fontSize: 14,
    zIndex: 10,
    lineHeight: 22,
    marginBottom: 15,
  },
  upperView: {marginHorizontal: 35, zIndex: 999},
  homeButton: {
    backgroundColor: Colors.primaryGreen,
    color: Colors.white,
  },

  sub: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Mulish-SemiBold',
    lineHeight: 20,
    marginBottom: 40,
  },
  announcementContainer: {
    marginTop: 22,
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: Colors.primaryGreen,
    borderRadius: 10,
  },
  image: {
    position: 'absolute',
    top: 0,

    right: -95,
  },

  heroTitle: {
    color: Colors.primaryBlack,
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
    textAlign: 'center',
    lineHeight: 34,
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  paginationContainer: {
    position: 'absolute',
    bottom: -50,
  },
  paginationDot: {
    width: 25,
    height: 5,
    borderRadius: 5,
    marginHorizontal: -5,
    backgroundColor: Colors.primaryGreen,
  },
  paginationInactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.lightGreen,
    marginHorizontal: -5,
  },
});

export default HomeSlider;
