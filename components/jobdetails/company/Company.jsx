import React from 'react'
import { View, Text,Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURl } from '../../../utils'
// import { Image } from 'react-native-web'

const Company = ({location,jobTitle,companyName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURl(companyLogo) ? companyLogo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          }}
        />
      </View>
    </View>
  )
}

export default Company