
import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import InfoService from '../AdminPanel/api/InfoService.js'
import { Drawer, Grid } from '@material-ui/core';


function StudentInfoComponent(props) {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Username', field: 'username', editable: false },
        { title: 'Course Owned', field: 'courseOwned', editable: false },
        { title: 'Money Spent', field: 'moneySpent', editable: false }
    ])

    const [data, setData] = useState([])


    function getStudentInfo() {
        InfoService.getStudentInfo()
            .then(response => {
                console.log(response.data)
                //callData(response.data)          
                setData(response.data);
                //setData(response.data)
            }
            )
    }

    useEffect(() => { getStudentInfo() }, []);

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
                    title="Student Information"
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

export default StudentInfoComponent