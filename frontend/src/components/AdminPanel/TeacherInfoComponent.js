import { Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import React, { useEffect } from 'react';
import InfoService from '../AdminPanel/api/InfoService.js';
import Visibility from '@material-ui/icons/Visibility';
import { useHistory } from "react-router";
import Avatar from '@material-ui/core/Avatar';


function TeacherInfoComponent(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Avatar', field: 'avatar', editable: false, render: item => <Avatar src={item.content} alt="" border="3" height="100" width="100" />},
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
  const history = useHistory();

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
      <Grid item container>
        <MaterialTable
          style={{ width: "100%" }}
          columns={columns}
          title="Teacher Information"
          data={data}
          options={{
            actionsColumnIndex: -1, addRowPosition: "first", pageSize: 10
          }}
          actions={[
            {
              icon: 'visibility',
              tooltip: 'see teacher',
              onClick: (event, rowData) => {
                console.log(rowData)
                history.push(`/profile/${rowData.username}`)
              }
            }
          ]}
        />
      </Grid>
    </Grid>

    // </Grid>
  )
}

export default TeacherInfoComponent