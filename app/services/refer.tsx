import { View, Image, Pressable} from 'react-native'
import { SafeViewComponent } from '../../components/safeViewComponent'
import { Header } from '../../components/header'
import { TextWrapperWhite } from '../../components/textWrapper'
import tw from 'twrnc'
import { Button } from '../../components'
export default function refer() {
  return (
    <SafeViewComponent>
        <Header title='Refferal Program' home={false}/>
        <View style={tw `items-center gap-y-4 justify-center`}>
            <Image source={require('../../assets/images/refer.png')}/>
         </View>
            <TextWrapperWhite fontWeight="extraBold" style={tw `text-[#E5770E] text-center mb-4`}>Refer and Earn Free Cryptocurrency</TextWrapperWhite>
            <TextWrapperWhite >
             Introducing Giottus Referral 2.0. As part of this new program we will be giving away upto 100% of our earning from your referral. And it does not stop there. You get a chance to win upto 10,000 free tokens. Refer, like, share and Earn.</TextWrapperWhite>
             <View style={tw`mt-6`}>
          <TextWrapperWhite style={tw`text-xl mb-3`} fontWeight='bold'>Your Referral Link</TextWrapperWhite>
          <View style={tw`flex-row items-center border border-gray-300 rounded-lg mb-10 p-3`}>
            <TextWrapperWhite style={tw`text-sm text-gray-500 flex-1`}>https://www.giottus.com/?refcode=RRPSFAS</TextWrapperWhite>
            <Pressable style={tw`bg-[#E5770E] py-2 px-4 rounded-lg`}>
              <TextWrapperWhite style={tw`text-white`} fontWeight='bold'>Copy Code</TextWrapperWhite>
            </Pressable>
          </View>
        </View>

        <Button title='Refer Now'/>
    
    </SafeViewComponent>
  )
}