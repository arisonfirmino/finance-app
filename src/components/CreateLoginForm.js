import { Text, View, TouchableOpacity, TextInput } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Digite seu nome."),
  surname: yup.string().required("Digite seu sobrenome."),
  email: yup
    .string()
    .email("Insira um email válido.")
    .required("Insira seu email."),
  password: yup
    .string()
    .min(8, "A senha precisa ter 8 caracteres.")
    .required("Digite sua senha."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não conferem.")
    .required("Confirme sua senha."),
});

export default function CreateLoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = (data) => console.log(data);

  return (
    <View className="flex-1">
      <View className="flex-1">
        <View className="my-3">
          <Text className="text-xl text-text-color">Nome</Text>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu nome"
                className="h-14 border-b border-solid border-bg-color text-xl text-text-color"
              />
            )}
          />
          {errors.name && (
            <Text className="mt-1 text-[#de362a]">{errors.name?.message}</Text>
          )}
        </View>

        <View className="my-3">
          <Text className="text-xl text-text-color">Sobrenome</Text>

          <Controller
            control={control}
            name="surname"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu sobrenome"
                className="h-14 border-b border-solid border-bg-color text-xl text-text-color"
              />
            )}
          />
          {errors.surname && (
            <Text className="mt-1 text-[#de362a]">
              {errors.surname?.message}
            </Text>
          )}
        </View>

        <View className="my-3">
          <Text className="text-xl text-text-color">Email</Text>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Insira seu email"
                className="h-14 border-b border-solid border-bg-color text-xl text-text-color"
              />
            )}
          />
          {errors.email && (
            <Text className="mt-1 text-[#de362a]">{errors.email?.message}</Text>
          )}
        </View>

        <View className="my-3">
          <Text className="text-xl text-text-color">Senha</Text>

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry={true}
                placeholder="Digite sua senha"
                className="h-14 border-b border-solid border-bg-color text-xl text-text-color"
              />
            )}
          />
          {errors.password && (
            <Text className="mt-1 text-[#de362a]">
              {errors.password?.message}
            </Text>
          )}
        </View>

        <View className="my-3">
          <Text className="text-xl text-text-color">Confirmação de senha</Text>

          <Controller
            control={control}
            name="passwordConfirmation"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry={true}
                placeholder="Digite sua senha novamente"
                className="h-14 border-b border-solid border-bg-color text-xl text-text-color"
              />
            )}
          />
          {errors.passwordConfirmation && (
            <Text className="mt-1 text-[#de362a]">
              {errors.passwordConfirmation?.message}
            </Text>
          )}
        </View>
      </View>

      <View className="flex items-center justify-center">
        <LinearGradient
          colors={["#2fd78a", "#239e6f"]}
          className="w-full rounded"
        >
          <TouchableOpacity
            onPress={handleSubmit(handleSignUp)}
            className="flex items-center py-3"
          >
            <Text className="text-xl text-white">Enviar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
