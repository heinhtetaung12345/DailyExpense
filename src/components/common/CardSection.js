import React from 'react';
import {View} from 'react-native';

const CardSection=(props)=>
{
return(
    <View style={[styles.containerStyle,props.style]}>
        {props.children}
    </View>
);
};

const styles={
    containerStyle:{
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:15,
        marginRight:15,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor:'powderblue',
        flexDirection:'row',
        position:'relative'
    }
};
export default CardSection;