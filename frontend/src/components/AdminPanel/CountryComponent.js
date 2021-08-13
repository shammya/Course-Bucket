import { Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import React, { useEffect } from 'react';
import CountryService from '../AdminPanel/api/CountryService.js';


function CountryComponent(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Id', field: 'id', editable: false },
    {
      title: 'Country Name', field: 'name'
    },
    { title: 'Admin', field: 'adminId', editable: false }
  ])

  const [data, setData] = useState([])

  CallgetAllCountries()

  function getAllCountries() {
    CountryService.getAllCountries()
      .then(response => {
        console.log(response.data)
        //callData(response.data)          
        setData(response.data);
        //setData(response.data)
      }
      )
  }

  function CallgetAllCountries() {
    useEffect(() => { getAllCountries() }, []);
  }

  function CallupdateCountry(country) {

    CountryService.updateCountry(country)
      .then(response => {
        //console.log(response.data)
        //callData(response.data)
        //setData(response.data)
        getAllCountries();
      }
      );
  }
  function CalldeleteCountry(id) {

    CountryService.deleteCountry(id)
      .then(response => {
        ///console.log(response)
        //callData(response.data)
        //setData(response.data)
        getAllCountries();
      }
      );

  }

  function CalladdCountry(country) {

    CountryService.addCountry(country)
      .then(response => {
        //console.log('call add : ')
        //console.log(response.data)
        //setData([...countries,response.data])
        //callData(response.data)
        //setData(response.data)
        getAllCountries();
      }
      )
  }

  return (
    <Grid container>
      {/* <Grid item sm={3}>
        <Drawer
          open={false}
        />
      </Grid>
      <Grid item container sm={9}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100%" }}
      > */}
      <MaterialTable
        style={{ width: "100%" }}
        columns={columns}
        title="Country"
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                newData.adminId = 'shammya';
                //console.log(newData.id)
                CalladdCountry(newData)
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataUpdate = [...data];
                // const index = oldData.tableData.id;
                // dataUpdate[index] = newData;
                // console.log(index)
                //setData([...dataUpdate]);
                CallupdateCountry(newData);
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataDelete = [...data];
                // const index = oldData.tableData.id;
                // dataDelete.splice(index, 1);
                // setData([...dataDelete])
                CalldeleteCountry(oldData.id);
                resolve();
              }, 1000)
            }),
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first", pageSize: 10
        }}
      />
    </Grid>
    // </Grid>
  )
}

export default CountryComponent