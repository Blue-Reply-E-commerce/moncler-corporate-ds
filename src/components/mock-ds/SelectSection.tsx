;

import { SelectComponent } from "@/components/ui/atoms/select";
import { useState } from "react";

export default function SelectExample() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("option1");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("option2");

  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("option1");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("option2");

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-medium mb-4">Select Components - Standard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SelectComponent
            label="Label"
            placeholder="Select option"
            helperText="Helper text"
            options={options}
            value={value1}
            onChange={setValue1}
          />

          <SelectComponent
            label="Label"
            placeholder="Dropdown option"
            helperText="Helper text"
            options={options}
            value={value2}
            onChange={setValue2}
          />

          <SelectComponent
            label="Label"
            placeholder="Dropdown option"
            helperText="Helper text"
            options={options}
            value={value3}
            onChange={setValue3}
          />

          <SelectComponent
            label="Label"
            placeholder="Dropdown option"
            helperText="Helper text"
            options={options}
            value={value4}
            onChange={setValue4}
            error={true}
          />

          <SelectComponent
            label="Label"
            placeholder="Dropdown option"
            helperText="Helper text"
            options={options}
            value={value5}
            onChange={setValue5}
          />

          <SelectComponent
            label="Label"
            placeholder="Dropdown option"
            helperText="Helper text"
            options={options}
            value={value6}
            onChange={setValue6}
            disabled
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-4">Select Components - With Value</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SelectComponent
            label="Label"
            placeholder="Select option"
            helperText="Helper text"
            options={options}
            value={value6}
            onChange={setValue6}
            showValue={true}
          />

          <SelectComponent
            label="Label"
            placeholder="Dropdown option"
            helperText="Helper text"
            options={options}
            value={value7}
            onChange={setValue7}
            showValue={true}
          />

          <SelectComponent
            label="Label"
            placeholder="Dropdown option"
            helperText="Helper text"
            options={options}
            value={value8}
            onChange={setValue8}
            showValue={true}
          />

          <SelectComponent
            label="Label"
            placeholder="Dropdown option"
            helperText="Helper text"
            options={options}
            value={value9}
            onChange={setValue9}
            error={true}
            showValue={true}
          />

          <SelectComponent
            label="Label"
            placeholder="Dropdown option"
            helperText="Helper text"
            options={options}
            value={value10}
            onChange={setValue10}
            showValue={true}
          />
        </div>
      </div>
    </div>
  );
}
