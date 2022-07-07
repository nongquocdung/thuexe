import { AppTextField } from "../../../components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AppRadioButtonField from "../../../components/AppRadioButtonField";
export const Date_Form = [
  {
    id: "date_start",
    label: "Start date",
    xs: 6,
    component: AppTextField,
    readOnly: true,
    adornment: {
      icon: CalendarMonthIcon,
    },
  },
  {
    id: "end_start",
    label: "End date",
    xs: 6,
    component: AppTextField,
    readOnly: true,
    adornment: {
      icon: CalendarMonthIcon,
    },
  },
];

export const CarInfo_Form = [
  {
    id: "dong_xe",
    label: "Dòng xe",
    xs: 8,
    component: AppTextField,
    readOnly: true,
  },
  {
    id: "hang_xe",
    label: "Hãng xe",
    xs: 4,
    component: AppTextField,
    readOnly: true,
  },
  {
    id: "loai_xe",
    label: "Loại xe",
    xs: 4,
    component: AppTextField,
    readOnly: true,
  },
  {
    id: "so_cho",
    label: "Số chỗ",
    xs: 4,
    component: AppTextField,
    readOnly: true,
  },
  {
    id: "tinh_trang",
    label: "Tình trạng",
    xs: 4,
    component: AppTextField,
    readOnly: true,
  },
  {
    id: "mo_ta",
    label: "Mô tả chi tiết",
    xs: 12,
    component: AppTextField,
    readOnly: true,
    multiline: true,
    rows: 3,
  },
];

export const ThietBi_Form = [
  {
    id: "thiet_bi",
    xs: 8,
    component: AppRadioButtonField,
    readOnly: true,
    radio: [
      {
        value: "camera",
        label: "Camera",
      },
      {
        value: "manhinh",
        label: "Màn hình",
      },
      {
        value: "gps",
        label: "GPS",
      },
    ],
  },
];
