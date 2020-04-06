import * as React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from './TextField';
import Chip from "@material-ui/core/Chip";

const MultiSelectDropDown = (props) => {
  const {
    onChange, name, value, label, options, disabled, className, freeSolo
  } = props;

  const [dropDownValue, changeDropDownValue] = React.useState(value);

  const handelChange = (event, selectedOptions) => {
    changeDropDownValue(selectedOptions);
    const e = {
      target: {
        name,
        value: selectedOptions || [],
      },
    };
    onChange(e);
  };

  return (
    <Autocomplete
      multiple
      options={options || []}
      disabled={disabled}
      value={dropDownValue}
      onChange={handelChange}
      className={`field multi-select-drop-down${className}` || ''}
      freeSolo={freeSolo}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={label}
          className="multi-select-drop-down-text-field"
        />
      )}
    />
  );
};

export default MultiSelectDropDown;
