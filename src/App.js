 import React from "react";
 import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/103337638?v=4'

const urlToMyGithub = 'https://github.com/Joaozinm';
const App = () => {

    const handlePressGoToGithub = async () => {
        console.log ('Verificando link');
      const res =  await  Linking.canOpenURL(urlToMyGithub);
      console.log ('Link aprovado');
      console.log ('Abrindo o link...');
      if (res) {
        await Linking.openURL(urlToMyGithub);
      }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content'/>
            <View style= {style.content}>
                <Image style={style.avatar} source={{uri: imageProfileGithub }}/>
                <Text accessibilityLabel="Nome: João Melo" style={[style.defaultText, style.name]}> João Melo </Text>
                <Text accessibilityLabel="Nickname: Joaozinm" style={[style.defaultText, style.nickname]}> Joaozinm </Text>
                <Text accessibilityLabel="Descrição: Estudante de Análise e Desenvolvimento de Sistemas | Apaixonado por tecnologia! | @Joaozinm" style={[style.defaultText, style.description]}> Estudante de Análise e Desenvolvimento de Sistemas | Apaixonado por tecnologia! | @Joaozinm </Text>
                <Pressable onPress={handlePressGoToGithub}> 
                <View style={style.buttom}>
                    <Text style={[style.defaultText, style.textButtom]}>Open in Github</Text>
                </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
 };

  export default App;

  const style = StyleSheet.create ({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttom: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButtom: {
        fontSize: 16,
        fontWeight: 'bold',
    }
    
  })