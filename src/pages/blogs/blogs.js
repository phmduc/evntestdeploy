import React from 'react';
import FooterOnly from '~/layouts/FooterOnly/FooterOnly.js';
import Tabs from '~/components/tabs/tabs';
import '~/pages/blogs/blogs.css';
import { useSelector, useDispatch } from 'react-redux';
import { blogsGetData} from '~/redux/blogs/actionCreator';
import { categoriesGetData } from '~/redux/blogs/actionCreator';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Blogs(){
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
       return elem.name == 'Tin tức'
      })[0].id
    }

    useEffect(() => {
      dispatch(blogsGetData());
      dispatch(categoriesGetData())
    }, [dispatch]);
    return (
        <FooterOnly>
          <div className='blogs'>
            <div className="position-relative">
              <span onClick={goBack} className="icon-left"><i class="bi bi-chevron-left"></i></span>
              <h6>Tin tức nền tảng</h6>
            </div>
           
            <div className='list-item'>
              {blogs ? blogs.map((blog, index)=>{
                console.log(blog)
                if(blog.categories.some(elem=>{
                  return elem == current;
                }))
                return(
                <a key={index} href={`/blogdetail/${blog.id}`} className='item d-flex justify-content-between align-items-center'>
                  <div className='item-title d-flex'>
                    <p>{blog.title.rendered}</p>
                  </div>
                  <span><i class="bi bi-chevron-right"></i></span>
                </a>)
              }) : ''}
              
            </div>
          </div>
        </FooterOnly>
    );
}

export default Blogs;