import React from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
} from 'react-native';

type Announcement = {
  id: string;
  title: string;
  description: string;
};

type AnnouncementSection = {
  title: string;
  data: Announcement[];
};

const sections: AnnouncementSection[] = [
  {
    title: 'Today',
    data: [
      {
        id: '1',
        title: 'Thông báo lịch học',
        description: 'Lịch học hôm nay đã được cập nhật.',
      },
      {
        id: '2',
        title: 'Thông báo từ giảng viên',
        description: 'Có thông tin mới dành cho sinh viên.',
      },
    ],
  },
  {
    title: 'This Week',
    data: [
      {
        id: '3',
        title: 'Lịch kiểm tra',
        description: 'Lịch kiểm tra trong tuần đã được công bố.',
      },
      {
        id: '4',
        title: 'Kết quả học tập',
        description: 'Điểm số mới đã được cập nhật.',
      },
    ],
  },
  {
    title: 'Earlier',
    data: [
      {
        id: '5',
        title: 'Thông báo học kỳ',
        description: 'Thông tin học kỳ trước.',
      },
      {
        id: '6',
        title: 'Thông báo thư viện',
        description: 'Thông tin về tài liệu học tập.',
      },
    ],
  },
];

export default function Bai6() {
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

  const renderSectionHeader = ({
    section,
  }: {
    section: AnnouncementSection;
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>
        {section.title}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={true}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>
              Thông báo học tập
            </Text>

            <Text style={styles.headerText}>
              Các thông báo được phân loại theo thời gian
            </Text>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.footer}>
            Đã hiển thị tất cả thông báo
          </Text>
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>
              Không có thông báo
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
    padding: 16,
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
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
  },

  sectionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#e0e0e0',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
    fontSize: 16,
    lineHeight: 22,
    color: '#666',
  },

  separator: {
    height: 8,
  },

  footer: {
    padding: 20,
    textAlign: 'center',
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
});