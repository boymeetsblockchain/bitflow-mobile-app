import { View } from 'react-native';
import { SafeViewComponent } from '../../components/safeViewComponent';
import { TextWrapperWhite } from '../../components/textWrapper';
import { Header } from '../../components/header';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import tw from 'twrnc';

export default function NotificationsPage() {
  return (
    <SafeViewComponent>
      {/* Header Section */}
      <Header home={false} title='Notifications' />

      {/* Tabs Section */}
      <View style={tw`flex-row justify-between mb-5`}>
        <TextWrapperWhite style={tw`border-b-2 border-[#E5770E] text-[#E5770E] pb-1 text-lg`}>Important</TextWrapperWhite>
        <TextWrapperWhite style={tw`text-gray-400 pb-1 text-lg`}>Preferential</TextWrapperWhite>
        <TextWrapperWhite style={tw`text-gray-400 pb-1 text-lg`}>Blogs</TextWrapperWhite>
      </View>

      {/* Notifications Section */}
      <View>
        <TextWrapperWhite fontWeight='bold' style={tw`mb-4 text-lg`}>Today, 20/07/2022</TextWrapperWhite>

        {/* Notification Card */}
        <View style={tw`bg-[#4A4A4A] rounded-lg p-4 mb-4`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <MaterialIcons name='circle-notifications' color={"#E5770E"} size={24} />
            <TextWrapperWhite fontWeight='bold' style={tw`flex-1 ml-2 text-base`}>
              Building an Application
            </TextWrapperWhite>
          </View>
          <View>
            <TextWrapperWhite style={tw`text-sm mb-1`}>
              Congratulations on successfully registering an app account.
            </TextWrapperWhite>
            <TextWrapperWhite style={tw`text-xs text-gray-400`}>
              10/07/2022
            </TextWrapperWhite>
          </View>
        </View>
        <View style={tw`bg-[#4A4A4A] rounded-lg p-4 mb-4`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <MaterialIcons name='circle-notifications' color={"#E5770E"} size={24} />
            <TextWrapperWhite fontWeight='bold' style={tw`flex-1 ml-2 text-base`}>
              Building an Application
            </TextWrapperWhite>
          </View>
          <View>
            <TextWrapperWhite style={tw`text-sm mb-1`}>
              Congratulations on successfully registering an app account.
            </TextWrapperWhite>
            <TextWrapperWhite style={tw`text-xs text-gray-400`}>
              10/07/2022
            </TextWrapperWhite>
          </View>
        </View>
        <View style={tw`bg-[#4A4A4A] rounded-lg p-4 mb-4`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <MaterialIcons name='circle-notifications' color={"#E5770E"} size={24} />
            <TextWrapperWhite fontWeight='bold' style={tw`flex-1 ml-2 text-base`}>
              Building an Application
            </TextWrapperWhite>
          </View>
          <View>
            <TextWrapperWhite style={tw`text-sm mb-1`}>
              Congratulations on successfully registering an app account.
            </TextWrapperWhite>
            <TextWrapperWhite style={tw`text-xs text-gray-400`}>
              10/07/2022
            </TextWrapperWhite>
          </View>
        </View>
        <View style={tw`bg-[#4A4A4A] rounded-lg p-4 mb-4`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <MaterialIcons name='circle-notifications' color={"#E5770E"} size={24} />
            <TextWrapperWhite fontWeight='bold' style={tw`flex-1 ml-2 text-base`}>
              Building an Application
            </TextWrapperWhite>
          </View>
          <View>
            <TextWrapperWhite style={tw`text-sm mb-1`}>
              Congratulations on successfully registering an app account.
            </TextWrapperWhite>
            <TextWrapperWhite style={tw`text-xs text-gray-400`}>
              10/07/2022
            </TextWrapperWhite>
          </View>
        </View>
        <View style={tw`bg-[#4A4A4A] rounded-lg p-4 mb-4`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <MaterialIcons name='circle-notifications' color={"#E5770E"} size={24} />
            <TextWrapperWhite fontWeight='bold' style={tw`flex-1 ml-2 text-base`}>
              Building an Application
            </TextWrapperWhite>
          </View>
          <View>
            <TextWrapperWhite style={tw`text-sm mb-1`}>
              Congratulations on successfully registering an app account.
            </TextWrapperWhite>
            <TextWrapperWhite style={tw`text-xs text-gray-400`}>
              10/07/2022
            </TextWrapperWhite>
          </View>
        </View>

        {/* Add more notification cards here */}
      </View>
    </SafeViewComponent>
  );
}
