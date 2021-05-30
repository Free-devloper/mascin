import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import { theme } from '../../Theme'
import MapView from 'react-native-maps'
import { Image } from 'react-native'
function HomeMap(props) {
    return (
        <> 
         <MapView
         showsUserLocation={true}
         followsUserLocation={true}
        style={styles.mainContainer}
        initialRegion={{
          latitude: 28.6162987,
          longitude: 77.1783818,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
          <MapView.Marker
          key={1}
          coordinate={{latitude:28.633119748313366,
                    longitude:77.18201018993742}}
         title={'Heyre'}
          >
     <Image source={require('../../../src/assets/Images/Markers/TAXI.png')} style={{ width: 30, height:30,resizeMode:'contain' }}/>
    </MapView.Marker>
    <MapView.Marker
          key={2}
          coordinate={{latitude:28.688091965217627,
                    longitude:77.22156047183967}}
         title={'Heyre'}
          >
     <Image source={require('../../../src/assets/Images/Markers/TAXI.png')} style={{ width: 30, height:30,resizeMode:'contain' }}/>
    </MapView.Marker>
    <MapView.Marker
          key={3}
          coordinate={{latitude: 28.686695589287194,
                    longitude:77.22167961194742}}
         title={'Heyre'}
          >
     <Image source={require('../../../src/assets/Images/Markers/TAXI.png')} style={{ width: 30, height:30,resizeMode:'contain' }}/>
    </MapView.Marker>


      </MapView>
        </>
        )
}
const styles=StyleSheet.create({
    mainContainer:{
        flex:4,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default HomeMap;