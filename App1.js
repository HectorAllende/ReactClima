import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Formulario from './components/Formulario'

const App = () => {

    return (
        <>

        <TouchableWithoutFeedback>

            <View style={styles.app}>
                
                <View style={styles.contenido}>
                    <Formulario/>
                </View>


            </View>
           </TouchableWithoutFeedback>

        </>

      );
}

const styles = StyleSheet.create({
    app:{
        flex:1,
        backgroundColor:'rgb(71, 149, 212)',
        justifyContent:'center'
    },
    contenido:{
        marginHorizontal:'2,5%'
    }
})
 
export default App;