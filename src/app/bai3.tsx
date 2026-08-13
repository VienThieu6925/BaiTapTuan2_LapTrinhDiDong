import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

type CourseCardProps = {
  title: string;
  description: string;
  decorative?: boolean;
};

export default function CourseCard({
  title,
  description,
  decorative = false,
}: CourseCardProps) {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  return (
    <View style={styles.card}>

      <View style={styles.imageBox}>

        {loading && !failed && (
          <ActivityIndicator size="small" />
        )}

        {!failed && (
          <Image
            source={require('../../assets/course.png')}
            style={styles.image}
            resizeMode="cover"
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setFailed(true);
            }}
            accessible={!decorative}
            accessibilityLabel={
              decorative
                ? ''
                : `Hình ảnh minh họa cho khóa học ${title}`
            }
          />
        )}

        {failed && (
          <Text style={styles.placeholder}>
            Không thể tải hình ảnh
          </Text>
        )}

      </View>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => console.log('Xem khóa học')}
      >
        <Text style={styles.buttonText}>
          Xem khóa học
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#e9e5dc',
    borderWidth: 1,
    borderColor: '#bdb8ad',
    borderRadius: 10,
  },

  imageBox: {
    width: '100%',
    minHeight: 150,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 150,
  },

  placeholder: {
    color: '#777',
    fontSize: 14,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 6,
  },

  description: {
    fontSize: 15,
    lineHeight: 21,
    color: '#666',
    marginBottom: 12,
  },

  button: {
    padding: 12,
    backgroundColor: '#174ed8',
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});