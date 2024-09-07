import { View, Text } from 'react-native'
import { SafeViewComponent } from '../../../components/safeViewComponent'
import { CryptoCard } from '../../../components/homepagecomponents/cryptoCard'
import { Wallet } from '../../../components/homepagecomponents/wallet'
import { Header } from '../../../components/header'
import tw from 'twrnc'
import { CryptoHeader } from '../../../components/homepagecomponents/cryptoHeader'
import { HomePageFeatures } from '../../../components/homepagecomponents/features'
import { RecentTransactions } from '../../../components/homepagecomponents/recent'
export default function home() {
  return (
   <SafeViewComponent>
      <Header home title='Home'/>
      <CryptoHeader/>
      <Wallet/>
      <CryptoCard/>
      <HomePageFeatures/>
      <RecentTransactions/>

      
      </SafeViewComponent>
  )
}