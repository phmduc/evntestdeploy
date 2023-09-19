import React, { Component, useEffect } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import "~/pages/ourproject/ourproject.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { projectsGetData } from "~/redux/projects/actionCreator";
import { getauthpj, getinfo } from "~/redux/authentication/actionCreator";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";

function OurProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const id = sessionStorage.getItem("user_id");
  const { projects, loading, error } = useSelector((state) => ({
    projects: state.projects.projects,
    loading: state.blogs.loading,
    error: state.blogs.error,
  }));
  const { authpj } = useSelector((state) => ({
    authpj: state.pjauth.pjs,
  }));
  console.log(authpj);
  useEffect(() => {
    dispatch(projectsGetData());
    dispatch(getauthpj(id));
    dispatch(getinfo(id));
  }, [dispatch, id]);
  const columns = [
    {
      title: "Tên dự án",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tiền đầu tư",
      dataIndex: "invested",
      key: "invested",
    },
    {
      title: "Lợi nhuận",
      dataIndex: "profit",
      key: "profit",
    },
  ];
  let usersTableData = [];
  if (authpj) {
    authpj.map((pj) => {
      return usersTableData.push({
        key: id,
        name: pj.product_name,
        invested: numeral(pj.total_invested).format("0,0").replaceAll(",", "."),
        profit: numeral(pj.total_profit).format("0,0").replaceAll(",", "."),
      });
    });
    usersTableData = usersTableData.reverse()
  }

  return (
    <FooterOnly>
      <div className="ourproject">
        <div className="headerOurProject">
          <a href="# " onClick={goBack} className="iconBack">
            <i class="bi bi-chevron-left"></i>
          </a>
          <div className="title">Đầu tư của tôi</div>
        </div>
        <Tabs
          defaultActiveKey="tabOne"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="tabOne" title="Dự án đầu tư khả quan">
            <div className="contentTab contentSlider">
              {projects && projects.length > 0 ? (
                <div className="itemsProject">
                  {projects.map((item, index) => {
                    if (
                      authpj &&
                      authpj.some((elem) => {
                        return elem.product_id == item.id;
                      })
                    )
                      return (
                        <div key={index} className="boxProject">
                          <div className="title">{item.title}</div>
                          {item.thumbnail ? (
                            <div className="image img-wrap mt-2">
                              <img
                                src={item.thumbnail}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          ) : (
                            " "
                          )}
                  
                          <div className="content">
                            <ul>
                              <li className="text-center">
                                <span>
                                  {item.dbevn_product_time_invest}phút
                                </span>
                                <p>Thời gian đầu tư</p>
                              </li>
                              <li className="text-center">
                                <span>{item.dbevn_product_percent}%</span>
                                <p>Tỷ lệ lợi nhuận</p>
                              </li>
                              <li className="text-center">
                                <span>
                                  {numeral(
                                    (item.dbevn_product_min_invest *
                                      item.dbevn_product_percent) /
                                      100
                                  )
                                    .format("0,0")
                                    .replaceAll(",", ".")}
                                </span>
                                <p>Tổng thu nhập</p>
                              </li>
                              <li className="text-center">
                                <span>
                                  {numeral(item.dbevn_product_min_invest)
                                    .format("0,0")
                                    .replaceAll(",", ".")}
                                </span>
                                <p>Số tiền mua tối thiểu</p>
                              </li>
                            </ul>
                            <span className="note">
                              Lợi nhuận được tính theo phút , vốn và lợi nhuận
                              sẽ được hoàn trả khi kết thúc phiên
                            </span>
                            <div className="progressBar">
                              <label>tiến độ dự án:</label>
                            </div>
                          </div>
                        </div>
                      );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          </Tab>
          <Tab eventKey="tabTwo" title="Dự án đã kết thúc">
            <Table dataSource={usersTableData} columns={columns} />;
          </Tab>
        </Tabs>
      </div>
    </FooterOnly>
  );
}

export default OurProject;
