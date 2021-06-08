import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import CountryService from '../AdminPanel/api/CountryService.js'
import { Drawer, Grid } from '@material-ui/core';


function CountryComponent(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Id', field: 'id',editable : false },
    {
      title: 'Country Name', field: 'name'
    },
    { title: 'Admin', field: 'admin' }
  ])

  const [data, setData] = useState([])

  CallgetAllCountries('shammya')


  function CallgetAllCountries(username) {
    useEffect(() => {
      CountryService.getAllCountries(username)
        .then(response => {
          //console.log(response.data)
          //callData(response.data)
          setData(response.data);
          //setData(response.data)
        }
        )
    }, [])
  }

  function CallupdateCountry(username, id, country) {

    CountryService.updateCountry(username, id, country)
      .then(response => {
        //console.log(response.data)
        //callData(response.data)
        //setData(response.data)
      }
      )
  }

  function CalldeleteCountry(username, id) {

    CountryService.deleteCountry(username, id)
      .then(response => {
        ///console.log(response)
        //callData(response.data)
        //setData(response.data)
      }
      )
  }

  function CalladdCountry(username, country,countries) {

    CountryService.addCountry(username, country)
      .then(response => {
        //console.log('call add : ')
        //console.log(response.data)
        setData([...countries,response.data])
        //callData(response.data)
        //setData(response.data)
      }
      )
  }

  return (
    <Grid container style={{ height: "700px" }}>
      <Grid item sm={3}>
        <Drawer
          open={false}
        />
      </Grid>
      <Grid item container sm={9}
        alignItems="center"
        justify="center"
        style={{ height: "100%" }}
      >
        <MaterialTable
          style={{ width: "80%" }}
          title="Country"
          columns={columns}
          data={data}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {

                setTimeout(() => {
                  //setData([...data, newData]);
                  newData.id = -1
                  //console.log(newData.id)
                  CalladdCountry('shammya',newData,data)
                  resolve();
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  console.log(index)
                  setData([...dataUpdate]);
                  CallupdateCountry('shammya', index + 1, newData)

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
                  CalldeleteCountry('shammya', index + 1)
                  resolve();
                }, 1000)
              }),
          }}
          options={{
            actionsColumnIndex: -1, addRowPosition: "first"
          }}
        />
      </Grid>
    </Grid>
  )
}

export default CountryComponent