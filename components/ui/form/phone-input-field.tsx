import PhoneInput from "@perttu/react-native-phone-number-input";
import React, { useRef, useState } from "react";
import { Platform, StyleSheet } from "react-native";

interface PhoneInputFieldProps {
  value: string;
  onChange: () => void;
  error?: boolean;
  onBlur?: () => void;
  placeholder?: string;
}

export default function PhoneInputField({
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}: Readonly<PhoneInputFieldProps>) {
  const phoneInput = useRef<PhoneInput>(null);
  const defaultCode = "BD";
  const [isFocused, setIsFocused] = useState(false);

  return (
    <PhoneInput
      countryPickerProps={{ renderFlagButton: false }}
      ref={phoneInput}
      placeholder={placeholder ?? ""}
      defaultCode={defaultCode as any}
      value={value}
      layout="first"
      onChangeCountry={(text) => console.log(text)}
      onChangeFormattedText={onChange}
      withDarkTheme
      textInputStyle={[
        styles.input,
        Platform.OS === "android" && { width: "100%" },
      ]}
      containerStyle={[
        styles.input,
        styles.containerStyle,
        {
          borderColor: error ? "#ef4444" : isFocused ? "#62B4D4" : "#d4d4d4",
        },
      ]}
      textContainerStyle={styles.textContainerStyle}
      codeTextStyle={styles.codeTextStyle}
      textInputProps={{
        onFocus: () => setIsFocused(true),
        onBlur: () => {
          setIsFocused(false);
          onBlur?.();
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", marginTop: 20 },
  input: {
    height: 44,
    fontSize: 16,
    color: "#344054",
  },
  containerStyle: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    height: 46,
    padding: 0,
    marginTop: 8,
  },
  textContainerStyle: {
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  codeTextStyle: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#344054",
    height: 44,
    marginTop: Platform.OS === "android" ? 22 : 25,
  },
});
