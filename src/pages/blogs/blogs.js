import React from 'react';
import FooterOnly from '~/layouts/FooterOnly/FooterOnly.js';
import Tabs from '~/components/tabs/tabs';
import '~/pages/blogs/blogs.css';
import { useSelector, useDispatch } from 'react-redux';
import { blogsGetData} from '~/redux/blogs/actionCreator';
import { useEffect } from 'react';

function Blogs(){
    const dispatch = useDispatch()
    const { blogs, loading, error } = useSelector((state) => ({
      blogs: state.blogs.blogs,
      loading: state.blogs.loading,
      error: state.blogs.error,
    }));
    useEffect(() => {
      dispatch(blogsGetData());
    }, [dispatch]);
    return (
        <FooterOnly>
          <div className='blogs'>
            <h6>Tin tức nền tảng</h6>
            <div className='list-item'>
              {blogs.map((blog, index)=>{
                console.log(blog)
                return(
                <a href='/blogs/blogdetail/' className='item d-flex justify-content-between align-items-center'>
                  <div className='item-title d-flex'>
                    <p>{blog.title.rendered}</p>
                  </div>
                  <span><i class="bi bi-chevron-right"></i></span>
                </a>)
              })}
              
            </div>
          </div>
        </FooterOnly>
    );
}

export default Blogs;