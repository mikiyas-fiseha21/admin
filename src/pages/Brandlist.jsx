import { Table } from 'antd';
import React from 'react'


const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Status",
      dataIndex: "staus",
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      staus: `London, Park Lane no. ${i}`,
    });
  }
const Bloglist = () => {
  return (
    <div className="mt-4">
    <h3 className="mb-5 title">Brand list</h3>
    <div>
      <Table columns={columns} dataSource={data1} />
    </div>
  </div>
  )
}

export default Bloglist