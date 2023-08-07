// import React, { Component, useState } from "react";
// import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
// import Tabs from "~/components/tabs/tabs";
// import "~/pages/realnameauthen/realnameauthen.css";
// import { Upload, message, Image } from 'antd';
// import { InboxOutlined } from '@ant-design/icons';

// function RealNameAuthen() {
//   const { Dragger } = Upload;
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleUpload = (file) => {
//     try {
//       setSelectedImage(URL.createObjectURL(file));
//       message.success('Tải ảnh lên thành công');
//     } catch (error) {
//       message.error('Lỗi khi tải ảnh lên');
//       console.error(error);
//     }
//   };
//   const handleDelete = (image) => {
//     const updatedImages = selectedImages.filter((item) => item !== image);
//     setSelectedImages(updatedImages);
//   };
//   const props = {
//     name: 'file',
//     multiple: false,
//     showUploadList: false,
//     beforeUpload: (file) => {
//       handleUpload(file);
//       return false; // Ngăn việc tải lên tự động của Ant Design
//     },
//   };
//     return (
//       <FooterOnly>
//         <div className="realnameauthen">
//           <div className="position-relative">
//             <span className="icon-left">
//               <i class="bi bi-chevron-left"></i>
//             </span>
//             <h6>Nạp tiền</h6>
//           </div>

//           <div className="main-content">
//             <div className="item">
//               <div><span>Tên</span></div>
//               <div><span>v* trà dũng</span></div>
//             </div>
//             <div className="item">
//               <div><span>mã số</span></div>
//               <div><span>123***********123</span></div>
//             </div>
//           </div>
//         </div>
//         <Dragger {...props}>
//           <p className="ant-upload-drag-icon">
//             <InboxOutlined />
//           </p>
//           <p className="ant-upload-text">Kéo và thả hoặc nhấn để chọn ảnh</p>
//           <p className="ant-upload-hint">Hỗ trợ tải lên một ảnh duy nhất.</p>
//         </Dragger>
//         {selectedImages.map((image, index) => (
//         <div key={index} style={{ marginTop: '20px' }}>
//           <h2>Xem trước ảnh {index + 1}:</h2>
//           <Image src={image.url} alt={`Ảnh ${index + 1}`} width={200} />
//           <Button
//             type="danger"
//             icon={<DeleteOutlined />}
//             onClick={() => handleDelete(image)}
//             style={{ marginTop: '10px' }}
//           >
//             Xoá ảnh
//           </Button>
//         </div>
//       ))}
//       </FooterOnly>
//     );
//   }


// export default RealNameAuthen;
