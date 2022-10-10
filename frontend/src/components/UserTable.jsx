import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Moment from "react-moment";

function UserTable() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredOrders,setFilteredOrders]=useState([])

  const getOrders = async () => {
    try {
      const response = await axios.get("/api/orders");
      console.log(response.data, "response");
      setOrders(response.data);
      setFilteredOrders(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) =><Moment format="D MMM YYYY" withTitle>
      {row.createdAt}
    </Moment> ,
      sortable: true,
    },
    {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
      },
      {
        name: "Customer",
        selector: (row) => row.userId.firstName+" "+row.userId.lastName,
        sortable: true,
      },
    {
      name: "Purchased",
      selector: (row) => row.productName,
      sortable: true,
    },
    
    
  ];

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(()=>{

    const filterResult=orders.filter((value)=>{
        return value.productName.toLowerCase().includes(search.toLowerCase())
    })

    console.log(filterResult,'filter')

    setFilteredOrders(filterResult)

  },[search])

  return (
    <DataTable
      title="Orders List"
      columns={columns}
      data={filteredOrders}
      pagination
      fixedHeader
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input type="text"
         placeholder="search here"
          className="w-25 form-control"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}/>
      }
    />
  );
}

export default UserTable;
