import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function Bai10() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text
        style={styles.title}
        accessibilityRole="header"
      >
        Accessibility Audit
      </Text>

      <Text style={styles.description}>
        Kiểm tra giao diện bằng công nghệ hỗ trợ và
        sửa các vấn đề accessibility.
      </Text>

      <Text
        style={styles.label}
        nativeID="emailLabel"
      >
        Địa chỉ email
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Nhập địa chỉ email"
        keyboardType="email-address"
        autoCapitalize="none"
        accessibilityLabel="Địa chỉ email"
        accessibilityHint="Nhập email của bạn"
        accessibilityRole="text"
        style={styles.input}
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Xem thông báo"
        accessibilityHint="Mở danh sách thông báo"
        style={styles.button}
        onPress={() => console.log('Thông báo')}
      >
        <Text style={styles.buttonText}>
          Xem thông báo
        </Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={
          loading
            ? 'Đang gửi dữ liệu'
            : 'Gửi dữ liệu'
        }
        accessibilityState={{
          busy: loading,
          disabled: loading,
        }}
        disabled={loading}
        onPress={handleSubmit}
        style={[
          styles.submitButton,
          loading && styles.disabledButton,
        ]}
      >
        <Text style={styles.submitText}>
          {loading ? 'Đang gửi...' : 'Gửi dữ liệu'}
        </Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Chức năng chưa khả dụng"
        accessibilityState={{
          disabled: true,
        }}
        disabled
        style={styles.disabledButton}
      >
        <Text style={styles.disabledText}>
          Chưa khả dụng
        </Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Cài đặt"
        accessibilityHint="Mở phần cài đặt"
        style={styles.iconButton}
        onPress={() => console.log('Settings')}
      >
        <Text
          style={styles.icon}
          accessible={false}
        >
          ⚙
        </Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  content: {
    padding: 20,
    paddingBottom: 60,
  },

  title: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#172033',
    marginBottom: 10,
  },

  description: {
    fontSize: 17,
    lineHeight: 25,
    color: '#404b5a',
    marginBottom: 20,
  },

  label: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#172033',
    marginBottom: 7,
  },

  input: {
    minHeight: 50,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#687386',
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#172033',
    fontSize: 17,
    marginBottom: 14,
  },

  button: {
    minHeight: 50,
    paddingHorizontal: 18,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#174ed8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  submitButton: {
    minHeight: 50,
    paddingHorizontal: 18,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#006b3c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  disabledButton: {
    minHeight: 50,
    paddingHorizontal: 18,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#d5d9df',
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledText: {
    color: '#596273',
    fontSize: 17,
    fontWeight: 'bold',
  },

  iconButton: {
    width: 50,
    height: 50,
    marginBottom: 18,
    borderRadius: 25,
    backgroundColor: '#e8edf5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 25,
    color: '#172033',
  },

  infoBox: {
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#aab3c0',
    borderRadius: 8,
    backgroundColor: '#f3f6fa',
  },

  largeText: {
    fontSize: 22,
    lineHeight: 32,
    color: '#172033',
  },

  auditBox: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#eef7f2',
    borderWidth: 1,
    borderColor: '#7ba991',
  },

  auditTitle: {
    fontSize: 19,
    lineHeight: 27,
    fontWeight: 'bold',
    color: '#174d35',
    marginBottom: 10,
  },

  auditItem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#234536',
    marginBottom: 6,
  },
});