import { View, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { router } from 'expo-router';
import { COLORS } from '@/constants/colors';

export default function Index() {

  const {user, loading} = useAuth();

  useEffect(() => {

    if(loading) return;

    if(user){
      router.replace('/(painel)/home/page')
    }else{
      router.replace('/(auth)/signin/page')
    }

  }, [user, loading])

  return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: COLORS.background}}>
        <ActivityIndicator size={'large'} color={COLORS.primary}/>
      </View>
  )
}