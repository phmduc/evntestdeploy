import React, { Component, useState } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/realnameauthen/realnameauthen.css";
import { Upload, message, Image, Button, Input } from 'antd';
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import cloudinary from 'cloudinary-core';
import { verifyAccount } from "~/redux/authentication/actionCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cloudinary = new cloudinary.Cloudinary({ cloud_name: 'dgw1cwtd1' }); 
function RealNameAuthen() {
  const user_phone = sessionStorage.getItem('phone')
  const user_id = sessionStorage.getItem('user_id')

  const { Dragger } = Upload;
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [name, setName] = useState('');
  const [CCCD, setCCCD] = useState('');
  const [phone, setPhone] = useState('');



  const dispatch = useDispatch()
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const handleUpload = async () => {
    try {
      if (selectedImages.length !== 2) {
        message.error('Vui lòng chọn đủ 2 ảnh trước khi lưu vào Cloudinary');
        return;
      } else

   
      if(name && phone && CCCD ){
        setUploading(true);
        // Lưu các ảnh đã chọn vào Cloudinary
        const uploadPromises = selectedImages.map(async (image) => {
          const formData = new FormData();
          formData.append('file', image.file);
          formData.append('upload_preset', 'env_upload'); // Thay YOUR_CLOUDINARY_UPLOAD_PRESET bằng upload preset của bạn
  
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/dgw1cwtd1/upload`, // Thay YOUR_CLOUD_NAME bằng cloud name của bạn
            {
              method: 'POST',
              body: formData,
            }
          );
  
          if (!response.ok) {
            throw new Error('Lỗi khi tải lên và lưu ảnh');
          }
  
          const data = await response.json();
          return data.secure_url;
        });
  
        const urls = await Promise.all(uploadPromises);
        const info = {
          real_name: name,
          real_phone: phone,
          id_number: CCCD
        }
        dispatch(verifyAccount(user_id, urls, goBack, info))
        setUploading(false);
        const formUrl =
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSewNJWgnjggWFk7s6yr8Pf3isnY0MxP7lZO-ClpHzNPPLF3Bw/formResponse';
  
        const fields = {
          'entry.39415485': user_phone,
          'entry.1326846868': phone,
          'entry.1912103182': name,
          'entry.181924737': CCCD,
          'entry.506440723': urls[0],
          'entry.1227273925': urls[1],
        };
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(fields).toString(),
        };
    
        const response = await fetch(formUrl, requestOptions);
        setSelectedImages([])
        message.success('Tải lên và lưu ảnh thành công');
        console.log(urls);
      } else{
        toast.error('Vui lòng điền đầy đủ thông tin')
      }
     
    

    } catch (error) {
      setUploading(false);
      setSelectedImages([])
    }
  };


  const handleDelete = (image) => {
    const updatedImages = selectedImages.filter((item) => item !== image);
    setSelectedImages(updatedImages);
  };

  const canUpload = selectedImages.length < 2 ;
  const canSave = selectedImages.length === 2;

  const props = {
    name: 'file',
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      if (canUpload) {
        setSelectedImages([...selectedImages, { file }]);
      } else {
        message.error('Bạn chỉ được phép tải lên tối đa 2 ảnh');
      }
      return false;
    },
  };

    return (
      <FooterOnly>
        <div className="realnameauthen">
          <div className="position-relative">
            <span onClick={goBack} className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </span>
            <h6>Xác minh tài khoản</h6>
          </div>

          <div className="main-content">
            <div className="item">
              <div><span>Tên</span></div>
              <div>
                <Input value={name} onChange={(e)=>{setName(e.target.value)}}></Input>
              </div>
            </div>
            <div className="item">
              <div><span>Số CCCD/CMND</span></div>
              <div>                
                <Input value={CCCD} onChange={(e)=>{setCCCD(e.target.value)}}></Input>
              </div>
            </div>
            <div className="item">
              <div><span>Số điện thoại</span></div>
              <div>                
                <Input value={phone} onChange={(e)=>{setPhone(e.target.value)}}></Input>
              </div>
            </div>
            <div className="item">
              <div><span>Ảnh CMND/CCCD</span></div>
              <div><span>Vui lòng đăng 2 mặt trước/sau</span></div>
            </div>
          </div>
          <div class="d-flex flex-column">
            {selectedImages.map((image, index) => (
             <div className="position-relative">
                <div key={index} style={{ marginTop: '20px' }}>
                  <Image src={URL.createObjectURL(image.file)} alt={`Ảnh ${index + 1}`} width={200} />
                  <Button
                    type="danger"
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(image)}
                    style={{ marginTop: '10px' }}
                  >
                    Xoá ảnh
                  </Button>
                </div>
             </div>
            ))}
          </div>

          <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Kéo và thả hoặc nhấn để chọn ảnh</p>
          <p className="ant-upload-hint">Hỗ trợ tải lên một ảnh duy nhất.</p>
        </Dragger>
        {canSave && (
        <Button
          type="primary"
          style={{ marginTop: '20px' }}
          onClick={handleUpload}
          loading={uploading}
        >
          Xác minh
        </Button>
      )}
      {!canSave && (
        <Button
          type="primary"
          style={{ marginTop: '20px' }}
          disabled
        >
          Vui lòng đăng đủ 2 ảnh
        </Button>
      )}
        </div>
     
    
      </FooterOnly>
    );
  }


export default RealNameAuthen;
