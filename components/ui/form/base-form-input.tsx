import Feather from "@expo/vector-icons/Feather";
import React, { JSX, useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import { twMerge } from "tailwind-merge";
import ErrorMessage from "../common/error-message";
import Loader from "../common/loader";

export interface BaseFormInputProps<T extends FieldValues> {
  control: any;
  name: any;
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  errors?: any;
  autoCapitalize?: any;
  keyboardType?: any;
  className?: string;
  inputClassName?: string;
  editable?: boolean;
  children?: React.ReactNode;
  multiline?: boolean;
  maxChar?: number;
  transformOnBlur?: (value: string) => string;
  renderInput: (inputProps: any) => JSX.Element;
  isLoading?: boolean;
}

export const BaseFormInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  placeholderTextColor,
  secureTextEntry = false,
  errors,
  autoCapitalize,
  keyboardType,
  className,
  inputClassName,
  editable = true,
  children,
  multiline,
  maxChar,
  transformOnBlur,
  renderInput,
  isLoading = false,
}: BaseFormInputProps<T>) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const hasError = errors?.[name];

  const getTextColorClass = (value: any, editable: boolean) => {
    if (!editable) return "text-gray-400";
    if (value) return "text-primary";
    return "text-gray-500";
  };

  const errorMessage =
    errors && typeof errors[name]?.message === "string"
      ? errors[name]?.message
      : "";

  return (
    <View className={twMerge("w-full mb-4 relative", className)}>
      {label && <Text className="text-secondary mb-1">{label}</Text>}

      <View>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => {
            const commonInputProps = {
              returnKeyType: "done",
              maxLength: maxChar,
              multiline,
              editable,
              onBlur: () => {
                setIsFocused(false);
                if (transformOnBlur && value) {
                  onChange(transformOnBlur(value));
                }
                onBlur();
              },
              onFocus: () => setIsFocused(true),
              onChangeText: onChange,
              defaultValue: value,
              placeholder,
              placeholderTextColor: placeholderTextColor || "#9CA3AF",
              secureTextEntry: secureTextEntry && !passwordVisible,
              autoCapitalize,
              keyboardType,
            };

            return (
              <>
                {renderInput({
                  ...commonInputProps,
                  className: twMerge(
                    `w-full ${
                      multiline ? "h-32 p-3" : "h-[46px]"
                    } text-secondary px-4 border rounded-lg bg-white`,
                    getTextColorClass(value, editable),
                    isFocused ? "border-[#62B4D4]" : "border-gray-300",
                    hasError ? "border-red-500 pr-12" : "",
                    editable ? "" : "bg-gray-50",
                    secureTextEntry ? "pr-12" : "",
                    inputClassName
                  ),
                })}

                {multiline && (
                  <Text className="text-secondary text-sm mt-1">
                    {value ? value.length : 0}/{maxChar} Characters
                  </Text>
                )}

                {hasError && <ErrorMessage message={errorMessage} />}
              </>
            );
          }}
        />

        {secureTextEntry && (
          <Pressable
            onPress={() => setPasswordVisible((prev) => !prev)}
            className="absolute top-0 right-4 h-12 flex items-center justify-center"
          >
            <Feather
              name={passwordVisible ? "eye" : "eye-off"}
              size={16}
              color="#6B7280"
            />
          </Pressable>
        )}

        {children}

        {isLoading && (
          <View className="absolute top-0 right-4 h-12 flex items-center justify-center">
            <Loader size="small" />
          </View>
        )}
      </View>
    </View>
  );
};
