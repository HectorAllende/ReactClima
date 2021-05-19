import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Animated, Touchable } from 'react-native'
import {Picker, Piker} from '@react-native-community/picker'
import { transform } from '@babel/core';

const Formulario = () => {

    const [animacionBoton]= useState(new Animated.Value(1));

    const animacionEntrada=()=>{
        Animated.spring(animacionBoton, {toValue:.75}).start()

    }

    const animacionSalida=()=>{
        Animated.spring(animacionBoton, {toValue:1,friction:1, tension:30})
    }

    const estiloAnimacion={
        transform:[{scale: animacionBoton}]
    }



    return (
        <>

            <View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#667"
                        placeholder="CIudad"
                    />
                </View>

                <View>
                    <Picker itemStyle={{height:120, backgroundColor:'#FFF'}}>
                        <Picker.Item label="seleccione" value=""/>
                        <Picker.Item label="Brasil" value=""/>
                        <Picker.Item label="Argentina" value=""/>
                        <Picker.Item label="Costa Rica" value=""/>
                    </Picker>
                </View>

                <TouchableWithoutFeedback
                    onPressIn={() => animacionEntrada()}
                    onPressOut={() => animacionSalida()}
                >
                    <Animated.View
                        style={styles.btnBuscar, estiloAnimacion}
                    >
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>


            </View>



        </>

      );
}

const styles = StyleSheet.create({
    input:{
        padding:10,
        fontSize:20,
        backgroundColor:'#FFF',
        textAlign:'center',
        marginBottom:20,
        height:50
    },
    btnBuscar:{
        marginTop:50,
        backgroundColor:'#000',
        padding:10,
        justifyContent:'center'

    },
    textoBuscar:{
        color:'#FFF',
        fontSize:18,
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center'
    }

 
})
 
export default Formulario;