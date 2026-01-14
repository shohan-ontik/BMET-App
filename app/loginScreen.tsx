import {
  loginSchema,
  LoginSchemaType,
} from "@/components/screens/login/loginSchema";
import ThemedButton from "@/components/ui/basics/themed-button";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { FormInput } from "@/components/ui/form/form-input";
import PhoneInputField from "@/components/ui/form/phone-input-field";
import { loginTr, tLogin } from "@/i18n/loginLocal";
import { language } from "@/redux/features/ui/uiSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function LoginScreen() {
  const appLanguage = useSelector(language);
  loginTr.locale = appLanguage;

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchemaType>({
    defaultValues: {},
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  function onSubmit(data: LoginSchemaType) {
    console.log(data);
  }

  return (
    <View className="flex-1 items-center justify-center p-4">
      <ThemedText type="title">{tLogin("welcome")}</ThemedText>
      <ThemedText>{tLogin("login")}</ThemedText>
      <View className="w-full gap-3 mt-6">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PhoneInputField
              value={value}
              onChange={onChange}
              error={!!errors?.["phone"]}
              onBlur={onBlur}
            />
          )}
          name="phone"
        />
        <FormInput
          control={control}
          name={"password"}
          secureTextEntry
          placeholder="Password"
          errors={errors}
        />
        <ThemedButton onPress={handleSubmit(onSubmit)}>
          {tLogin("loginText")}
        </ThemedButton>
      </View>
    </View>
  );
}
