import { AppDatePicker, AppSelect, AppTextField } from "../../../components";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import DeleteIcon from "@mui/icons-material/Delete";
import AppRadioButtonField from "../../../components/AppRadioButtonField";

export const TotalInfo_Form = [
  {
    id: "date_start",
    label: "Địa điểm nhận xe",
    xs: 12,
    component: AppTextField,
    adornment: {
      icon: EditLocationIcon,
    },
  },
  {
    id: "date_start",
    label: "Start date",
    xs: 6,
    component: AppDatePicker,
  },
  {
    id: "end_start",
    label: "End date",
    xs: 6,
    component: AppDatePicker,
  },
];

export const AddCar_Form = [
  {
    id: "hang_xe",
    xs: 6,
    component: AppSelect,
    props: {
      label: "Hãng xe",
    },
  },
  {
    id: "mau_xe",
    xs: 6,
    component: AppSelect,
    props: {
      label: "Mẫu xe",
    },
  },
  {
    id: "loai_xe",
    xs: 4,
    component: AppSelect,
    props: {
      label: "Loại xe",
      // items: [
      //   { itm: "A", label: "Nguyên Văn A" },
      //   { itm: "B", label: "Nguyên Văn B" },
      //   { itm: "C", label: "Nguyên Văn C" },
      //   { itm: "D", label: "Nguyên Văn D" },
      //   { itm: "E", label: "Nguyên Văn E" },
      // ],
    },
  },
  {
    id: "truyen_dong",
    xs: 4,
    component: AppSelect,
    props: {
      label: "Truyền động",
    },
  },
  {
    id: "so_luong",
    xs: 4,
    component: AppTextField,
    type: "number",
    title: "Số lượng xe",
  },
];

export const AddCar_table = [
  {
    id: "loai_xe",
    label: "Loại xe",
    align: "left",
  },
  {
    id: "hang_xe",
    label: "Hãng xe",
    align: "left",
  },
  {
    id: "mau_xe",
    label: "Mẫu xe",
    align: "left",
  },
  {
    id: "truyen_dong",
    label: "Truyền động",
    align: "left",
  },
  {
    id: "so_luong",
    label: "Số lượng",
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
    ],
  },
];

export const MoreInfo_Form = [
  {
    id: "tinh_trang",
    xs: 12,
    component: AppRadioButtonField,
    row: true,
    label: "Tình trạng xe",
    radio: [
      {
        value: "moi",
        label: "Mới",
      },
      {
        value: "cu",
        label: "Cũ",
      },
    ],
  },
  {
    id: "bao_hiem",
    xs: 12,
    component: AppRadioButtonField,
    row: true,
    label: "Yêu cầu bảo hiểm",
    radio: [
      {
        value: "co",
        label: "Có",
      },
      {
        value: "khong",
        label: "Không",
      },
    ],
  },
  {
    id: "thiet_bi",
    xs: 12,
    component: AppRadioButtonField,
    row: true,
    label: "Thiết bị đi kèm",
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

export const Note_Form = [
  {
    id: "ghi_chu",
    label: "",
    xs: 12,
    component: AppTextField,
    multiline: true,
    rows: 3,
  },
];
