import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./assets/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'O melhor dia para começar foi ontem mas o segundo melhor é hoje.',
    'Sucesso é o acúmulo de pequenos esforços construídos a cada dia.',
    'A excelência não é um ato mas sim um hábito.',
    'A persistência é o caminho do êxito.',
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase('" ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./assets/biscoitoAberto.png'));
  }

  function reinicia() {
    setImg(require('./assets/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]}
        onPress={reinicia}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>
            Reiniciar biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#DD7B22',
    borderWidth: 1,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DD7B22',
  },
});
