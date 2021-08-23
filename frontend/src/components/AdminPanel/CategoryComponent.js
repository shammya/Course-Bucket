import { Grid, IconButton, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UpdateIcon from '@material-ui/icons/Update';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import React, { useEffect, useState } from 'react';
import CategoryService from '../AdminPanel/api/CategoryService.js';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    color: 'wheat',
    backgroundColor: '#234042',
    margin: '0 auto',
  },
  iconContainer: {
    opacity: "0.3",
    '&:hover': {
      opacity: 1,
    }
  },
  textField: {
    width: "100%"
  }
});



export default function MultiSelectTreeView() {
  const classes = useStyles();
  const [showTextField, setShowTextField] = useState(0);
  const [treeData, setTreeData] = useState([]);

  // console.log(
  // CategoryService.getAllCategories()
  //   .then(response => {
  //     //console.log(response.data)
  //     //callData(response.data)          
  //    // setTreeData(response.data);
  //    return response.data;
  //     //setData(response.data)
  //   }
  //   ));

  CallgetAllCategories()

  function getAllCategories() {
    CategoryService.getCategories()
      .then(response => {
        //console.log(response.data)
        //callData(response.data)          
        setTreeData(response.data);
        //setData(response.data)
      }
      )
  }

  function CallgetAllCategories() {
    useEffect(() => { getAllCategories() }, []);
  }



  function PrintClickedLabel(event) {
    //console.log(event.target.textContent)
    console.log('print label : ' + event)

    //{onLabelClick = {()=>PrintClickedLabel(this.props.label)}}
  }
  // function DFS(array, label) {
  //   if (array.length === 0) return;
  //   array.map((item, idx) => {
  //     if (item.name === label) {
  //       array.splice(idx, 1);
  //       console.log(array);
  //       return;
  //     }
  //     DFS(item.children, label);
  //   })
  // }
  // function deleteItem(label) {
  //   let array = treeData;
  //   DFS(array, label);
  //   array = array.filter(() => true);
  //   setTreeData(array);
  // }

  function AddData({ data }) {
    const [textFieldData, setTextFieldData] = useState("");
    function handleTextFieldDataChange(event) {
      setTextFieldData(event.target.value);
    }
    function callAddCategory(category) {
      CategoryService.addCategory(category)
        .then(response => {

          getAllCategories();
        }
        )
    }

    function callUpdateCategory(category) {
      CategoryService.updateCategory(category)
        .then(response => {

          getAllCategories();
        }
        )
    }

    function callDeleteCategory(id) {
      CategoryService.deleteCategory(id)
        .then(response => {

          getAllCategories();
        }
        )
    }

    function onCancelClicked() {
      setShowTextField(0)
    }

    function onUpdateClicked(id) {
      setShowTextField(id);
    }
    //console.log(data)
    if (data.length === 0) return null;
    else return (
      <>
        {
          data.map(item => (
            <TreeItem className="category-tree-item" key={item.id} nodeId={item.name} label={
              <>
                {!(showTextField === item.id) && (<Grid container direction="row" alignItems="center">
                  <Grid item container sm>
                    <Typography> {item.name} </Typography>
                  </Grid>
                  <Grid item className={classes.iconContainer}>
                    <IconButton>
                      <UpdateIcon onClick={(event) => {
                        event.stopPropagation();
                        onUpdateClicked(item.id)
                      }} />
                    </IconButton>
                    <IconButton>
                      <DeleteForeverIcon onClick={(event) => {
                        event.stopPropagation();
                        callDeleteCategory(item.id)
                      }} />
                    </IconButton>
                    <IconButton>
                      <AddCircleIcon onClick={(event) => {
                        event.stopPropagation();
                        let obj = { name: "New category", parentId: item.id, adminId: 'shammya', children: [] };
                        //item.children = [...item.children, obj];

                        callAddCategory(obj);
                        console.log(showTextField);
                      }} />
                    </IconButton>
                  </Grid>
                </Grid>)}
                {(showTextField === item.id) && (<Grid container direction="row" alignItems="center">
                  <Grid item container sm>
                    {/* {React.useEffect(()=>{setTextFieldData(item.name)},[])} */}
                    <TextField
                      className={classes.textField}
                      id="outlined-basic"
                      label="Category Name"
                      variant="outlined"
                      defaultValue={item.name}
                      onChange={handleTextFieldDataChange}
                      onClick={event =>
                        event.stopPropagation()}
                    />
                  </Grid>
                  <Grid item className={classes.iconContainer}>
                    <IconButton>
                      <CheckCircleOutlineIcon onClick={(event) => {
                        event.stopPropagation();
                        let category = { id: item.id, name: textFieldData, parentId: item.parentId, adminId: 'shammya', children: [] };
                        callUpdateCategory(category); setShowTextField(0);
                      }}
                      />
                      {/* <CheckCircleOutlineIcon onClick={() => onTickClicked(item.id, textFieldData)} /> */}
                    </IconButton>
                    <IconButton>
                      <CancelIcon onClick={event => {

                        event.stopPropagation();
                        onCancelClicked();
                      }} />
                    </IconButton>
                  </Grid>
                </Grid>)}
              </>
            }
            >
              <AddData data={item.children} />
            </TreeItem>
          ))
        }
      </>
    )
  }
  return (
    <Grid container direction="column" spacing={2} justifyContent='center'>
      <Grid item>

        <h3 style={{ textAlign: 'center', color: 'white' }}>Category List</h3>
      </Grid>
      <Grid item>

        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
          onNodeSelect={PrintClickedLabel}
        >
          <AddData data={treeData} />
        </TreeView>
      </Grid>
    </Grid>
  );
}
