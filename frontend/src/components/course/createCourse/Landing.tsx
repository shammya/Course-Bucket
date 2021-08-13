import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Category } from "classes/Category";
import { Course } from "classes/Course";
import CategoryService from "components/AdminPanel/api/CategoryService";
import React, { useEffect, useState } from "react";
import { ImageUploader } from "tools/customDesign/ImageUploader";
import { LanguageField } from "tools/customDesign/LanguageField";

export function LandingPage({
  course,
  onCourseAttrChange,
}: {
  course: Course;
  onCourseAttrChange: any;
}) {
  const [categories, setCategories] = useState<Category[]>();
  const [subCategories, setSubCategories] = useState<Category[]>();
  const [mainCategoryId, setMainCategoryId] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [state, setState] = useState({
    title: "",
    subTitle: "",
    description: "",
  });

  // const [course, setCourse] = useState(course);

  useEffect(() => {
    setState({
      title: course.title,
      subTitle: course.subTitle,
      description: course.description,
    });
    CategoryService.getCategories().then((response) => {
      console.log(response.data);
      setCategories(response.data[0].children);
      console.log("Course", course);
      if (course.mainCategory) {
        setMainCategoryId(course.mainCategory.id);
        setSubCategories(
          response.data[0].children.filter(
            (item) => item.id == course.mainCategory.id
          )[0].children
        );
      }
      if (course.subCategory) setSubCategoryId(course.subCategory.id);
    });
    return () => {
      // setCategories([]);
      // setSubCategories([]);
    };
  }, [course]);
  console.log("cover", course.cover);

  return (
    <Grid container direction="column" alignContent="space-between" spacing={2}>
      <Grid item container>
        <Card style={{ width: "100%" }}>
          <CardContent>
            <Grid
              container
              direction="column"
              alignContent="space-between"
              spacing={2}
            >
              <Grid item container>
                <TextField
                  fullWidth
                  label="Course title"
                  value={state.title}
                  variant="outlined"
                  onChange={(event) =>
                    setState({ ...state, title: event.target.value })
                  }
                  onBlur={(event) =>
                    onCourseAttrChange({ title: event.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Course subtitle"
                  value={state.subTitle}
                  onChange={(event) =>
                    setState({ ...state, subTitle: event.target.value })
                  }
                  variant="outlined"
                  onBlur={(event) =>
                    onCourseAttrChange({ subTitle: event.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Course description"
                  value={state.description}
                  onChange={(event) =>
                    setState({ ...state, description: event.target.value })
                  }
                  variant="outlined"
                  multiline
                  rows={4}
                  onBlur={(event) =>
                    onCourseAttrChange({ description: event.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <LanguageField
                  objects={course.languages}
                  onObjectsChange={(languages) =>
                    onCourseAttrChange({ languages: languages })
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container>
        <Card style={{ width: "100%" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ textAlign: "center" }}>
                  Category
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <Typography>Category</Typography> */}
                <FormControl variant="outlined" required fullWidth>
                  <InputLabel>Main Category</InputLabel>
                  <Select
                    value={mainCategoryId}
                    onChange={(event) => {
                      if (event.target.value != 0) {
                        setMainCategoryId(event.target.value as number);
                        setSubCategories(
                          categories?.filter(
                            (item) => item.id == event.target.value
                          )[0].children
                        );
                        setSubCategoryId(0);
                        onCourseAttrChange({
                          mainCategory: categories?.filter(
                            (cat) => cat.id === (event.target.value as number)
                          )[0],
                        });
                      }
                    }}
                    label="Main Category *"
                  >
                    <MenuItem key={0} value={0}>
                      {"--Select--"}
                    </MenuItem>
                    {console.log(categories)}
                    {categories?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" required fullWidth>
                  <InputLabel>Sub Category</InputLabel>
                  <Select
                    value={subCategoryId}
                    onChange={(event) => {
                      setSubCategoryId(event.target.value as number);
                      onCourseAttrChange({
                        subCategory: subCategories?.filter(
                          (cat) => cat.id === (event.target.value as number)
                        )[0],
                      });
                    }}
                    label="Sub Category *"
                  >
                    <MenuItem key={0} value={0}>
                      {"--Select--"}
                    </MenuItem>
                    {subCategories?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container>
        <Card style={{ width: "100%" }}>
          <CardContent>
            <Grid container>
              <ImageUploader
                title="Course Cover"
                imageDestination={course.cover}
                onSetClick={(file) => {
                  onCourseAttrChange({ cover: file });
                }}
                onDeleteClick={() => {
                  onCourseAttrChange({ cover: undefined });
                }}
              />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

{
  /* <Grid container direction="column" spacing={2}>
                  <Grid item container sm>
                    {categories.map((category, idx) => (
                      <Grid item key={category.id}>
                        <Chip
                          size="medium"
                          style={{
                            width: "100%",
                            marginTop: 5,
                            marginRight: 5,
                          }}
                          label={category.name}
                          onDelete={() => {
                            let array = [...categories];
                            array.splice(idx, 1);
                            setCategories(array);
                            onCourseAttrChange({ categories: array });
                          }}
                          color="secondary"
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item container justifyContent="center">
                    {categories.length > 0 && (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setCategories([])}
                      >
                        Clear All
                      </Button>
                    )}
                  </Grid>
                </Grid>
                <CategorySelector
                  categories={categoryList}
                  selectedCategories={categories}
                  onCategorySelectionChange={handleCategoriesChange}
                /> */
}
