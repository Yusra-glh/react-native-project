import { Platform } from "react-native";

export const FONTS = {
  GORDITA_MEDIUM: Platform.OS =="ios"?'Gordita-Medium':'GorditaMedium'  ,
  GORDITA_REGULAR: Platform.OS =="ios"?'Gordita-Regular':'GorditaRegular'  ,
  REGULAR: Platform.OS =="ios"?'Montserrat-Regular':'MontserratRegular'  ,
  MEDIUM:Platform.OS =="ios"?'Montserrat-Medium':'MontserratMedium'  ,
  MEDIUM_ITALIC: Platform.OS =="ios"?'Montserrat-Medium-Italic':'MontserratMediumItalic'  ,
  BOLD:  Platform.OS =="ios"?'Montserrat-Bold':'MontserratBold'  ,
  SEMI_BOLD: Platform.OS =="ios"?'Montserrat-Semi-Bold':'MontserratSemiBold'  ,
}

export const TYPOGRAPHY = {
  extraSmallText: 10,
  xSmallText:11,
  smallText: 12,
  regularText: 13,
  mediumText: 14,
  largeText: 15,
  extraLargeText:16,
  superLargeText:18,
  xxxLargeText : 22,
  xxxxLargeText: 33,
};
export const SIZES = {
   smallScreenHeight :600,
   largeScreenHeight : 780,
};