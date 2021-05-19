import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import {Picker} from '@react-native-community/picker'

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    const {ciudad, pais}= busqueda;

    const [animacionboton] = useState(new Animated.Value(1));

    const consultarClima=()=>{
        if(ciudad.trim()===''|| pais.trim()===''){
            mostrarAlerta()
            return;
        }
        guardarConsultar(true)
    }

    const mostrarAlerta=()=>{
        Alert.alert(
            'Error',
            'Agrega una ciudad y país para la busqueda',
            [{
                text:'Entendido'
            }]
        )
    }

    const animacionEntrada=()=>{
        Animated.spring(animacionboton,{
            toValue: .75
        }).start();
    }

    const animacionSalida=()=>{
        Animated.spring(animacionboton,{
            toValue: 1,
            friction: 1,
            tension:30,
        }).start();
    }

    const estiloAnimacion ={
        transform:[{scale: animacionboton }]
    }

    return (

        <>

            <View style={styles.formulario}>
                <View>
                    <TextInput
                        value={ciudad}
                        onChangeText={ciudad=>guardarBusqueda({...busqueda, ciudad})}
                        style={styles.input}
                        placeholder="Ciudad"
                        placeholderTextColor="#667"
                    />
                </View>

                <View>
                    <Picker 
                        selectedValue={pais}
                        itemStyle={{height:120, backgroundColor:'#FFF'}}
                        onValueChange={pais=>guardarBusqueda({...busqueda, pais})}
                        >
                        

                        <Picker.Item label="-- Seleccione un país --" value=""/>
                        <Picker.Item label="Estados Unidos" value="US"/>
                        <Picker.Item label="México" value="MX"/>
                        <Picker.Item label="Argentina" value="AR"/>
                        <Picker.Item label="Colombia" value="CO"/>
                        <Picker.Item label="Costa Rica" value="CR"/>
                        <Picker.Item label="Perú" value="PR"/>

                    </Picker>
                   
                </View>


                <TouchableWithoutFeedback
                    onPressIn={()=>animacionEntrada()}
                    onPressOut={()=>animacionSalida()}
                    onPress={()=> consultarClima()}
                >
                    <Animated.View
                        style={[styles.btnBuscar, estiloAnimacion]}

                    >
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </Animated.View>

                </TouchableWithoutFeedback>
            </View>
        </>


    );
}

const styles= StyleSheet.create({
  input:{
      padding: 10,
      height:50,
      backgroundColor:'#FFF',
      fontSize:20,
      marginBottom:20,
      textAlign:'center',
  },
  btnBuscar:{
      marginTop:50,
      backgroundColor: '#000',
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