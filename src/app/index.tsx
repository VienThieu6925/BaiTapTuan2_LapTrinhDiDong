import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { router, Href } from 'expo-router';

export default function Menu() {
  const exercises = [
    'Exercise 1 — Component Selection',
    'Exercise 2 — Text Stress Test',
    'Exercise 3 — Layout',
    'Exercise 4 — Navigation',
    'Exercise 5 — Forms',
    'Exercise 6 — Lists',
    'Exercise 7 — Images',
    'Exercise 8 — Responsive UI',
    'Exercise 9 — Interaction',
    'Exercise 10 — Final Dashboard',
  ];

  const routes: Href[] = [
    '/bai1',
    '/bai2',
    '/bai3',
    '/bai4',
    '/bai5',
    '/bai6',
    '/bai7',
    '/bai8',
    '/bai9',
    '/bai10',
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Campus Dashboard</Text>
        <Text style={styles.subtitle}>10 Exercises</Text>
      </View>

      <View style={styles.exerciseList}>
        {exercises.map((exercise, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push(routes[index])}
          >
            <View style={styles.number}>
              <Text style={styles.numberText}>
                {index + 1}
              </Text>
            </View>

            <Text style={styles.buttonText}>
              {exercise}
            </Text>

            <Text style={styles.arrow}>›</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1efe8',
  },

  content: {
    padding: 20,
    paddingBottom: 30,
  },

  /* Header */
  header: {
    marginTop: 30,
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#19192d',
  },

  subtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },

  /* Exercise list */
  exerciseList: {
    gap: 12,
  },

  /* Button */
  button: {
    minHeight: 65,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 15,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#dddddd',

    elevation: 2,
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  /* Number */
  number: {
    width: 38,
    height: 38,
    borderRadius: 19,

    backgroundColor: '#174ed8',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 15,
  },

  numberText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  /* Exercise name */
  buttonText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },

  /* Arrow */
  arrow: {
    fontSize: 28,
    color: '#888888',
    marginLeft: 10,
  },
});