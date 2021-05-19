
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Formulario from './components/Formulario'
import Clima from './components/Clima'

const App = () => {

  const [busqueda, guardarBusqueda]= useState({
    ciudad:'',
    pais:''
  })
  const [resultado, guardarResultado]= useState({})
  const [consultar, guardarConsultar]= useState(false)
  const [bgcolor, guardarBgColor]= useState('rgb(71, 149, 212)')

  const {ciudad, pais}= busqueda

  useEffect(() => {
    const consultarApi = async () => {
      if (consultar) {

        const appId = '38b387dcf45ae20fdb8da8c41d84fce2'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        try {
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          guardarResultado(resultado)
          guardarConsultar(false)

          // MNodifica los colores de fondo basados en el resultado

          const kelvin= 273.15;
          const {mein}= resultado;
          const actual= mein.temp - kelvin

          if(actual<10){
            guardarBgColor('rgb(105, 108, 149)')
          }else if(actual>=10 && actual < 25){
            guardarBgColor('rgb(71, 149, 212)')
          }else{
            guardarBgColor('rgb(178, 28, 61)')
          }

        } catch (error) {
          mostrarAlerta();
        }

      }
    }
    consultarApi()

  }, [consultar])

  const mostrarAlerta=()=>{
    Alert.alert(
      'Error',
      'No hay resltados intenta con otra busqueda',
      [{text:'Entiendo'}]
    )
  }



  const ocultarTeclado=()=>{
    Keyboard.dismiss()
  }

  const bgColorApp={
    backgroundColor: bgcolor
  }


  return (
    <>

      <TouchableWithoutFeedback
        onPress={()=>ocultarTeclado()}
      >
        <View style={[styles.app,bgColorApp ]}>
          <View style={styles.contenido}>

            <Clima
              resultado={resultado}
            />
            <Formulario 
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </View>
        </View>

      </TouchableWithoutFeedback>


    </>

  )
};

const styles = StyleSheet.create({
  app:{
    felx:1,
 
    justifyContent: 'center'
  },
  contenido:{
    marginHorizontal:'2,5%'
  }
 
});

export default App;
