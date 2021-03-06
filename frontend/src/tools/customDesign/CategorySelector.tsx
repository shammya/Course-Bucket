import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import { alpha, makeStyles, withStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import { Category } from "classes/Category";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring"; // web.cjs is required for IE 11 support

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}))(
  (props: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    nodeId: number;
    children?: any;
    key: number;
  }) => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(props.checked);
    }, [props.checked]);

    return (
      <TreeItem
        key={props.key}
        children={props.children}
        nodeId={props.nodeId + ""}
        onLabelClick={(event) => {
          // @ts-ignore
          if (event.target.type === "checkbox") {
            event.preventDefault();
          }
        }}
        label={
          <>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => {
                    props.onChange(!checked);
                    setChecked(!checked);
                  }}
                />
              }
              label=""
            />
            <Typography display="inline">{props.label}</Typography>
          </>
        }
        // TransitionComponent={TransitionComponent}
      />
    );
  }
);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
let i = 1;

export function CategorySelector({
  categories,
  selectedCategories,
  onCategorySelectionChange,
}: {
  categories: Array<Category>;
  selectedCategories: Array<Category>;
  onCategorySelectionChange: (
    category: Category,
    type: "ADD" | "REMOVE"
  ) => void;
}) {
  const classes = useStyles();

  function ExploreData({ data }: { data: Array<Category> }): any {
    function handleDataChange(item: Category, checked: boolean) {
      onCategorySelectionChange(item, checked ? "ADD" : "REMOVE");
    }
    return data.map((item, index) =>
      item.children.length > 0 ? (
        <StyledTreeItem
          key={item.id}
          nodeId={item.id}
          label={item.name}
          checked={selectedCategories.some(
            (selectedCategory) => selectedCategory.id == item.id
          )}
          onChange={(checked) => handleDataChange(item, checked)}
        >
          <ExploreData data={item.children} />
        </StyledTreeItem>
      ) : (
        <StyledTreeItem
          key={item.id}
          nodeId={item.id}
          label={item.name}
          checked={selectedCategories.some(
            (selectedCategory) => selectedCategory.id == item.id
          )}
          onChange={(checked) => handleDataChange(item, checked)}
        />
      )
    );
  }
  return (
    <>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
      >
        <ExploreData data={categories} />
      </TreeView>
    </>
  );
}
