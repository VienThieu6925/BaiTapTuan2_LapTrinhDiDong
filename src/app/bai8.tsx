import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function Bai8() {
  return (
    <View style={styles.screen}>

      <Text style={styles.title}>
        Exercise 8 — Keyboard-safe form
      </Text>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          <Text style={styles.label}>
            Họ và tên
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập họ và tên"
          />

          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập email"
            keyboardType="email-address"
          />

          <Text style={styles.label}>
            Số điện thoại
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>
            Mã sinh viên
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập mã sinh viên"
          />

          <Text style={styles.label}>
            Môn học
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập tên môn học"
          />

          <Text style={styles.label}>
            Ghi chú
          </Text>

          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Nhập ghi chú"
            multiline
            textAlignVertical="top"
          />

          <Text style={styles.label}>
            Nội dung cuối cùng
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Field cuối cùng"
          />

          <View style={styles.space} />

          <Text style={styles.success}>
            Có thể cuộn đến field cuối khi bàn phím mở
          </Text>

        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  flex: {
    flex: 1,
  },

  title: {
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#fff',
  },

  content: {
    padding: 20,
    paddingBottom: 100,
  },

  label: {
    marginBottom: 6,
    marginTop: 14,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },

  input: {
    minHeight: 48,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },

  textarea: {
    minHeight: 120,
    paddingTop: 14,
  },

  space: {
    height: 200,
  },

  success: {
    padding: 15,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#e0f2e9',
    borderRadius: 8,
    color: '#247a4b',
    fontSize: 15,
    textAlign: 'center',
  },
});