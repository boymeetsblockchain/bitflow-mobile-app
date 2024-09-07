import { View, Image } from 'react-native';
import { SafeViewComponent } from '../../components/safeViewComponent';
import { Header } from '../../components/header';
import tw from 'twrnc';
import { TextWrapperWhite } from '../../components/textWrapper';

export default function Qrcode() {
  return (
    <SafeViewComponent>
      {/* Header with title "Scan" */}
      <Header home={false} title="Scan" />

      {/* Main QR Code Scanning Instruction Area */}
      <View style={tw`flex-1 justify-center items-center gap-y-6 px-6`}>
        <TextWrapperWhite style={tw`text-center text-base`}>
          Align QR Code within the frame area to scan.
        </TextWrapperWhite>

        {/* QR Code Image */}
        <Image
          source={require('../../assets/images/scan-qrcode.png')}
          style={tw`w-full h-56`}
          resizeMode="contain"
        />

        <TextWrapperWhite style={tw`text-center text-base`}>
          Scanning will start automatically.
        </TextWrapperWhite>
      </View>

      {/* Cancel Button */}
      <View style={tw`items-center mb-10`}>
        <View
          style={tw`bg-gray-600 rounded-md px-8 py-3 items-center justify-center`}
        >
          <TextWrapperWhite style={tw`text-white text-lg font-bold`}>
            Cancel
          </TextWrapperWhite>
        </View>
      </View>
    </SafeViewComponent>
  );
}
