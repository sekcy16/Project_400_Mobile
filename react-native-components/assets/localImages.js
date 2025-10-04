// Local images for special deals
// วางไฟล์รูปภาพใน assets/images/ และ import ตรงนี้

export const localImages = {
  battlefield6: require('./images/battlefield-6.jpg'),
  peak: require('./images/peak.jpg'),
  battlefield2042: require('./images/battlefield-2042.jpg'),
  warhammer: require('./images/warhammer-space-marine-2.jpg'),
  windows11: require('./images/windows-11.jpg'),
  totalwar: require('./images/total-war-three-kingdoms.jpg'),
  minecraft: require('./images/minecraft.jpg'),
  gta5: require('./images/gta-5.jpg'),
  projectzomboid: require('./images/project-zomboid.jpg'),
  squad: require('./images/squad.jpg'),
  placeholder: require('./images/placeholder.png'), // default image when load fails
};

// ฟังก์ชันสำหรับ get local image by id
export const getLocalImageById = (id) => {
  const imageMap = {
    '2039': localImages.battlefield6,
    '2040': localImages.peak,
    '2041': localImages.battlefield2042,
    '2042': localImages.warhammer,
    '2043': localImages.windows11,
    '2044': localImages.totalwar,
    '2045': localImages.minecraft,
    '2046': localImages.gta5,
    '2047': localImages.projectzomboid,
    '2048': localImages.squad,
  };
  
  return imageMap[id] || localImages.placeholder;
};