import { View, Text } from 'react-native'
import { SafeViewComponent } from '../../../components/safeViewComponent'
import { TextWrapper } from '../../../components'
export default function home() {
  return (
    <SafeViewComponent>
      <TextWrapper>Market</TextWrapper>
    </SafeViewComponent>
  )
}