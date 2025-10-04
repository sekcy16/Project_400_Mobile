import React from 'react';
import { ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { SpecialDealsComponent } from './index';

const ExampleApp = () => {
  const handleViewMore = () => {
    console.log('Navigate to all special deals page');
    // นำทางไปยังหน้าดู special deals ทั้งหมด
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        {/* Special Deals Section */}
        <SpecialDealsComponent
          title="Bestsellers"
          subtitle="The hottest items on our marketplace – discover what captured our users' hearts!"
          onViewMore={handleViewMore}
          maxItems={8}
          showNavigationButtons={true}
        />

        {/* สามารถเพิ่ม section อื่น ๆ ได้ */}
        <SpecialDealsComponent
          title="Gaming Deals"
          subtitle="Best gaming deals for hardcore gamers"
          maxItems={5}
          showNavigationButtons={false}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
});

export default ExampleApp;