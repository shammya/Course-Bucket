import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Grid, IconButton, Typography, TextField } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import CategoryService from '../AdminPanel/api/CategoryService.js'

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
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
                      <UpdateIcon onClick={() => onUpdateClicked(item.id) } />
                    </IconButton>
                    <IconButton>
                      <DeleteForeverIcon onClick={() => { callDeleteCategory(item.id) }} />
                    </IconButton>
                    <IconButton>
                      <AddCircleIcon onClick={() => {
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
                    />
                  </Grid>
                  <Grid item className={classes.iconContainer}>
                    <IconButton>
                      <CheckCircleOutlineIcon onClick={() => { 
                        let category = { id :item.id ,name: textFieldData, parentId: item.parentId, adminId: 'shammya', children: [] };
                        callUpdateCategory(category) ; setShowTextField(0); }} 
                        />
                      {/* <CheckCircleOutlineIcon onClick={() => onTickClicked(item.id, textFieldData)} /> */}
                    </IconButton>
                    <IconButton>
                      <CancelIcon onClick={onCancelClicked} />
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
    <>
      <h3>Category List</h3>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        onNodeSelect={PrintClickedLabel}
      >
        <AddData data={treeData} />
      </TreeView>
    </>
  );
}
