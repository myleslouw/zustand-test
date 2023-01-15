import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, buttonPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={buttonPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: 'red',
    borderRadius: 10
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
  },
});
