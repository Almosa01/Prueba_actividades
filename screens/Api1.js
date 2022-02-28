import * as React from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { useEffect, useState } from 'react'; 
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
const Api1 = () => {
    const [nombre, setNombre] = useState([]);
    const [avatar, setAvatar] = useState([])
    const [id, setId] = useState([]);
    const [consulta, setConsulta] = useState([]);
    const [consulta2, setConsulta2] = useState([]);
    

    const getDatos = async() => {
        const res = await axios.get(`https://api.github.com/users/${consulta}`);
        //const res2 = await axios.get(`https://api.github.com/users/${consulta2}`)
        setNombre(res.data.login);
        setAvatar(res.data.avatar_url)
        setId(res.data.id)
        }
return(
<View style={styles.layout}>
    
<TextInput placeholder="Introduce tu busqueda" onChangeText={setConsulta}></TextInput>
<Text style={styles.title}>El nombre del desarrollador es: {nombre}</Text>
<Text style={styles.title}>Su id es: {id}</Text>

<Image style={styles.imagen1} source={{uri : avatar}}></Image>
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
export default Api1;