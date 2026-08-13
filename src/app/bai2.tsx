import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Bai1() {
  const courses = [
    'Lập trình ứng dụng di động nâng cao',
    'Phát triển ứng dụng Web hiện đại',
    'Cấu trúc dữ liệu và giải thuật',
    'Phân tích và thiết kế phần mềm',
  ];

  const activities = [
    'Thông báo về lịch học và lịch kiểm tra sắp tới',
    'Kết quả học tập và điểm số mới được cập nhật',
    'Thông tin quan trọng từ giảng viên và nhà trường',
  ];

  const tasks = [
    'Hoàn thành bài tập lập trình ứng dụng di động',
    'Nộp báo cáo dự án trước thời hạn quy định',
  ];

  const navigation = [
    'Đăng ký môn học',
    'Kết quả điểm số',
    'Bản đồ khuôn viên',
    'Hộp thư điện tử',
    'Thư viện học tập',
  ];

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >

        <View style={styles.card}>
          <View style={styles.profile}>
            <View style={styles.avatarPlaceholder} />

            <View style={styles.flex}>
              <Text style={styles.title}>
                Thông tin tài khoản sinh viên và hồ sơ học tập
              </Text>

              <Text style={styles.text}>
                Thông tin cá nhân và hoạt động học tập trong học kỳ hiện tại
              </Text>
            </View>

            <Pressable style={styles.avatar}>
              <Text style={styles.avatarText}>👤</Text>
            </Pressable>

            <Pressable style={styles.bell}>
              <Text>🔔</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>
            Chào mừng bạn quay trở lại với hệ thống quản lý học tập
            dành cho sinh viên
          </Text>

          <Text style={styles.text}>
            Theo dõi khóa học, điểm số, thông báo và các hoạt động
            học tập quan trọng của bạn.
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Danh sách các khóa học và môn học đang được đăng ký
          </Text>

          <View style={styles.row}>
            {courses.map((course) => (
              <Pressable key={course} style={styles.course}>
                <Text style={styles.courseText}>{course}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.bottomCard}>
            <Text style={styles.sectionTitle}>
              Thông báo và hoạt động học tập mới nhất
            </Text>

            {activities.map((item) => (
              <Pressable key={item} style={styles.item}>
                <Text style={styles.itemText}>{item}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.bottomCard}>
            <Text style={styles.sectionTitle}>
              Công việc và nhiệm vụ học tập cần hoàn thành
            </Text>

            {tasks.map((item) => (
              <Pressable key={item} style={styles.item}>
                <Text style={styles.itemText}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.navigation}>
          {navigation.map((item) => (
            <Pressable key={item} style={styles.navButton}>
              <Text style={styles.navText}>{item}</Text>
            </Pressable>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#eeece5',
  },

  scroll: {
    flex: 1,
    margin: 14,
    backgroundColor: '#fff',
  },

  content: {
    padding: 15,
    gap: 10,
  },

  card: {
    padding: 16,
    backgroundColor: '#e9e5dc',
    borderWidth: 1,
    borderColor: '#bdb8ad',
    borderRadius: 11,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarPlaceholder: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 6,
    backgroundColor: '#bbb9b2',
    marginRight: 12,
  },

  flex: {
    flex: 1,
    minWidth: 0,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    lineHeight: 25,
  },

  text: {
    marginTop: 6,
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },

  avatar: {
    padding: 10,
    marginLeft: 8,
    borderRadius: 25,
    backgroundColor: '#174ed8',
  },

  avatarText: {
    fontSize: 20,
  },

  bell: {
    padding: 10,
    marginLeft: 6,
    borderRadius: 7,
    backgroundColor: '#d9d6ce',
  },

  separator: {
    minHeight: 18,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ff7777',
    borderRadius: 5,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#555',
    lineHeight: 23,
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  course: {
    flex: 1,
    minWidth: 120,
    padding: 12,
    borderWidth: 1,
    borderColor: '#bdb8ad',
    borderRadius: 7,
  },

  courseText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 20,
  },

  bottomRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  bottomCard: {
    flex: 1,
    minWidth: 280,
    padding: 14,
    backgroundColor: '#e9e5dc',
    borderWidth: 1,
    borderColor: '#bdb8ad',
    borderRadius: 11,
  },

  item: {
    padding: 10,
    marginBottom: 7,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ff7777',
    borderRadius: 7,
  },

  itemText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 20,
  },

  navigation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    padding: 12,
    backgroundColor: '#e9e5dc',
    borderWidth: 1,
    borderColor: '#bdb8ad',
    borderRadius: 11,
  },

  navButton: {
    flexGrow: 1,
    flexBasis: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: '#bdb8ad',
    borderRadius: 6,
    alignItems: 'center',
  },

  navText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});