import React, {useState} from "react";
import { View, Text ,TextInput, TouchableOpacity} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

const [heigth, setHeigth]= useState(null)//setando estados e criando variáveis
const [weigth, setWeigth]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((weigth/(heigth*heigth)).toFixed(2))//Função para calcular imc
}

function validationImc(){//Chama função imcCalculator() quando altura e peso forem diferentes de Null
    if(weigth != null && heigth != null){
        imcCalculator()
        setHeigth(null)
        setWeigth(null) 
        setMessageImc('Seu imc é igual:')
        setTextButton("Calcular novamente")
    }else {
        setImc(null);
        setTextButton("Calcular");
        if (weigth === null && heigth === null) {
          setMessageImc("Preencha peso e altura");
        } else if (weigth === null) {
          setMessageImc("Preencha o peso");
        } else {
          setMessageImc("Preencha a altura");
        }
      } 
    
} 

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText = {setHeigth}
                value = {heigth}
                placeholder = "Ex. 1.75"//Exeplo de altura
                keyboardType = "numeric"//Abrir teclado numérico
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText = {setWeigth}
                value = {weigth}
                placeholder = "Ex. 75.3"//Exeplo de altura
                keyboardType = "numeric"//Abrir teclado numérico
                />
                
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => {
                    validationImc()
                }}>
                    <Text style={styles.texButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                    
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}

