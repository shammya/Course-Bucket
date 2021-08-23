
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import MaterialTable from 'material-table';
import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import InfoService from '../AdminPanel/api/InfoService.js';


function StudentInfoComponent(props) {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Avatar', field: 'avatar', editable: false, render: item => <Grid container justifyContent='center'><Avatar src={item.content} alt="" border="3" height="100" width="100" /> </Grid> },
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

            {/* title=""
      data={data}
      options={{
        search: false,
        toolbar: false,
        paging: data.length > 5,
        headerStyle: { textAlign: "center" },
        editCellStyle: { textAlign: "center" },
      }} */}
            <Grid item container>
                <MaterialTable
                    style={{ width: "100%" }}
                    columns={columns.map((item) => ({ ...item, align: "center" }))}
                    title="Student Information"
                    data={data}
                    options={{
                        paging: data.length > 10,
                        headerStyle: { textAlign: "center" },
                        actionsColumnIndex: -1, addRowPosition: "first", pageSize: 10
                    }}
                    actions={[
                        {
                            icon: 'visibility',
                            tooltip: 'see student',
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

export default StudentInfoComponent