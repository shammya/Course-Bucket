import { Grid, TextField, Typography } from "@material-ui/core"
import { menuItems } from "components/header/MenuBar"
import { CategoryChips } from "components/search/filter/Chips"
import React, { useState } from "react"
import CategorySelector from "tools/CategorySelector"
import { CustomImageUploader } from "tools/ImageUploader"
import { LanguageField } from "tools/LanguageField"

export function LandingPage() {
  const [categories, setCategories] = useState(menuItems)
  return (
    <Grid container direction="column">
      <TextField
        label="Course title"
        variant="outlined"
      />
      <TextField
        label="Course subtitle"
        variant="outlined"
      />
      <TextField
        label="Course description"
        variant="outlined"
        multiline
        rows={4}
      />
      <CustomImageUploader />
      <LanguageField />
      <Typography >Category</Typography>
      <CategoryChips
        object={categories}
        onObjectChange={(newCategories => setCategories(newCategories))}
      />
      <CategorySelector
        objects={categories}
        onObjectsChange={(newCategories) => setCategories(newCategories)}
      />
    </Grid>
  )
}