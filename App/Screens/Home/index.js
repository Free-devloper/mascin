import React,{useEffect, useState} from 'react'
import { Text } from 'react-native';
import { StyleSheet,View,ActivityIndicator,Dimensions,SectionList,RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import {Image } from 'react-native-elements'
import { theme } from '../../Components/Theme';
import MActivityIndicator from '../../Components/UI/ActivityIndicator';
import { GETPRODUCTSLIST } from '../../appStore/actions/ProductAction';
import {ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MCard from '../../Components/UI/Card';
import MFlatlist from '../../Components/UI/Home/MFlatlist';
import { S_WIDTH, W_WIDTH } from '../../Components/UI/NativeUI';
import { SafeAreaView } from 'react-native';
function Home(props) {
    const[loading,setLoading]=useState(true);
    const [selected_id,SetSelectedid]=useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [ERROR,setError]=useState(false);
    const ImageData=[
        require('../../src/assets/Images/Home/full-width-header.png'),
        require('../../src/assets/Images/Home/full-width-footer.png')   
    ]
    const render_card=(item,index)=>{
        return(
            <>
            <View style={{flex:1,margin:1,flexDirection:'column',flexGrow:1,flexShrink:-1}}>
            <MCard  item={item} index={index}/>
            </View>
            </>
        )
    }
    function render_view_all(Type){return(
        <>
        <View style={style.ListHeadingView}><Text style={style.ListHeading}>{Type}</Text><TouchableOpacity><Text style={style.Viewbtntxt}>View All</Text></TouchableOpacity></View>
        </>
    )}
    const ListHeaderComponent=({source,mode})=>{
        return(<>
         <Image
                source={source}
                style={style.HeaderComponentImg}
                resizeMode={mode}
                fadeDuration={1000}
                PlaceholderContent={<ActivityIndicator animating={true} color={theme.colors.neutral.dark} size={40} />}
                />
                {render_view_all('Featured Listings')}
        </>)
    }
    const ListFooterComponent=({source,mode})=>{
        return(<>
         <Image
                source={source}
                style={{ width:S_WIDTH-10,height:S_WIDTH/2.1,borderRadius:10,borderTopRightRadius:0,alignSelf:'flex-end' }}
                resizeMode={mode}
                fadeDuration={1000}
                PlaceholderContent={<ActivityIndicator animating={true} color={theme.colors.neutral.dark} size={40} />}
                />
        </>)
    }
    const Recent_Products=()=>{
        return(    
        <MFlatlist
        {...props}
        data={props.Products.List.slice(props.Products.List.length-4,props.Products.List.length)} 
        ListHeaderComponent={()=>(render_view_all('Recently Added'))}
        horizontal={false}
        renderItem={({item,index})=>render_card(item)}
        refreshing={refreshing}
        onRefresh={onRefresh}
        extraData={selected_id}
        ListFooterComponent={<ListFooterComponent mode={'contain'} source={ImageData[1]} />}
        ListFooterComponentStyle={style.ListFooterComponentStyle}
        />
        );
    }
    const Top_Selling=()=>{
        return(
            <MFlatlist
        {...props}
        data={props.Products.List.slice(4,8)} 
        ListHeaderComponent={()=>(render_view_all('Top Selling'))}
        horizontal={false}
        renderItem={({item,index})=>render_card(item)}
        refreshing={refreshing}
        onRefresh={onRefresh}
        extraData={selected_id}
        ListFooterComponent={Recent_Products}
        />
        );
    }
    const Check_Products=()=>{
        if(props.Products.List){
            setError(true);
            setLoading(false)
        }else{
            setError(false)
            setLoading(false)
        }
    }
    useEffect(()=>{
        async function _ONLOAD(){
            await props.GetProducts();
            setLoading(false)
           }
           _ONLOAD();
        return ()=>{
        }
    },[])

    const wait = (timeout) => {
        return new Promise(resolve => {
           resolve(props.GetProducts());
        });
      }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait().then(()=>{
            setRefreshing(false);
        })
      }, []);
    if(loading)
    {
        return(
           <MActivityIndicator size={36}/>
        )
    }else if(ERROR)
    {
        return(

            <View style={style.maincontainer}>
        <ScrollView
        contentContainerStyle={style.maincontainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Error Loading Data Pull down to Refresh</Text>
      </ScrollView>
            </View>
        )
    }
    else{
    return (
     <>
     <SafeAreaView style={style.maincontainer}>
        <MFlatlist
        {...props}
        data={props.Products.List.slice(0,4)} 
        ListHeaderComponent={<ListHeaderComponent mode={'cover'} source={ImageData[0]}/>}
        horizontal={false}
        renderItem={({item,index})=>render_card(item)}
        refreshing={refreshing}
        onRefresh={onRefresh}
        extraData={selected_id}
        ListFooterComponent={Top_Selling}
        />
        </SafeAreaView>
     </>
    )
    }
}
const mapDipatchToprops=(dispatch)=>({
    GetProducts:()=>dispatch(GETPRODUCTSLIST()),
})
const mapStateToProps=(state)=>{
    return({
      Products:state.Products
    })
  }
export default connect(mapStateToProps,mapDipatchToprops)(Home);

const style=StyleSheet.create({
    maincontainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fff',
        padding:5,
    },
    containterone:{
        flex:1,
        width:'100%',
        alignItems:'center',
    },containertwo:{
        flex:1,
        width:'100%',
        justifyContent:'flex-start',
        alignItems:'center'
    },HeaderComponentImg:{
        width:Dimensions.get('window').width-10,
        height:Dimensions.get('window').width/2.1,
        borderRadius:10,
        borderTopRightRadius:0,
    },ListHeadingView:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    ListHeading:{
        ...theme.text.title,
        padding:10,
    },Viewallbtn:{
        alignSelf:'flex-end',
        alignContent:'flex-end',
        alignItems:'flex-end'
    },Viewbtntxt:{
        textAlign:'right',
        textAlignVertical:'center',
        marginRight:10,
        ...theme.text.bodythree,
        color:theme.colors.primary
    },ListFooterComponentStyle:{
        flex:1,
        alignItems:'center',
        width:W_WIDTH,
    }

})
