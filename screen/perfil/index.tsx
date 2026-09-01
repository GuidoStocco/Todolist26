import { View, Text, Pressable } from 'react-native';
import { useAuth } from '@/hooks/useAuth';


export default function PerfilScreen() {

  const {signOut} = useAuth()

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>PerfilScreen</Text>

      <Pressable onPress={signOut}>
        <Text>Sair</Text>
      </Pressable>
    </View>
  )
}