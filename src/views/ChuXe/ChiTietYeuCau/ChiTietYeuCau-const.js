import { AppSelect, AppTextField } from "../../../components";

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

export const GhiChu_Form = [
  {
    id: "ghi_chu",
    label: "Ghi chú",
    xs: 12,
    component: AppTextField,
    readOnly: true,
    multiline: true,
    rows: 3,
  },
];

export const ThemTaiXe_Form = [
  {
    id: "them_tai_xe",
    xs: 12,
    component: AppSelect,
    props: {
      label: "Chọn tài xế",
      items: [
        { itm: "A", label: "Nguyên Văn A" },
        { itm: "B", label: "Nguyên Văn B" },
        { itm: "C", label: "Nguyên Văn C" },
        { itm: "D", label: "Nguyên Văn D" },
        { itm: "E", label: "Nguyên Văn E" },
      ],
    },
  },
];
