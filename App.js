
import { Table } from 'antd';
import 'antd/dist/antd.min.css';
import { columns } from './dataSource';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [dataSource, setDataSource] = useState([]);
  // const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRecords(1);
  }, []);

  const fetchRecords = () => {
    // setLoading(true);
    axios
      .get(`http://127.0.0.1:5000/data/`)
      .then((res) => {
        setDataSource(res.data);
        // setTotalPages(res.data.totalPages);
      });
  };

    // const fetchRecords = () => {
    //   fetch('http://127.0.0.1:5000/data/').then(res=> {
    //       res.json().then(response => {
    //         console.log(response)
    //       });
    //     }
    //   );
    // };

  return (

    <Table dataSource={dataSource} columns={columns} pagination={false} />
  )
  function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
     setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
     setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
   App;
  );
}

}

export default App;
