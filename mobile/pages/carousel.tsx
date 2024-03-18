import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Colors} from '../contants/themes';
import assets from '../contants/assets';
import CustomButton from '../component/button';
import LogoHeader from '../component/logoHeader';
import Video from 'react-native-video';
import Onboarding1 from '../asset/images/onboarding1.mp4';
import Onboarding2 from '../asset/images/onboarding2.mp4';
import Onboarding3 from '../asset/images/onboarding3.mp4';
import {useGlobalContext} from '../hooks/useGlobalContext';

const {width: screenWidth} = Dimensions.get('window');

const CarouselComponent = ({navigation}: any) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

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
      title: (
        <Text style={styles.heroTitle}>
          Attend classes from{' '}
          <Text style={styles.standoutHereTitleText}>anywhere </Text>
          you are
        </Text>
      ),
      image: Onboarding1,
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
      title: (
        <Text style={styles.heroTitle}>
          Get notified of your class{' '}
          <Text style={styles.standoutHereTitleText}>schedule </Text>
        </Text>
      ),
      image: Onboarding2,
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
      title: (
        <Text style={styles.heroTitle}>
          Access to <Text style={styles.standoutHereTitleText}>past </Text>
          classes
        </Text>
      ),
      image: Onboarding3,
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
        <View style={styles.upperView}>
          <View style={styles.heroTitleContainer}>{item.title}</View>
          <Text style={styles.sub}>{item.description}</Text>

          <Video
            resizeMode="cover"
            source={item.image}
            style={styles.gifStyle}
            loaded
          />
        </View>

        <View style={styles.bottomContainer}>
          <Pagination
            dotsLength={slides.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.paginationInactiveDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <TouchableOpacity>
            <View style={{marginHorizontal: 20}}>{item.button}</View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.centered}>
      <LogoHeader />
      <Carousel
        data={slides}
        ref={carouselRef}
        renderItem={renderSlide}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        // inactiveSlideOpacity={1}
        // inactiveSlideScale={1}
        onSnapToItem={index => setActiveSlide(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
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
  bottomContainer: {
    backgroundColor: Colors.secondaryGreen,
    width: '100%',
    height: 290,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    position: 'relative',
    bottom: 100,
  },
  gifStyle: {
    width: '100%',
    height: 315,
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
  },
  heroTitle: {
    color: Colors.primaryBlack,
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
    textAlign: 'center',
    lineHeight: 34,
  },
  standoutHereTitleText: {
    color: Colors.primaryGreen,
    fontFamily: 'Quicksand-Bold',
  },
  heroTitleContainer: {
    marginTop: 50,
    marginBottom: 15,
    height: 70,
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },

  paginationContainer: {
    position: 'relative',
    bottom: -120,
  },
  paginationDot: {
    width: 25,
    height: 5,
    borderRadius: 5,
    marginHorizontal: -5,
    backgroundColor: Colors.secondaryYellow,
  },
  paginationInactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.secondaryYellow,
    marginHorizontal: -5,
  },
});

export default CarouselComponent;
