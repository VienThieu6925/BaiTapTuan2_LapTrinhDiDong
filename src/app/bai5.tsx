import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

type Announcement = {
  id: string;
  title: string;
  description: string;
};

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Thông báo lịch học',
    description: 'Lịch học mới đã được cập nhật.',
  },
  {
    id: '2',
    title: 'Kết quả học tập',
    description: 'Điểm số của học kỳ hiện tại đã được cập nhật.',
  },
  {
    id: '3',
    title: 'Thông báo từ giảng viên',
    description: 'Có thông tin quan trọng dành cho sinh viên.',
  },
  {
    id: '4',
    title: 'Lịch kiểm tra',
    description: 'Lịch kiểm tra sắp tới đã được công bố.',
  },
];

export default function Bai5() {
  const renderItem = ({
    item,
  }: {
    item: Announcement;
  }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>
        {item.title}
      </Text>

      <Text style={styles.description}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={announcements}

        keyExtractor={(item) => item.id}

        renderItem={renderItem}

        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}

        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>
              Thông báo học tập
            </Text>

            <Text style={styles.headerText}>
              Danh sách các thông báo mới nhất dành cho sinh viên
            </Text>
          </View>
        }

        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Đã hiển thị tất cả thông báo
            </Text>
          </View>
        }

        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>
              Không có thông báo
            </Text>

            <Text style={styles.emptyText}>
              Hiện tại chưa có thông báo học tập mới.
            </Text>
          </View>
        }

        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  list: {
    padding: 20,
  },

  header: {
    padding: 18,
    marginBottom: 12,
    backgroundColor: '#174ed8',
    borderRadius: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },

  headerText: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 21,
    color: '#fff',
  },

  item: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  itemTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },

  description: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 21,
    color: '#666',
  },

  separator: {
    height: 10,
  },

  footer: {
    padding: 20,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 14,
    color: '#777',
  },

  empty: {
    padding: 30,
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },

  emptyText: {
    marginTop: 6,
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
});