import { AppSelect, AppTextField } from "../../../components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AppRadioButtonField from "../../../components/AppRadioButtonField";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';

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
    row: false,
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


export const BaoDuong_table = [
  {
    id: "loai",
    label: "Loại",
    align: "left",
  },
  {
    id: "ngay",
    label: "Ngày kiểm tra",
    align: "left",
  },
  {
    id: "trang_thai",
    label: "Trạng thái",
    align: "left",
  },
  {
    id: "chi_phi",
    label: "Chi phí",
    align: "left",
  },
  {
    id: "action",
    label: "",
    align: "center",
    category: "MENU",
    width: 20,
    items: [
      { id: "delete", label: "Delete", icon: DeleteIcon, color: "secondary" },
      { id: "update", label: "Update", icon: AutoAwesomeMosaicIcon, color: "primary" },
    ],
  },
];


export const BaoDuong_Form = [
  {
    id: "loai",
    label: "Loại",
    xs: 12,
    component: AppSelect,
    readOnly: true,
  },
  {
    id: "chi_phi",
    label: "Chi Phí",
    xs: 12,
    component: AppTextField,
    readOnly: true,
  },
];