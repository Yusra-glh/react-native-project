import { Dimensions, StyleSheet, View } from 'react-native'
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper'
import { WalletIcon } from '../../icons/wallet-icon';
import { COLORS } from '../../constants/Colors';

const { width,height} = Dimensions.get('window');

interface SenderHeaderProps {
    title?: string;
    rib?: string;
    image?: string;
  }
const SenderHeader = ({title,rib,image}:SenderHeaderProps) => {
  return (
  //   <Card style={styles.card} >
  //   <View style={styles.row}>
  //   <Avatar.Image size={24} source={{uri:image}} />
  //     <View>
  //       <Card.Content style={styles.contentView}>
  //         <Text variant="titleLarge" style={styles.text}>{title}</Text>
  //         <Text variant="bodyMedium" style={styles.text}>{rib}</Text>
  //       </Card.Content>
  //     </View>
  //   </View>
  // </Card>
  <View style={styles.row}>
    <Avatar.Image size={70} source={{uri:image}}/>
    <View style={styles.info}>
      <Text variant="titleLarge" style={styles.text}>{title}</Text>
      <Text variant="bodyMedium" style={styles.ribText}>{rib}</Text>
    </View>
    </View>
  )
}

export default SenderHeader

const styles = StyleSheet.create({
      row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        gap: 10,
      },
      info: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 5,
        width: "auto"},
      text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
      },
      ribText: {
        color: COLORS.gray,
        fontSize: 14,
      },
  });
