import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

type Course = {
  id: string;
  title: string;
  description: string;
};

const courses: Course[] = [
  {
    id: '1',
    title: 'Lập trình ứng dụng di động',
    description: 'Phát triển ứng dụng bằng React Native.',
  },
  {
    id: '2',
    title: 'Phát triển Web hiện đại',
    description: 'Xây dựng website với công nghệ hiện đại.',
  },
  {
    id: '3',
    title: 'Cấu trúc dữ liệu',
    description: 'Tìm hiểu các cấu trúc dữ liệu cơ bản.',
  },
  {
    id: '4',
    title: 'Phân tích phần mềm',
    description: 'Phân tích và thiết kế hệ thống phần mềm.',
  },
  {
    id: '5',
    title: 'Cơ sở dữ liệu',
    description: 'Quản lý và khai thác dữ liệu.',
  },
  {
    id: '6',
    title: 'Lập trình Java',
    description: 'Phát triển ứng dụng với Java.',
  },
];

export default function Bai7() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>
        Exercise 7 — Responsive Card Laboratory
      </Text>

      <Text style={styles.subtitle}>
        Course Card Grid
      </Text>

      <View style={styles.grid}>
        {courses.map((course) => (
          <View key={course.id} style={styles.card}>
            <Text style={styles.cardTitle}>
              {course.title}
            </Text>

            <Text style={styles.cardText}>
              {course.description}
            </Text>

            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Xem khóa học
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.note}>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  title: {
    margin: 20,
    marginBottom: 8,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },

  subtitle: {
    marginHorizontal: 20,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    padding: 16,
    justifyContent: 'center',
  },

  card: {
    flexBasis: 220,
    minWidth: 180,
    maxWidth: 320,
    flexGrow: 1,

    padding: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 24,
  },

  cardText: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 21,
    color: '#666',
  },

  button: {
    marginTop: 14,
    padding: 10,
    backgroundColor: '#174ed8',
    borderRadius: 7,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  note: {
    margin: 20,
    padding: 16,
    backgroundColor: '#e9e5dc',
    borderRadius: 10,
  },

  noteTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
  },

  noteText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
    marginBottom: 8,
  },
});