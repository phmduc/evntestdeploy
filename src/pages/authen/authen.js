import React, { useState , useEffect, useCallback, useRef }  from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
// import Tabs from '~/components/tabs/tabs';
import { useNavigate } from "react-router-dom";
import "~/pages/authen/authen.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from 'react-redux';
import { login,register} from "~/redux/authentication/actionCreator";
import actions from "~/redux/authentication/actions";
import Captcha from 'react-captcha-code';
import { ToastContainer, toast } from 'react-toastify';

function Authen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  const [regisphone, setregisPhone] = useState('');
  const [regispassword, setregisPassword] = useState('');
  const [regisrepassword, setregisrePassword] = useState('');
  const [code, setCode] = useState('');
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  const [codes, setCodes] = useState(randomNumber.toString());
  const [codeInput, setCodeInput] = useState('');

  toast("Wow so easy!");

  useEffect(()=>{

  },[dispatch])
  const handleSubmit = (event) => {
    const values ={
      phone: phone,
      password: password,
    }
    dispatch(login(values, () => window.location.reload()))
  }
  const handleSubmitRegis = (event) => {
    if(codeInput == codes){
    const values ={
      phone: regisphone,
      password: regispassword,
      confirm_password: regisrepassword,
      invitation_code: code
    }
    dispatch(register(values, () => window.location.reload()))
  }
  else{
    console.log('Sai mã xác nhận')
  }
  }

    return (
      <FooterOnly>
        <div className="authen">
          <div className="logo">
            <img src="image/logo.webp" />
          </div>

          <div className="form">
            <Tabs
              defaultActiveKey="đăng nhập"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="đăng nhập" title="Đăng nhập">
                <div className="list-input">
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e)=>{
                      setPhone(e.target.value)
                    }}
                    placeholder="Vui lòng nhập số điện thoại của bạn"
                  ></input>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    placeholder="Xin vui lòng nhập mật khẩu"
                  ></input>
                </div>
                <div className="list-btn">
                  <button onClick={handleSubmit}>Đăng nhập</button>
                  <button>Quên mật khẩu</button>
                  <button>Ngôn ngữ</button>
                </div>
              </Tab>

              <Tab eventKey="đăng kí" title="Đăng kí">
                <div className="list-input">
                  <input
                    type="text"
                    placeholder="Vui lòng nhập số điện thoại"
                    value={regisphone}
                    onChange={(e)=>{
                      setregisPhone(e.target.value)
                    }}
                  ></input>
                  <input
                    type="password"
                    placeholder="Xin vui lòng nhập mật khẩu"
                    value={regispassword}
                    onChange={(e)=>{
                      setregisPassword(e.target.value)
                    }}
                  ></input>
                  <input
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    value={regisrepassword}
                    onChange={(e)=>{
                      setregisrePassword(e.target.value)
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Vui lòng nhập mã mời của bạn"
                    value={code}
                    onChange={(e)=>{
                      setCode(e.target.value)
                    }}
                  ></input>
                   <div className="captcha d-flex">
                    <input
                      type="text"
                      placeholder="Mã xác nhận"
                      value={codeInput}
                      onChange={(e)=>{
                        setCodeInput(e.target.value)
                      }}
                    ></input>
                  <Captcha code={codes} />
                  </div>
                </div>
                <div className="list-btn-res">
                  <button onClick={handleSubmitRegis}>Đăng ký ngay</button>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </FooterOnly>
    );
  }

export default Authen;
