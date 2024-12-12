import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  Platform,
  DimensionValue,
} from 'react-native';

import { styles } from './style';
import { colors } from '../../constants/Colors';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  bgColor?: string;
  fgColor?: string;
  bdColor?: string;
  bdWidth?: number;
  titleWeight?: boolean;
  iconName?: React.ReactNode;
  iconNameLeft?: React.ReactNode;
  hauteur?: number;
  jContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  custWidth?: DimensionValue | undefined;
  custColor?: string;
  fontFamily?: string;
  hasShadow?: boolean;
  iconColor?: string;
  iconSize?: number;
  iconPositionLeft?: 'left' | 'right';
  iconPosition?: 'left' | 'right';
  isDisabled?: boolean;
  imageSource?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  fontSize?: any;
  titleWidth?: DimensionValue | undefined;
  bdRadius?: number;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  bgColor,
  fgColor,
  bdColor,
  bdWidth,
  titleWeight,
  iconName,
  iconNameLeft,
  hauteur,
  jContent,
  custWidth,
  custColor,
  fontFamily,
  hasShadow,
  iconColor,
  iconSize,
  iconPositionLeft,
  iconPosition,
  isDisabled,
  imageSource,
  style,
  fontSize,
  titleWidth,
  bdRadius,
}) => {
  // DIMENSIONS
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[
        style,
        styles.container,
        bdRadius ? {borderRadius: bdRadius} : {borderRadius: 50},
        bgColor ? {backgroundColor: bgColor} : {backgroundColor: colors.White},
        bdWidth ? {borderWidth: bdWidth} : {},
        bdColor ? {borderColor: bdColor} : {},
        hauteur ? {height: hauteur} : {height: 43},
        jContent ? {justifyContent: jContent} : {justifyContent: 'center'},
        custWidth ? {width: custWidth} : {},
        hasShadow ? {shadowOffset: {width: 0, height: 3}} : {},
        hasShadow
          ? {
              shadowColor:
                Platform.OS === 'ios' ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.26)',
              shadowOpacity: 0.5,
              elevation: 5,
            }
          : {},
      ]}
    >
      {iconPositionLeft === 'left' && iconNameLeft}
      
      {imageSource ? (
        <Image resizeMode="contain" style={styles.photo} source={imageSource} />
      ) : null}
      
      <Text
        style={[
          style as StyleProp<TextStyle>,
          styles.text,
          titleWeight ? {fontWeight: 'bold'} : {},
          fgColor ? {color: fgColor} : {},
          custColor ? {color: custColor} : {color: 'white'},
          {fontFamily: fontFamily},
          titleWidth ? {width: titleWidth} : {},
        ]}
      >
        {title}
      </Text>
      
      {iconPosition === 'right' && iconName}
    </TouchableOpacity>
  );
};
