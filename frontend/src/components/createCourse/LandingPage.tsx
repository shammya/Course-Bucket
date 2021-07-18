import { Grid, TextField, Typography } from "@material-ui/core";
import { menuItems } from "components/header/MenuBar";
import { CategoryChips } from "components/search/filter/Chips";
import React, { useState } from "react";
import { CustomImageUploader } from "tools/ImageUploader";
import { LanguageField } from "tools/LanguageField";

export function LandingPage({ course, onCourseAttrChange }) {
  const [categories, setCategories] = useState(menuItems);
  return (
    <Grid container direction="column" alignContent="space-between" spacing={1}>
      <Grid item container>
        <TextField
          fullWidth
          label="Course title"
          defaultValue={course.title}
          variant="outlined"
          onBlur={(event) => onCourseAttrChange({ title: event.target.value })}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Course subtitle"
          defaultValue={course.subTitle}
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
          defaultValue={course.description}
          variant="outlined"
          multiline
          rows={4}
          onBlur={(event) =>
            onCourseAttrChange({ description: event.target.value })
          }
        />
      </Grid>
      <Grid item>
        <CustomImageUploader />
      </Grid>
      <Grid item>
        <LanguageField
          objects={course.languages}
          onObjectsChange={(languages) =>
            onCourseAttrChange({ languages: languages })
          }
        />
      </Grid>
      <Grid item>
        <Typography>Category</Typography>
        <CategoryChips
          object={categories}
          onObjectChange={(newCategories) => setCategories(newCategories)}
        />
        {/* <CategorySelector
        objects={categories}
        onObjectsChange={(newCategories) => setCategories(newCategories)}
      /> */}
      </Grid>
    </Grid>
  );
}
