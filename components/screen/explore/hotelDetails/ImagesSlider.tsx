import React, { useRef, useState, useEffect } from 'react';
import { View, Image, FlatList, Dimensions, Animated } from 'react-native';
import tw from 'twrnc';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width;
const INDICATOR_WIDTH = 70;
const INDICATOR_MARGIN = 5;

type ImageSliderProps = {
  images: any[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }: { item: any }) => (
    <Image
      source={item}
      style={tw`w-[${ITEM_WIDTH}px] h-[380px] rounded-[20px]`}
      resizeMode="cover"
    />
  );

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event: any) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  useEffect(() => {
    flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true });
  }, [currentIndex]);

  useEffect(() => {
    progressAnimation.setValue(0);
    Animated.timing(progressAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, [currentIndex]);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
   <View style={tw`absolute bottom-4 left-0 px-4 right-0 flex-row justify-center`}>
        {images.map((_, index) => (
          <View
            key={index}
            style={tw`w-[${INDICATOR_WIDTH}px] h-1 bg-gray-400 mx-[${INDICATOR_MARGIN}px]`}
          >
            {index === currentIndex ? (
              <Animated.View
                style={[
                  tw`h-1 bg-white`,
                  {
                    width: progressAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0%', '100%'],
                    }),
                  },
                ]}
              />
            ):(
            <Animated.View
              style={[
                tw`h-1 bg-white`,
      
              ]}
            />
          )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;