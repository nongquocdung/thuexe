import { AppTextField } from "../../../components";

export const ThongTinThem_Form = [
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

export const mockData_DanhSachXe = [
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
export const mockData_DanhSachTaiXe = [
  {
    primary: "Nguyễn Văn A",
    secondary: ["Giấy phếp lái xe: abc123456", "Trạng thái: Đang làm việc"],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
  {
    primary: "Nguyễn Văn A",
    secondary: ["Giấy phếp lái xe: abc123456", "Trạng thái: Đang làm việc"],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
  {
    primary: "Nguyễn Văn A",
    secondary: ["Giấy phếp lái xe: abc123456", "Trạng thái: Đang làm việc"],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
  {
    primary: "Nguyễn Văn A",
    secondary: ["Giấy phếp lái xe: abc123456", "Trạng thái: Đang làm việc"],
    btnData: { label: "Chi Tiết", onClick: () => {} },
  },
];

export const Payment_table = [
  {
    id: "time",
    label: "Thời Điểm",
    align: "left", // center left right
    // format: (val, row) => {
    //   return ...
    // },
  },
  {
    id: "money",
    label: "Số tiền thanh toán",
    align: "right",
  },
];
