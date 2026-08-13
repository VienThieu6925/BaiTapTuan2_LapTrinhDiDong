import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

type ButtonProps = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
};

function PrimaryButton({
  title,
  disabled = false,
  loading = false,
  onPress,
}: ButtonProps) {
  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={({ pressed }) => [
        styles.primary,
        pressed && styles.pressed,
        focused && styles.focused,
        disabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.primaryText}>{title}</Text>
      )}
    </Pressable>
  );
}

function SecondaryButton({
  title,
  disabled = false,
  loading = false,
  onPress,
}: ButtonProps) {
  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={({ pressed }) => [
        styles.secondary,
        pressed && styles.pressedSecondary,
        focused && styles.focused,
        disabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#174ed8" />
      ) : (
        <Text style={styles.secondaryText}>{title}</Text>
      )}
    </Pressable>
  );
}

type IconButtonProps = {
  icon: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
};

function IconButton({
  icon,
  disabled = false,
  loading = false,
  onPress,
}: IconButtonProps) {
  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      accessibilityRole="button"
      accessibilityLabel="Nút chức năng"
      style={({ pressed }) => [
        styles.iconButton,
        pressed && styles.iconPressed,
        focused && styles.focused,
        disabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#333" />
      ) : (
        <Text style={styles.icon}>{icon}</Text>
      )}
    </Pressable>
  );
}

export default function Bai4() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Exercise 4 — Press-state system
      </Text>

      <Text style={styles.label}>
        Primary Button
      </Text>

      <PrimaryButton
        title="Đăng nhập"
        onPress={() => console.log('Primary')}
      />

      <PrimaryButton
        title="Đang tải..."
        loading
      />

      <PrimaryButton
        title="Đã vô hiệu hóa"
        disabled
      />

      <Text style={styles.label}>
        Secondary Button
      </Text>

      <SecondaryButton
        title="Hủy"
        onPress={() => console.log('Secondary')}
      />

      <SecondaryButton
        title="Đang tải..."
        loading
      />

      <SecondaryButton
        title="Đã vô hiệu hóa"
        disabled
      />

      <Text style={styles.label}>
        Icon Button
      </Text>

      <View style={styles.iconRow}>
        <IconButton
          icon="🔔"
          onPress={() => console.log('Notification')}
        />

        <IconButton
          icon="⚙️"
          loading
        />

        <IconButton
          icon="🗑️"
          disabled
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: '#555',
  },

  primary: {
    minHeight: 48,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#174ed8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  secondary: {
    minHeight: 48,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#174ed8',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  secondaryText: {
    color: '#174ed8',
    fontSize: 16,
    fontWeight: 'bold',
  },

  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  icon: {
    fontSize: 21,
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  pressedSecondary: {
    backgroundColor: '#e5e5e5',
  },

  iconPressed: {
    opacity: 0.6,
  },

  focused: {
    borderWidth: 2,
    borderColor: '#ff9800',
  },

  disabled: {
    opacity: 0.45,
  },
});