import { FieldValues } from "react-hook-form";
import { TextInput } from "react-native";
import { BaseFormInput, BaseFormInputProps } from "./base-form-input";

type FormInputProps<T extends FieldValues> = Omit<
  BaseFormInputProps<T>,
  "renderInput"
>;

export const FormInput = <T extends FieldValues>(props: FormInputProps<T>) => {
  return (
    <BaseFormInput
      {...props}
      renderInput={(inputProps) => <TextInput {...inputProps} />}
    />
  );
};
