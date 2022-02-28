import * as React from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { useEffect, useState } from 'react'; 
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
const Api2 = () => {
    const [nombre, setNombre] = useState([]);
    const [region, setRegion] = useState([]);
    const [capital, setCapital] = useState([])
    const [flag, setFlag] = useState([])
    const [consulta, setConsulta] = useState([]);
    

    const getDatos = async() => {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${consulta}`);
        //const res = await axios.get(`https://restcountries.com/v3.1/name/spain`);
        setNombre(res.data[0].name.common);
        setRegion(res.data[0].region)
        setCapital(res.data[0].capital)
        setFlag(res.data[0].flags.png)
        }
return(
<View style={styles.layout}>
    
<TextInput placeholder="Selecciona un pais" onChangeText={setConsulta}></TextInput>
<Text style={styles.title}>Nombre: {nombre}</Text>
<Text style={styles.title}>Region: {region}</Text>
<Text style={styles.title}>Capital: {capital}</Text>
<Image style={styles.imagen1} source={{uri : flag}}></Image>
<Button title="Buscar" onPress={getDatos}></Button>
</View>
)
}
const styles = StyleSheet.create({
layout: {
flex: 1,
justifyContent: 'center',
padding: 5,
},
title: {
margin: 12,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
imagen1:{
    width:200,
    height:200,
    alignSelf:'center',
}
});
export default Api2;