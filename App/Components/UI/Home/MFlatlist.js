import React from 'react'
import {StyleSheet,View,FlatList,} from 'react-native';
function MFlatlist(props) {
    return (
        <FlatList
        {...props}
        ListHeaderComponentStyle={style.ListHeaderComponent}
        keyExtractor={(item) => item.id}
        horizontal={false}
        initialNumToRender={10}
        numColumns={2}
        indicatorStyle={'black'}
        ListEmptyComponent={()=>(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>No data Found</Text></View>)}       
        columnWrapperStyle={style.columnWrapperStyle}
        onEndReachedThreshold={0.1}
        centerContent={true}
        showsVerticalScrollIndicator={false}
        />
    )
}

export default MFlatlist
const style=StyleSheet.create({
    ListHeaderComponent:{
        alignItems:'center',
    },columnWrapperStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:-20
    }
})