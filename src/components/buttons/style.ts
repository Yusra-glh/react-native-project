import { StyleSheet } from "react-native";
import { TYPOGRAPHY } from "../../constants/Typography";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        paddingVertical: 5,
        marginVertical: 5,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent:'space-between',
      },
      photo: {
        width: 16,
        height: 16,
      },
      text: { 
        fontSize: TYPOGRAPHY.largeText,
       
      },
});