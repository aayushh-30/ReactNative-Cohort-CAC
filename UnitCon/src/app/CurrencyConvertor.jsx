import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("INR");
  const [targetCurrency, setTargetCurrency] = useState("USD");

  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState([]);

  const [convertedAmount, setConvertedAmount] = useState("0");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRates();
  }, [baseCurrency]);

  const fetchRates = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.frankfurter.dev/v2/rates?base=${baseCurrency}`
      );

      const data = await response.json();

      setRates(data);

      const currencyCodes = data.map((item) => item.quote);

      if (!currencyCodes.includes(baseCurrency)) {
        currencyCodes.unshift(baseCurrency);
      }

      setCurrencies(currencyCodes);

      if (!currencyCodes.includes(targetCurrency)) {
        setTargetCurrency(currencyCodes[0]);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!amount || !targetCurrency) {
      setConvertedAmount("0");
      return;
    }

    const selectedCurrency = rates.find(
      (item) => item.quote === targetCurrency
    );

    if (selectedCurrency) {
      const result =
        Number(amount) * Number(selectedCurrency.rate);

      setConvertedAmount(result.toFixed(2));
    } else if (targetCurrency === baseCurrency) {
      setConvertedAmount(Number(amount).toFixed(2));
    }
  }, [amount, targetCurrency, rates, baseCurrency]);

  const swapCurrencies = () => {
    const temp = baseCurrency;
    setBaseCurrency(targetCurrency);
    setTargetCurrency(temp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Currency Converter
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Amount</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          placeholderTextColor="#777"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Text style={styles.label}>
          From Currency
        </Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={baseCurrency}
            onValueChange={(value) =>
              setBaseCurrency(value)
            }
            dropdownIconColor="#fff"
            style={styles.picker}
          >
            {currencies.map((currency) => (
              <Picker.Item
                key={currency}
                label={currency}
                value={currency}
              />
            ))}
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.swapButton}
          onPress={swapCurrencies}
        >
          <Text style={styles.swapText}>⇅</Text>
        </TouchableOpacity>

        <Text style={styles.label}>
          To Currency
        </Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={targetCurrency}
            onValueChange={(value) =>
              setTargetCurrency(value)
            }
            dropdownIconColor="#fff"
            style={styles.picker}
          >
            {currencies.map((currency) => (
              <Picker.Item
                key={currency}
                label={currency}
                value={currency}
              />
            ))}
          </Picker>
        </View>

        {loading ? (
          <ActivityIndicator
            size="large"
            style={{ marginTop: 30,color:"white" }}
          />
        ) : (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>
              Converted Amount
            </Text>

            <Text style={styles.result}>
              {convertedAmount}
            </Text>

            <Text style={styles.currencyText}>
              {targetCurrency}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CurrencyConverter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#1E293B",
    borderRadius: 24,
    padding: 20,
  },

  label: {
    color: "#CBD5E1",
    marginBottom: 8,
    marginTop: 15,
    fontSize: 14,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#334155",
    borderRadius: 12,
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  pickerContainer: {
    backgroundColor: "#334155",
    borderRadius: 12,
    overflow: "hidden",
  },

  picker: {
    color: "#fff",
  },

  swapButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#38BDF8",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
  },

  swapText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  resultContainer: {
    marginTop: 35,
    alignItems: "center",
  },

  resultLabel: {
    color: "#94A3B8",
    fontSize: 15,
  },

  result: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#38BDF8",
    marginTop: 10,
  },

  currencyText: {
    fontSize: 18,
    color: "#CBD5E1",
    marginTop: 5,
  },
});