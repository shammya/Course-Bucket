import React from 'react'
import MaterialTable from 'material-table'

function CountryComponent(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    {title :'Id',field :'id',editable : false},
    { 
      title: 'Country Name', field: 'countryname',
      editComponent: props => (
        <input
          type="text"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      )
    },
    { title: 'Admin', field: 'admin' }
  ]);

  const [data, setData] = useState([
    {  countryname: 'Bangladesh', admin: 'shammya' },
    {  countryname: 'palastine', admin: 'shammya' },
  ]);

  return (
    <MaterialTable
      title="Country"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {

            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000)
          }),
      }}
      options={{
        actionsColumnIndex: -1, addRowPosition: "first"
      }}
    />
  )
}

export default CountryComponent