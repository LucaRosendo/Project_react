import React from "react";
import { View, Text ,TextInput} from "react-native"

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.75"//Exeplo de altura
                keyboardType="numeric"//Abrir teclado numérico
                />

                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 75.365"//Exeplo de altura
                keyboardType="numeric"//Abrir teclado numérico
                />
            </View>
        </View>
    )
}

