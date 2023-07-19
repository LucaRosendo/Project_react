import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   formContext: {
    width:"100%",//Largura
    height:"100%",//Altura
    bottom:0,
    backgroundColor:"#FFFFFF",
    alignItems:"Center",
    borderTopLeftRadius:30,//Arredondar bordas
    borderTopRightRadius:30,//Arredondar bordas
    marginTop:30,//Separar do top
   },

   form:{
      width:"100%",
      height:"auto",
      marginTop:39,
      padding:10,
   },

   formLabel:{
   color:"#EB0907",
   fontSize:18,
   paddingLeft:20,
   },

   input:{
      width:"90%",
      borderRadius:50,
      backgroundColor:"#f6f6f6",
      height:40,
      margin:12,
      paddingLeft:10, 
   },

   buttonCalculator:{
      borderRadius:50,
      alignItems:"center",
      justifyContent:"center",
      width:"90%",
      backgroundColor:"#FF0043",
      paddingTop:14,
      paddingBootom:14,
      marginLeft:12,
      marginTop:30,
      paddingVertical: 12,
      paddingHorizontal: 32
   },

   texButtonCalculator:{
      fontSize:20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
   },
});
export default styles