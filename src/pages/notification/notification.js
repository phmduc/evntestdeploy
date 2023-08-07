import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/notification/notification.css";
import { useSelector, useDispatch } from 'react-redux';
import { blogsGetData} from '~/redux/blogs/actionCreator';
import { categoriesGetData } from '~/redux/blogs/actionCreator';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Notification() {
  const dispatch = useDispatch()
  const { blogs, loading, error } = useSelector((state) => ({
    blogs: state.blogs.blogs,
    loading: state.blogs.loading,
    error: state.blogs.error,
  }));
  const { category } = useSelector((state) => ({
    category: state.category.category,
 
  }));
  let current
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if(category.length>0){
    current = category.filter(elem=>{
     return elem.name == 'Thông báo nền tảng'
    })[0].id
  }
  useEffect(() => {
    dispatch(blogsGetData());
    dispatch(categoriesGetData())
  }, [dispatch]);
    return (
      <FooterOnly>
        <div className="notifition">
          <div className="container">
            <div className="position-relative">
                <span onClick={goBack} className="icon-left">
                  <i class="bi bi-chevron-left"></i>
                </span>
                <h6>Thông báo trang web</h6>
                <a className="icon-right" href="#">
                  <span >
                    <i class="bi bi-person-circle"></i>
                  </span>
                </a>
            </div>
          </div>

          <div className="container">
            <div className="main-content">
              <div className="list-item">
              {blogs ? blogs.map((blog, index)=>{
                console.log(blog)
                if(blog.categories.some(elem=>{
                  return elem == current;
                }))
                return(
                  <a href={`/notifydetail/${blog.id}`} className="item d-flex justify-content-between">
                  <div className="item-title d-flex">
                    <img src="image/speker.webp" />
                    <div className="sec-date">
                      <p>{blog.title.rendered}</p>
                      <div className="date">
                        <span>{blog.date.replace("T", " ")}</span>
                      </div>
                    </div>
                  </div>
                  <span>
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </a>
                )
              }) : ''}
              
              </div>
  
              <div className="pages d-flex justify-content-between align-items-center">
                <div className="item-page">
                  <span>trang đầu</span>
                  <span>
                    <i class="bi bi-dash-lg"></i>
                  </span>
                </div>
  
                <div className="">
                  <span>1</span>
                  <span>/</span>
                  <span>1</span>
                </div>
  
                <div className="item-page">
                  <span>
                    <i class="bi bi-plus-lg"></i>
                  </span>
                  <span>trang sau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterOnly>
    );
  }


export default Notification;
