# Special Deals React Native Component

React Native Expo component สำหรับแสดง special deals/bestsellers ที่ใช้ในเว็บไซต์เกม

## Features

- 🎮 แสดงรายการ special deals แบบ horizontal scroll
- 📱 Responsive design สำหรับ mobile
- 🎯 Support pagination และ navigation buttons
- ⭐ แสดง rating และ reviews
- 🏷️ แสดง discount percentage และราคา
- 🖼️ รองรับ image loading states
- 🎨 UI/UX ที่สวยงามและใช้งานง่าย

## Installation

```bash
npm install special-deals-react-native
# หรือ
yarn add special-deals-react-native
```

### Dependencies

ต้องติดตั้ง dependencies เหล่านี้ใน project ของคุณ:

```bash
npx expo install @expo/vector-icons
```

## Usage

### Basic Usage

```jsx
import React from 'react';
import { SpecialDealsComponent } from 'special-deals-react-native';

const App = () => {
  return (
    <SpecialDealsComponent
      title="Bestsellers"
      subtitle="The hottest items on our marketplace"
      onViewMore={() => console.log('View more pressed')}
    />
  );
};
```

### Advanced Usage

```jsx
import React from 'react';
import { ScrollView } from 'react-native';
import { SpecialDealsComponent } from 'special-deals-react-native';

const App = () => {
  const handleViewMore = () => {
    // Navigate to special deals page
    navigation.navigate('SpecialDeals');
  };

  return (
    <ScrollView>
      <SpecialDealsComponent
        title="Gaming Deals"
        subtitle="Best gaming deals for hardcore gamers"
        onViewMore={handleViewMore}
        maxItems={10}
        showNavigationButtons={true}
        cardWidth={300}
      />
    </ScrollView>
  );
};
```

## Props

### SpecialDealsComponent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Bestsellers" | หัวข้อของ section |
| `subtitle` | string | "The hottest items..." | รายละเอียดใต้หัวข้อ |
| `onViewMore` | function | undefined | ฟังก์ชันเมื่อกดปุ่ม "View More" |
| `maxItems` | number | 10 | จำนวน items สูงสุดที่จะแสดง |
| `showNavigationButtons` | boolean | true | แสดง/ซ่อน navigation buttons |
| `cardWidth` | number | width * 0.75 | ความกว้างของแต่ละ card |

### SpecialDealCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `item` | object | required | ข้อมูลของ product |
| `onPress` | function | required | ฟังก์ชันเมื่อกด card |
| `width` | number | 280 | ความกว้างของ card |
| `style` | object | {} | Custom styles |

## Data Structure

```javascript
const item = {
  id: "2039",
  title: "Steam • Account • GLOBAL",
  sku: "Battlefield 6 Phantom Edition PC",
  image: "https://example.com/image.jpg",
  discount: "41.0%",
  originalPrice: "€69.99",
  discountedPrice: "€41.29",
  rating: 4.5,
  reviewCount: 1250,
  platform: "Steam",
  region: "GLOBAL",
  category: "Action"
};
```

## Customization

### Styling

คุณสามารถ customize styles ได้โดยการ override default styles:

```jsx
const customStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  title: {
    color: '#333',
    fontSize: 26,
  },
});

<SpecialDealsComponent
  style={customStyles}
  title="Custom Title"
/>
```

### Data Filtering

```jsx
import { 
  getSpecialDealsByCategory, 
  getSpecialDealsByPlatform,
  searchSpecialDeals 
} from 'special-deals-react-native';

// Filter by category
const actionGames = getSpecialDealsByCategory('Action');

// Filter by platform
const steamGames = getSpecialDealsByPlatform('Steam');

// Search
const searchResults = searchSpecialDeals('Battlefield');
```

## Screenshots

[รูปภาพ component ในการใช้งานจริง]

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

หากมีปัญหาหรือข้อสงสัย สามารถสร้าง issue ได้ที่ [GitHub Issues](https://github.com/your-username/special-deals-react-native/issues)