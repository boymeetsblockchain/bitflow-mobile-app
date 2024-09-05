import { View, Text } from 'react-native'
import { SafeViewComponent } from '../../../components/safeViewComponent'
import { TextWrapper } from '../../../components'
import { Wallet } from '../../../components/homepagecomponents/wallet'
import { Header } from '../../../components/header'
import tw from 'twrnc'
import { CryptoHeader } from '../../../components/homepagecomponents/cryptoHeader'
export default function home() {
  return (
   <SafeViewComponent>
      <Header home title='Home'/>
      <CryptoHeader/>
      <Wallet/>
      
      </SafeViewComponent>
  )
}