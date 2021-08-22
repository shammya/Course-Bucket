import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
} from "@material-ui/core";
import { useEffect, useState } from "react";

let rules = {
  lettersDigits: {
    pattern: new RegExp(/[~!#%^_+\-=?,./*|\":<>[\]{}`\\()';@&$]/),
    helperText: "Only digits and letters are allowed",
  },
  lettersDigitsNoSpace: {
    pattern: new RegExp(/[~!#%^_+\-=?,./*|\":<>[\]{}`\\()';@&$ ]/),
    helperText: "Only digits and letters are allowed. No space allowed.",
  },
  letters: {
    pattern: new RegExp(/[~!#%^_+\-=?,./*|\":<>[\]{}`\\()';@&$0-9]/),
    helperText: "Only letters are allowed",
  },
  lettersDigitsSomeSChars: {
    pattern: new RegExp(/[*|\":<>[\]{}`\\()';@&$]/),
    helperText: "Special characters are not allowed",
  },
  name: {
    pattern: new RegExp(/[~!#%^_+=?/*|\":<>[\]{}`\\();@&$0-9]/),
    helperText: 'Only letters and ".,\'-" are allowed',
  },
  // number: {
  //   pattern: new RegExp(/^[0-9]*$/),
  //   helperText: "Without space, only digits are allowed.",
  // ,
};
interface IControlledStandardTextField extends StandardTextFieldProps {
  pattern?:
    | "letters-digits"
    | "letters-digits-no-space"
    | "letters"
    | "letters-digits-some-special-char"
    | "name";
}
interface IControlledFilledTTextField extends FilledTextFieldProps {
  pattern?:
    | "letters-digits"
    | "letters-digits-no-space"
    | "letters"
    | "letters-digits-some-special-char"
    | "name";
}
interface IControlledOutlinedTextField extends OutlinedTextFieldProps {
  pattern?:
    | "letters-digits"
    | "letters-digits-no-space"
    | "letters"
    | "letters-digits-some-special-char"
    | "name";
}
export type IControlledTextField =
  | IControlledStandardTextField
  | IControlledFilledTTextField
  | IControlledOutlinedTextField;
export function ControlledTextfield(props: IControlledTextField) {
  const {
    pattern,
    onChange,
    onBlur,
    onFocus,
    helperText,
    defaultValue,
    ...rest
  } = props;
  const [value, setValue] = useState(
    defaultValue == undefined ? "" : defaultValue
  );
  const [showError, setShowError] = useState(false);
  const [showHelperText, setShowHelperText] = useState(false);
  const [statePattern, setPattern] = useState<RegExp | null>(null);
  const [stateHelperText, setHelperText] = useState<string | undefined>();

  useEffect(() => {
    switch (pattern) {
      case "letters-digits":
        setPattern(rules.lettersDigits.pattern);
        setHelperText(rules.lettersDigits.helperText);
        break;
      case "letters-digits-no-space":
        setPattern(rules.lettersDigitsNoSpace.pattern);
        setHelperText(rules.lettersDigitsNoSpace.helperText);
        break;
      case "letters":
        setPattern(rules.letters.pattern);
        setHelperText(rules.letters.helperText);
        break;
      case "letters-digits-some-special-char":
        setPattern(rules.lettersDigitsSomeSChars.pattern);
        setHelperText(rules.lettersDigitsSomeSChars.helperText);
        break;
      case "name":
        setPattern(rules.name.pattern);
        setHelperText(rules.name.helperText);
        break;
    }
  }, []);

  function handleOnChange(event) {
    if (statePattern && statePattern.test(event.target.value)) {
      setShowError(true);
    } else {
      setValue(event.target.value);
      setShowError(false);
    }
    if (onChange) onChange(event);
  }
  
  return (
    <TextField
      {...rest}
      value={value}
      error={props.error ? true : showError}
      onChange={handleOnChange}
      helperText={
        helperText ? helperText : showHelperText ? stateHelperText : ""
      }
      onFocus={(event) => {
        setShowHelperText(true);
        if (onFocus) onFocus(event);
      }}
      onBlur={(event) => {
        setShowError(false);
        setShowHelperText(false);
        handleOnChange(event);
        if (onBlur) onBlur(event);
      }}
    />
  );
}
