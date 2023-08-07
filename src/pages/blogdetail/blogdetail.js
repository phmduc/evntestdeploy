import React, { Component, useState } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/blogdetail/blogdetail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSinglePage } from "~/redux/blogs/actionCreator";
import { useNavigate } from "react-router-dom";

function Blogdetail(){
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
        <div className="blogdetail">
          <div className="position-relative">
            <span onClick={goBack} className="icon-left"><i class="bi bi-chevron-left"></i></span>
            <h6>Chi tiết bài viết</h6>
          </div>
          <div className="content">
            <div className="name">{blog[0].title.rendered}</div>
            <div className="input" dangerouslySetInnerHTML={{ __html: blog[0].content.rendered }} />
            <span>-end-</span>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default Blogdetail;
