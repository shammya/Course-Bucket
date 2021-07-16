import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import EduStatusService from '../AdminPanel/api/EduStatusService.js'
import { Drawer, Grid } from '@material-ui/core';


function EduStatusComponent(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Id', field: 'id', editable: false },
    {
      title: 'Educational Status', field: 'type'
    },
    { title: 'Admin', field: 'adminId', editable: false }
  ])

  const [data, setData] = useState([])

  CallgetAllEduStatus()

  function getAllEduStatus() {
    EduStatusService.getAllEduStatus()
      .then(response => {
        //console.log(response.data)
        //callData(response.data)
        setData(response.data);
        //setData(response.data)
      }
      )
  }


  function CallgetAllEduStatus() {
    useEffect(() => { getAllEduStatus()}, [])
  }

  function CallupdateEduStatus( edustatus) {

    EduStatusService.updateEduStatus( edustatus)
      .then(response => {
        //console.log(response.data)
        //callData(response.data)
        //setData(response.data)
        getAllEduStatus();
      }
      )
  }

  function CalldeleteEdustatus( id) {

    EduStatusService.deleteEduStatus(id)
      .then(response => {
        ///console.log(response)
        //callData(response.data)
        //setData(response.data)
        getAllEduStatus();
      }
      )
  }

  function CalladdEduStatus(edustatus) {

    EduStatusService.addEduStatus(edustatus)
      .then(response => {
        //console.log('call add : ')
        //console.log(response.data)
        //setData([...edustatuses, response.data])
        //callData(response.data)
        //setData(response.data)
        getAllEduStatus();
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
          title="Educational Status"
          columns={columns}
          data={data}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  //console.log(newData.id)
                  newData.adminId = 'shammya';
                  CalladdEduStatus( newData)
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
                  // setData([...dataUpdate]);
                  CallupdateEduStatus( newData);
                  resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  // const dataDelete = [...data];
                  // const index = oldData.tableData.id;
                  // dataDelete.splice(index, 1);
                  // setData([...dataDelete]);
                  CalldeleteEdustatus(oldData.id);
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

export default EduStatusComponent