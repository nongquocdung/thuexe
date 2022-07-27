import { AppTextField } from "../../../components";

export const mockData = [
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



export const Info_Form = [
  {
    id: "ho_ten",
    label: "Họ và tên",
    xs: 8,
    component: AppTextField,
  },
  {
    id: "ngay_sinh",
    label: "Ngày sinh",
    xs: 4,
    component: AppTextField,
  },
  {
    id: "dien_thoi",
    label: "Điện thoại",
    xs: 4,
    component: AppTextField,
  },
  {
    id: "cmnd",
    label: "Số CMND/CCCD",
    xs: 4,
    component: AppTextField,
  },
  {
    id: "email",
    label: "Email",
    xs: 4,
    component: AppTextField,
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