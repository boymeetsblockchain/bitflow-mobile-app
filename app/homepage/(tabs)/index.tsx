import { View, Text } from 'react-native'
import { SafeViewComponent } from '../../../components/safeViewComponent'
import { TextWrapper } from '../../../components'
import tw from 'twrnc'
export default function home() {
  return (
   <SafeViewComponent>
      <TextWrapper style={tw `text-white`} fontWeight='bold'>Home</TextWrapper>
      </SafeViewComponent>
  )
}