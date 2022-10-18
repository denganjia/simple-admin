import {
	InputProps,
	SelectProps,
	InputNumberProps,
	DatePickerProps,
	TimePickerProps,
	TreeSelectProps,
	DataTableColumn,
} from "naive-ui";
export type Columns = {
	search?: boolean;
	initValue?: any;
	hideInTable?: boolean;
	title?: string;
	span?: number;
} & Filed;

export type Filed =
	| {
			filedType?: "Input";
			fieldProps?: Omit<InputProps, "value" | "default-value">;
	  }
	| {
			filedType?: "Select";
			fieldProps?: Omit<SelectProps, "value" | "default-value">;
	  }
	| {
			filedType?: "DatePicker";
			fieldProps?: Omit<DatePickerProps, "value" | "default-value">;
	  }
	| {
			filedType?: "InputNumber";
			fieldProps?: Omit<InputNumberProps, "value" | "default-value">;
	  }
	| {
			filedType?: "TimePicker";
			fieldProps?: Omit<TimePickerProps, "value" | "default-value">;
	  }
	| {
			filedType?: "TreeSelect";
			fieldProps?: Omit<TreeSelectProps, "value" | "default-value">;
	  };

export type ProTableColumns<T = any> = Array<DataTableColumn<T> & Columns>;
