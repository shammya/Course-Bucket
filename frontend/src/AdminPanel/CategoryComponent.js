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
import React, { useState } from 'react';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    color: 'wheat',
    backgroundColor: '#234042',
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
const initTreeData = [
  {
    nodeId: "1",
    label: "Application",
    children: [],
  },
  {
    nodeId: "2",
    label: "Documents",
    children: [
      {
        nodeId: "3",
        label: "a",
        children: [
          {
            nodeId: "4",
            label: "b",
            children: [],
          },
        ]
      },
    ]
  },
  {
    nodeId: "5",
    label: "a",
    children: [
      {
        nodeId: "6",
        label: "b",
        children: [
          {
            nodeId: "7",
            label: "a",
            children: [
              {
                nodeId: "8",
                label: "b",
                children: [],
              },
            ]
          }, {
            nodeId: "9",
            label: "a",
            children: [
              {
                nodeId: "10",
                label: "b",
                children: [],
              },
            ]
          },
        ]
      },
    ]
  },
  {
    nodeId: "11",
    label: "a",
    children: [
      {
        nodeId: "12",
        label: "b",
        children: [],
      },
    ]
  },
]



export default function MultiSelectTreeView() {
  const classes = useStyles();
  const [showTextField, setShowTextField] = useState(0);
  const [treeData, setTreeData] = useState(initTreeData);

  function PrintClickedLabel(event) {
    //console.log(event.target.textContent)
    console.log('print label : ' + event)

    //{onLabelClick = {()=>PrintClickedLabel(this.props.label)}}
  }
  function DFS(array, label) {
    if (array.length === 0) return;
    array.map((item, idx) => {
      if (item.label === label) {
        array.splice(idx, 1);
        console.log(array);
        return;
      }
      DFS(item.children, label);
    })
  }
  function deleteItem(label) {
    let array = treeData;
    DFS(array, label);
    array = array.filter(() => true);
    setTreeData(array);
  }

  function AddData({ data }) {
    const [textFieldData, setTextFieldData] = useState("");
    function handleTextFieldDataChange(event) {
      setTextFieldData(event.target.value);
    }
    function OnUpdateClicked(label) {
      setShowTextField(label)
      setTextFieldData(label)
    }
    function onCancelClicked() {
      setShowTextField(0)
    }
    //console.log(data)
    if (data.length === 0) return null;
    else return (
      <>
        {
          data.map(item => (
            <TreeItem className="category-tree-item" key={item.label} nodeId={item.label} label={
              <>
                {!(showTextField === item.label) && (<Grid container direction="row" alignItems="center">
                  <Grid item container sm>
                    <Typography> {item.label} </Typography>
                  </Grid>
                  <Grid item className={classes.iconContainer}>
                    <IconButton>
                      <UpdateIcon onClick={() => OnUpdateClicked(item.label)} />
                    </IconButton>
                    <IconButton>
                      <DeleteForeverIcon onClick={() => { deleteItem(item.label) }} />
                    </IconButton>
                    <IconButton>
                      <AddCircleIcon onClick={() => {
                        let obj = { nodeId: "100", label: "New category", children: [] };
                        item.children = [...item.children, obj];
                        OnUpdateClicked("New category");
                        console.log(showTextField);
                      }} />
                    </IconButton>
                  </Grid>
                </Grid>)}
                {(showTextField === item.label) && (<Grid container direction="row" alignItems="center">
                  <Grid item container sm>
                    {/* {React.useEffect(()=>{setTextFieldData(item.label)},[])} */}
                    <TextField
                      className={classes.textField}
                      id="outlined-basic"
                      label="Category Name"
                      variant="outlined"
                      defaultValue={item.label}
                      onChange={handleTextFieldDataChange}
                    />
                  </Grid>
                  <Grid item className={classes.iconContainer}>
                    <IconButton>
                      <CheckCircleOutlineIcon onClick={() => { item.label = textFieldData; setShowTextField(0); }} />
                      {/* <CheckCircleOutlineIcon onClick={() => onTickClicked(item.nodeId, textFieldData)} /> */}
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
    <Grid container direction="column" spacing={2} justifyContent='center'>
      <Grid item>

        <h3 style={{ textAlign: 'center' }}>Category List</h3>
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
