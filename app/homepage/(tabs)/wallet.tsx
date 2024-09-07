import { View, Text } from 'react-native'
import { SafeViewComponent } from '../../../components/safeViewComponent'
import { TextWrapperWhite } from '../../../components/textWrapper'
import { Wallet } from '../../../components/walletcomponents/wallet'
import { WalletCard } from '../../../components/walletcomponents/card'
export default function home() {
  return (
    <SafeViewComponent>
      <Wallet/>
      <WalletCard/>
    </SafeViewComponent>
  )
}