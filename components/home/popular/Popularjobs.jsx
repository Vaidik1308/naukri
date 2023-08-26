import React,{useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { COLORS,SIZES } from '../../../constants';
import useFetch from '../../../hook/useFetch';




const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = useState();
  const {data,isLoading,error,refetch} = useFetch(
    'search', {
      query: 'React developer',
      num_pages:1
    }
  )
  const handleCardPress = (item) => {
    router.push(`/jobs-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  // console.log(data);
  // const isLoading = false
  // const error = false
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary}/>
        ) : error ? (
          <Text>Something went wrong </Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <PopularJobCard
                item={item}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap:SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs