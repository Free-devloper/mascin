import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import {Text,View} from 'react-native'
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { theme } from '../../../Components/Theme';
import { GETCategoriesLIST } from '../../../appStore/actions/CategoryAction';

function Categories(props) {
    var data =[];
    const render_LIST=({data})=>{
        return(
        data.map(function(item,i){
            return <Text>love</Text>
          })
        )
    }
    useEffect(()=>{
            async function _ONLOAD(){
                await props.GetCategories();
                  SortCategories();
            }
            _ONLOAD();
            return(()=>{

            })
    },[])
    function SortCategories(){ 
       props.Categories.List.forEach((item,index)=>{
           if(item["parent_id"]==null)
           {
               props.Categories.List.splice(index,1)
              return data.push(item);
           }
       });
    }
    if(props.Categories.loading)
    {
        return(
            <View style={style.mainContainer}>
                <ActivityIndicator animating={true} size={10} color={theme.colors.primary}/>
            </View>
        )
    }else{
    return (
      <>
      <View style={style.mainContainer}>
          <Button title="Get Parent Categories" type="outline" />
          <Text>EHLLO</Text>
          {render_LIST}
             </View>
      </>
    )
    }
}
const mapDipatchToprops=(dispatch)=>({
    GetCategories:()=>dispatch(GETCategoriesLIST()),
})
const mapStateToProps=(state)=>{
    return({
      Categories:state.Categories
    })
  }
export default connect(mapStateToProps,mapDipatchToprops)(Categories);
const style=StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:5,
        width:'100%',
        flexBasis:'100%',
        flexGrow:-1,
        alignItems:'center',
        justifyContent:'center'
    }
})