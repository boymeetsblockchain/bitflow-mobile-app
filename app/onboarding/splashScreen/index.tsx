import { View, Image, StyleSheet, Text, Dimensions, ImageBackground, Button } from 'react-native'
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';


export default function SplashPage() {
   const width = Dimensions.get('window').width;
  return (
    <ImageBackground 
         style={styles.backgroundImage}
        resizeMode='contain'
        source={require('../../../assets/images/splash-screen.png')}
    >
      <Text style={{position:"absolute", top: 8, zIndex:50, right: 0, color:"white"}}>Skip</Text>
         <Carousel
                loop
                width={width}
                height={width / 2}
                style={{position:"absolute", zIndex:20, flexDirection: "column", justifyContent:"center", alignItems: "center", height: "100%"}}
                autoPlay={true}
                data={[{id: 1, title: "Unlock Your Financial Future", text: "Buy, sell, and trade cryptocurrencies with ease.", image: require('../../../assets/images/security.png')}, {id:2, title: "Trade with Confidence", text:"Secure and reliable cryptocurrency trading platform", image: require('../../../assets/images/cloud-coin.png')}]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            height: "100%",
                            flexDirection:"column",
                            alignItems: "center",
                            justifyContent: 'center',
                        }}
                    >
                <Image
  style={{width:"70%", height:300}}
  resizeMode='contain'
  source={item.image}
/> 
      <View>              
                  <Text style={{ textAlign: 'center', fontSize: 24, color:"white" }}>
                         {item.title}
                        </Text>
                         <Text style={{ textAlign: 'center', fontSize: 24, color:"white", paddingTop: 20 }}>
                         {item.text}
                        </Text>
                        </View>
                        </View>
                )}
            />
            <View style={{paddingBottom: 80, paddingHorizontal: 20}}>
            <Button title='Next'  color={"#E5770E"} />
            <Text style={{color:"white", textAlign:"center", paddingTop:20, fontSize: 16}}>Your information is always security</Text>
            </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});