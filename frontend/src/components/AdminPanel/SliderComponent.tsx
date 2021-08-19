// import ImageList from "@material-ui/core/ImageList";
// import ImageListItem from "@material-ui/core/ImageListItem";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import React, { useState } from "react";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "space-around",
//       overflow: "hidden",
//       backgroundColor: theme.palette.background.paper,
//     },
//     imageList: {
//       width: 500,
//       height: 450,
//     },
//   })
// );

// const [itemData, setItemData] = useState([{ img: "", title: "", cols: 1 }]);

// export default function BasicImageList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <ImageList rowHeight={160} className={classes.imageList} cols={3}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img} cols={item.cols || 1}>
//             <img src={item.img} alt={item.title} />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }

export {};
