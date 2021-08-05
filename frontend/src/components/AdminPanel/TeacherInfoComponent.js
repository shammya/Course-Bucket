import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import InfoService from '../AdminPanel/api/InfoService.js'
import { Drawer, Grid } from '@material-ui/core';


function TeacherInfoComponent(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Username', field: 'username', editable: false },
    { title: 'Course Created', field: 'courseCreated', editable: false },
    { title: 'Course purchased', field: 'coursePurchased', editable: false },
    { title: 'Total Income', field: 'totalIncome', editable: false }
  ])

  const [data, setData] = useState([])


  function getTeacherInfo() {
    InfoService.getTeacherInfo()
      .then(response => {
        console.log(response.data)
        //callData(response.data)          
        setData(response.data);
        //setData(response.data)
      }
      )
  }

  useEffect(() => { getTeacherInfo() }, []);

  return (
    <Grid container>
      {/* <Grid item sm={3}>
        <Drawer
          open={false}
        />
      </Grid>
      <Grid item container sm={9}
        alignItems="center"
        justify="center"
        style={{ height: "100%" }}
      > */}
      <Grid item container> 
      <MaterialTable
        style={{ width: "100%" }}
        columns={columns}
        title="Teacher Information"
        data={data}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first", pageSize: 10
        }}
        />
        </Grid>
    </Grid>

    // </Grid>
  )
}

export default TeacherInfoComponent