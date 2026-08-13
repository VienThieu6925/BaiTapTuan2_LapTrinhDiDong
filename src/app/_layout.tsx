import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Exercises',
        }}
      />

      <Stack.Screen
        name="bai1"
        options={{
          title: 'Exercise 1',
        }}
      />

      <Stack.Screen
        name="bai2"
        options={{
          title: 'Exercise 2',
        }}
      />

      <Stack.Screen name="bai3" options={{ title: 'Exercise 3' }} />
      <Stack.Screen name="bai4" options={{ title: 'Exercise 4' }} />
      <Stack.Screen name="bai5" options={{ title: 'Exercise 5' }} />
      <Stack.Screen name="bai6" options={{ title: 'Exercise 6' }} />
      <Stack.Screen name="bai7" options={{ title: 'Exercise 7' }} />
      <Stack.Screen name="bai8" options={{ title: 'Exercise 8' }} />
      <Stack.Screen name="bai9" options={{ title: 'Exercise 9' }} />
      <Stack.Screen name="bai10" options={{ title: 'Exercise 10' }} />
    </Stack>
  );
}