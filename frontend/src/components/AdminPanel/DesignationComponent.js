import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import DesignationService from '../AdminPanel/api/DesignationService.js'
import { Drawer, Grid } from '@material-ui/core';


function DesignationComponent(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Id', field: 'id', editable: false },
    {
      title: 'Designation ', field: 'type'
    },
    { title: 'Admin', field: 'adminId', editable: false }
  ])

  const [data, setData] = useState([])

  CallgetAllDesignations()


  function getAllDesignations() {
    DesignationService.getAllDesignation()
      .then(response => {
        //console.log(response.data)
        //callData(response.data)
        setData(response.data);
        //setData(response.data)
      }
      )
  }

  function CallgetAllDesignations() {
    useEffect(() => { getAllDesignations() }, []);
  }

  function CallupdateDesignation(designation) {

    DesignationService.updateDesignation(designation)
      .then(response => {
        //console.log(response.data)
        //callData(response.data)
        //setData(response.data)
        getAllDesignations();
      }
      )
  }

  function CalldeleteDesignation(id) {

    DesignationService.deleteDesignation(id)
      .then(response => {
        ///console.log(response)
        //callData(response.data)
        //setData(response.data)
        getAllDesignations();
      }
      )
  }

  function CalladdDesignation(designation) {

    DesignationService.addDesignation(designation)
      .then(response => {
        //console.log('call add : ')
        //console.log(response.data)
        //setData([...countries, response.data])
        //callData(response.data)
        //setData(response.data)
        getAllDesignations();
      }
      )
  }

  return (
    <Grid container>
      <MaterialTable
        style={{ width: "100%" }}
        title="Designation"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {

              setTimeout(() => {
                //console.log(newData.id)
                newData.adminId = 'shammya';
                CalladdDesignation(newData)
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
                CallupdateDesignation(newData)

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
                CalldeleteDesignation(oldData.id);
                resolve();
              }, 1000)
            }),
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </Grid>
  )
}

export default DesignationComponent