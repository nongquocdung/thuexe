import { AppTextField } from "../../../components";
import AppRadioButtonField from "../../../components/AppRadioButtonField";

export const mockData = [
  {
    primary: "Hãng xe: Toyota",
    secondary: [
      "Loại xe: Xe số tự động",
      "Biển Số: ABC 1234",
      "Ngày thuê: 10/4/2022",
    ],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
  {
    primary: "Hãng xe: Toyota",
    secondary: [
      "Loại xe: Xe số tự động",
      "Biển Số: ABC 1234",
      "Ngày thuê: 10/4/2022",
    ],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
  {
    primary: "Hãng xe: Toyota",
    secondary: [
      "Loại xe: Xe số tự động",
      "Biển Số: ABC 1234",
      "Ngày thuê: 10/4/2022",
    ],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
  {
    primary: "Hãng xe: Toyota",
    secondary: [
      "Loại xe: Xe số tự động",
      "Biển Số: ABC 1234",
      "Ngày thuê: 10/4/2022",
    ],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
  {
    primary: "Hãng xe: Toyota",
    secondary: [
      "Loại xe: Xe số tự động",
      "Biển Số: ABC 1234",
      "Ngày thuê: 10/4/2022",
    ],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
  {
    primary: "Hãng xe: Toyota",
    secondary: [
      "Loại xe: Xe số tự động",
      "Biển Số: ABC 1234",
      "Ngày thuê: 10/4/2022",
    ],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
];

export const CarInfo_Form = [
  {
    id: "dong_xe",
    label: "Dòng xe",
    xs: 8,
    component: AppTextField,
  },
  {
    id: "hang_xe",
    label: "Hãng xe",
    xs: 4,
    component: AppTextField,
  },
  {
    id: "loai_xe",
    label: "Loại xe",
    xs: 4,
    component: AppTextField,
  },
  {
    id: "so_cho",
    label: "Số chỗ",
    xs: 4,
    component: AppTextField,
  },
  {
    id: "mo_ta",
    label: "Mô tả chi tiết",
    xs: 12,
    component: AppTextField,
    multiline: true,
    rows: 3,
  },
];

export const ThongTinThem_Form = [
  {
    id: "tinh_trang",
    label: "Tình trạng xe",
    xs: 12,
    component: AppRadioButtonField,
    row: true,
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
    label: "Yêu cầu bảo hiểm",
    xs: 12,
    component: AppRadioButtonField,
    row: true,
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
    label: "Thiết bị đi kèm",
    xs: 12,
    component: AppRadioButtonField,
    row: true,
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

export const CauHinhGia_Form = [
  {
    id: "thue_theo_thang",
    label: "Thuê theo tháng",
    xs: 12,
    component: AppTextField,
  },
  {
    id: "thue_theo_ngay",
    label: "Thuê theo ngày",
    xs: 12,
    component: AppTextField,
  },
  {
    id: "thue_theo_gio",
    label: "Thuê theo giờ",
    xs: 12,
    component: AppTextField,
  },
];
