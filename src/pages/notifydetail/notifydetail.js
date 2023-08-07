import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/notifydetail/notifydetail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSinglePage } from "~/redux/blogs/actionCreator";
import { useNavigate } from "react-router-dom";

function NotifyDetail() {
  const params = useParams();
  const blog = useSelector((state) => state.blog.data);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
      dispatch(filterSinglePage(parseInt(params.id, 10)));
  }, [ dispatch]);
  if(blog.length > 0){

    return (
      <FooterOnly>
        <div className="notifydetail">
          <div className="position-relative">
            <span onClick={goBack} className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </span>
            <h6>Tập đoàn Điện lực Việt Nam</h6>
          </div>

          <div className="sec-date">
            <p>{blog[0].title.rendered}</p>
            <div className="date">
              <span>{blog[0].date.replace("T", " ")}</span>
            </div>
          </div>

          <div className="content"  dangerouslySetInnerHTML={{ __html: blog[0].content.rendered }}>
          </div>
        </div>
      </FooterOnly>
    );
  }}


export default NotifyDetail;
