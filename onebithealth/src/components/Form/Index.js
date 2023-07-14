import React, {useState} from "react";
import { View, Text ,TextInput, Button} from "react-native";
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
        return
    }
    setImc(null)//else 
    setTextButton("Calcular")
    setMessageImc("Preencha peso e altura")
    
}

    return(
        <View style={styles.formContext}>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText = {setHeigth}
                value = {heigth}
                placeholder = "Ex. 1.75"//Exeplo de altura
                keyboardType = "numeric"//Abrir teclado numérico
                />

                <Text>Peso</Text>
                <TextInput
                onChangeText = {setWeigth}
                value = {weigth}
                placeholder = "Ex. 75.365"//Exeplo de altura
                keyboardType = "numeric"//Abrir teclado numérico
                />
                <Button 
                onPress = {() => validationImc()}//Quando for pressionado cria uma arrow function para calcular o valor
                title = {textButton}/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}

