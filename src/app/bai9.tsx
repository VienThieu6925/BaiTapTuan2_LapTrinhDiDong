import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

type Errors = {
  name?: string;
  studentId?: string;
  email?: string;
  summary?: string;
};

export default function Bai9() {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');

  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};

    if (!name.trim()) {
      newErrors.name =
        'Vui lòng nhập họ và tên, không chỉ nhập khoảng trắng.';
    }

    if (!/^[A-Za-z0-9]{6,12}$/.test(studentId.trim())) {
      newErrors.studentId =
        'Mã sinh viên phải gồm 6–12 ký tự chữ hoặc số.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email =
        'Vui lòng nhập email hợp lệ, ví dụ: sinhvien@example.com.';
    }

    if (summary.length > 150) {
      newErrors.summary =
        `Nội dung quá dài. Vui lòng rút gọn còn tối đa 150 ký tự. Hiện tại: ${summary.length} ký tự.`;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form hợp lệ');
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>
        Exercise 9 — Validation copy
      </Text>

      <Text style={styles.description}>
        Kiểm tra dữ liệu và hiển thị thông báo lỗi rõ ràng.
      </Text>

      <Text style={styles.label}>
        Họ và tên
      </Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhập họ và tên"
        style={[
          styles.input,
          errors.name && styles.inputError,
        ]}
      />

      {errors.name && (
        <Text style={styles.error}>
          {errors.name}
        </Text>
      )}

      <Text style={styles.label}>
        Mã sinh viên
      </Text>

      <TextInput
        value={studentId}
        onChangeText={setStudentId}
        placeholder="Ví dụ: SV123456"
        style={[
          styles.input,
          errors.studentId && styles.inputError,
        ]}
      />

      {errors.studentId && (
        <Text style={styles.error}>
          {errors.studentId}
        </Text>
      )}

      <Text style={styles.label}>
        Email
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="sinhvien@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        style={[
          styles.input,
          errors.email && styles.inputError,
        ]}
      />

      {errors.email && (
        <Text style={styles.error}>
          {errors.email}
        </Text>
      )}

      <Text style={styles.label}>
        Tóm tắt
      </Text>

      <TextInput
        value={summary}
        onChangeText={setSummary}
        placeholder="Nhập nội dung tóm tắt"
        multiline
        textAlignVertical="top"
        style={[
          styles.input,
          styles.textarea,
          errors.summary && styles.inputError,
        ]}
      />

      <Text style={styles.counter}>
        {summary.length}/150 ký tự
      </Text>

      {errors.summary && (
        <Text style={styles.error}>
          {errors.summary}
        </Text>
      )}

      <Pressable
        style={styles.button}
        onPress={validate}
      >
        <Text style={styles.buttonText}>
          Kiểm tra dữ liệu
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 21,
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 14,
    marginBottom: 6,
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

  inputError: {
    borderColor: '#d32f2f',
    borderWidth: 2,
  },

  error: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
    color: '#d32f2f',
  },

  counter: {
    marginTop: 5,
    fontSize: 13,
    color: '#777',
    textAlign: 'right',
  },

  button: {
    minHeight: 48,
    marginTop: 25,
    borderRadius: 8,
    backgroundColor: '#174ed8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});