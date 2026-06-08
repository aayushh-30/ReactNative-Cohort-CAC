import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LENGTH_UNITS = [
  { name: "Millimeter", code: "mm", factor: 0.001 },
  { name: "Centimeter", code: "cm", factor: 0.01 },
  { name: "Meter", code: "m", factor: 1 },
  { name: "Kilometer", code: "km", factor: 1000 },
  { name: "Inch", code: "in", factor: 0.0254 },
  { name: "Foot", code: "ft", factor: 0.3048 },
  { name: "Yard", code: "yd", factor: 0.9144 },
  { name: "Mile", code: "mi", factor: 1609.344 },
];

const LengthConvertor = () => {
  const [value, setValue] = useState("");
  const [baseUnit, setBaseUnit] = useState("cm");
  const [targetUnit, setTargetUnit] = useState("m");
  const [convertedValue, setConvertedValue] = useState("0");
  const [loading, setLoading] = useState(false);

  const convertLength = (value, baseUnit, targetUnit) => {
    const num = parseFloat(value);

    if (isNaN(num)) return "0";

    const baseFactor = LENGTH_UNITS.find(
      (item) => item.code === baseUnit
    ).factor;

    const targetFactor = LENGTH_UNITS.find(
      (item) => item.code === targetUnit
    ).factor;

    return ((num * baseFactor) / targetFactor).toFixed(4);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setConvertedValue(convertLength(value, baseUnit, targetUnit));
      setLoading(false);
    }, 150);
  }, [value, baseUnit, targetUnit]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>📏 Length Converter</Text>
        <Text style={styles.subHeading}>
          Convert between different length units instantly
        </Text>

        <Text style={styles.label}>Enter Value</Text>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Enter length"
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>From</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={baseUnit}
            onValueChange={(itemValue) => setBaseUnit(itemValue)}
          >
            {LENGTH_UNITS.map((item) => (
              <Picker.Item
                key={item.code}
                label={item.name}
                value={item.code}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>To</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={targetUnit}
            onValueChange={(itemValue) => setTargetUnit(itemValue)}
          >
            {LENGTH_UNITS.map((item) => (
              <Picker.Item
                key={item.code}
                label={item.name}
                value={item.code}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Converted Value</Text>

          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text style={styles.resultText}>
              {convertedValue} {targetUnit}
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LengthConvertor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FC",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 6,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },

  subHeading: {
    textAlign: "center",
    color: "#666",
    marginTop: 8,
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  input: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 18,
    marginBottom: 18,
    backgroundColor: "#FAFAFA",
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FAFAFA",
    marginBottom: 18,
  },

  resultCard: {
    backgroundColor: "#4F46E5",
    padding: 25,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
  },

  resultLabel: {
    color: "#D1D5DB",
    fontSize: 15,
    marginBottom: 8,
  },

  resultText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
  },
});