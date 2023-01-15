import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from './Components/Button';
import useStore from './Components/zustandStore';

export default function App() {
  const [textInputValue, setTextInputValue] = useState('');

  const store = useStore();
  const words = useStore((state) => state.words)

  const handleAdd = () => {
    store.addWord();
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => store.setNewWord(text)}
            value={store.newWord}
            placeholder="Insert your text!"
          />
          <Button label="add" buttonPress={handleAdd}></Button>
        </View>
        <View style={styles.wordList}>
          {words.map((word) => {
            return (
              <Text key={word} style={{ color: 'white' }}>{word}</Text>
            )
          })}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    paddingTop: 40,
  },
  textContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20
  },
  TextInputContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  textInput: {
    height: 40,
    width: 300,
    padding: 10,
    borderColor: 'white',
    borderWidth: 1,
    placeholderTextColor: 'gray',
    backgroundColor: "white",
  },
  wordList: {
    paddingTop: 20,
  },
  wordItem: {

  }
});
