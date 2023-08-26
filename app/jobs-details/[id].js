import { View, Text,TouchableOpacity,SafeAreaView,ScrollView,ActivityIndicator,RefreshControl } from 'react-native'
import React,{useState,useCallback} from 'react'
import { Stack,useRouter,useGlobalSearchParams } from 'expo-router';
import {Company,JobAbout,JobFooter,JobTabs,ScreenHeaderBtn,Specifics} from '../../components'
import { COLORS,icons,SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter()
  const {data,isLoading,error,refetch} = useFetch('job-details',{
    job_id:params.id
  })
  const [refreshing,setRefreshing] = useState(false);
  alert(data[0])

  const onRefresh = () => {}
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle:{backgroundColor:COLORS.lightWhite},
          headerShadowVisible:false,
          headerBackVisible:false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl ={icons.left}
              dimension="60%"
              handlePress = {() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl ={icons.share}
              dimension="60%"
    
            />
          ),
          headerTitle:''
        }}
      />
      <>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={onRefresh}
            />
            }
          >
            {isLoading ? (
              <ActivityIndicator size='large' color={COLORS.primary}/>
            ) : error ? (
              <Text>No Data</Text>
            ) : (
              <View style={{padding:SIZES.medium,paddingBottom:100}}>
                <Company
                  // companyLogo={data[0]}
                  companyTitle={data[0].job_title}
                  companyName={data[0].name}
                  location={data[0].job_country}
                />
                <JobTabs/>
              </View>
            )}
        </ScrollView>
      </>
    </SafeAreaView>
  )
}

export default JobDetails