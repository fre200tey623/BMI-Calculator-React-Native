import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';

function Home(){
    const [massa,setMassa] = useState("");
    const [altura,setAltura] = useState("");
    const [resultado,setResultado] = useState("")
  
    function calcularIMC(){
        setResultado((Number(massa)/(Number(altura)^2)).toFixed(2)) 
    }

    return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
      <Text style={styles.headerText}>Calculadora de <Text style={styles.headerTextDiferentColor}>IMC</Text></Text>
      </View>
      <Text style={styles.fistText}>Calcule seu índice de massa corporal (IMC)  com base em sua altura e peso. O IMC é uma medida comum de avaliação do peso corporal e é usado como uma ferramenta para avaliar o risco de doenças relacionadas ao peso.</Text>
      <View>
        <TextInput onChange={(e)=>{setAltura(e.nativeEvent.text)}} placeholder="Digite sua altura" keyboardType='decimal-pad'></TextInput>
        <TextInput onChange={(e)=>{setMassa(e.nativeEvent.text)}} placeholder="Digite sua massa" keyboardType='decimal-pad'></TextInput>
      </View>
      
      <StatusBar style="auto" />
      <View>
      <TouchableOpacity onPress={calcularIMC}><Text>Calcular</Text></TouchableOpacity>
    </View>

    <View>
      <Text>{resultado}</Text>
    </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerHeader: {
    paddingLeft:20,
    paddingBottom: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTextDiferentColor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B00A3',
  },
  fistText:{
    flex: 1,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
  }
});



export default Home;