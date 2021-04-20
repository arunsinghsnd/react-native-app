/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import SnackBar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.0014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const CurrenceyApp = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = currency => {
    if (!inputValue) {
      return SnackBar.show({
        text: 'Please enter a value',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
  };
  return (
    <>
      <ScrollView
        backgroundColor="#1b262c"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              value={inputValue}
              onChangeText={inputValue => setInputValue(inputValue)}
            />
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map(currency => (
              <TouchableOpacity
                key={currency}
                onPress={() => buttonPressed(currency)}
                style={styles.convertButton}>
                {<Text style={styles.convertButtontext}>{currency}</Text>}
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default CurrenceyApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  resultValue: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  convertButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#bbe1fa',
    marginTop: 10,
    backgroundColor: '#0f4c75',
  },
  convertButtontext: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});
