import React from "react";
import { Text } from "react-native";

const ErrorMessage = ({ message }: { message: string }) => {
  return <Text className="text-error-600 text-sm">{message}</Text>;
};

export default ErrorMessage;
