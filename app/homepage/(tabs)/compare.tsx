import { View, Text } from 'react-native'
import { SafeViewComponent } from '../../../components/safeViewComponent'
import { TextWrapper } from '../../../components'
import { CryptoCard } from '../../../components/marketcomponents/cryptoMarket'
export default function home() {
  return (
    <SafeViewComponent>
      <CryptoCard/>
    </SafeViewComponent>
  )
}