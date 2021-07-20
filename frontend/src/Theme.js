import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    subtitle2: {
      fontSize: 13
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 991,
      lg: 1199,
      xl: 1439
    }
  },

  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [raleway],
  //     },
  //   },
  // },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: "light"
  },
});
Object.assign(lightTheme, {
  overrides: {
    ...lightTheme.overrides,
    MUIRichTextEditor: {
      placeHolder: {
        position: 'relative'
      },
      root: {
        minHeight: 200
      },
    },
    MuiDropzoneArea: {
      root: {
        minHeight: "100%"
      },
    },
    MuiDropzonePreviewList: {
      root: {
        justifyContent: "space-around",
      },
      imageContainer: {
        width: "100%",
        maxWidth: "100%",
        flexBasis: "100%",
      },
      removeButton: {
        top: 0,
        right: 0,
      }
    },
    MuiTypography: {
      root: {
        textAlign: "justify",
      }
    }
    // spacing: {
    //   '&:hover': {
    //   },
    // }
  }
})
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export const useStyles = makeStyles(theme => ({
  tiny: {
    fontSize: "8px",
    fontFamily: "inherit",
  },
  small: {
    fontSize: "12px",
    fontFamily: "inherit",
  },
  medium: {
    fontSize: "16px",
    fontFamily: "inherit",
    lineHeight: "1.1rem"
  },
  big: {
    fontSize: "20px",
    fontFamily: "inherit",
  },
  huge: {
    fontSize: "24px",
    fontFamily: "inherit",
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "inherit",
  }
}))