import SettingsIcon from "@mui/icons-material/Settings";
import LichSu from "../views/Chung/LichSu";
import LienHe from "../views/Chung/LienHe";
import ThongTinCaNhan from "../views/Chung/ThongTinCaNhan";
import XeDangThue from "../views/KhachHang/XeDangThue";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import HelpIcon from "@mui/icons-material/Help";
import ThongBao from "../views/Chung/ThongBao";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ChiTietXe from "../views/Chung/ChiTietXe";
import ChiTietGiaoDich from "../views/Chung/ChiTietGiaoDich";
import ChiTietTaiXe from "../views/Chung/ChiTietTaiXe";
import ThanhToan from "../views/KhachHang/ThanhToan";
import DanhSachYeuCau from "../views/ChuXe/DanhSachYeuCau";
import DanhSachXe from "../views/ChuXe/DanhSachXe";
import DanhSachXe_TrangChu from "../views/Chung/DanhSachXe";
import DanhSachTaiXe from "../views/ChuXe/DanhSachTaiXe";
import ViewListIcon from "@mui/icons-material/ViewList";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExploreIcon from "@mui/icons-material/Explore";
import ChiTietYeuCau from "../views/ChuXe/ChiTietYeuCau";
import HomeIcon from "@mui/icons-material/Home";
import TrangChu from "../views/Chung/TrangChu";
// import CarRentalIcon from "@mui/icons-material/CarRental";
import TaoDonXe from "../views/Chung/TaoDonXe";
import HoTro from "../views/Chung/HoTro";

export const MapPathRoute2Name = {
  demo: "demo",
};

export const RouteIds = {
  XeDangThue: "xe-dang-thue",
  ThongTinCaNhan: "thong-tin-ca-nhan",
  LichSu: "lich-su",
  LienHe: "lien-he",
  ThongBao: "thong-bao",
  ChiTietXe: "danh-sach-xe",
  ChiTietGiaoDich: "chi-tiet-giao-dich",
  ChiTietTaiXe: "danh-sach-tai-xe",
  ThanhToan: "thanh-toan",
  DanhSachYeuCau: "danh-sach-yeu-cau",
  ChiTietYeuCau: "danh-sach-yeu-cau",
  DanhSachXe: "danh-sach-xe",
  DanhSachTaiXe: "danh-sach-tai-xe",

  TrangChu: "trang-chu",
  TaoDonXe: "tao-don-xe",
  DanhSachXeTrangChu: "danh-sach-xe",
  HoTro: "ho-tro",
};
export const DCERouteIds = {
  Detail: ":id",
  New: "new",
  Edit: "edit",
};
export const RoutePaths = {
  XeDangThue: ["", RouteIds.XeDangThue].join("/"),
  ThongTinCaNhan: ["", RouteIds.ThongTinCaNhan].join("/"),
  LichSu: ["", RouteIds.LichSu].join("/"),
  LienHe: ["", RouteIds.LienHe].join("/"),
  ThongBao: ["", RouteIds.ThongBao].join("/"),
  ChiTietXe: ["", RouteIds.ChiTietXe, DCERouteIds.Detail].join("/"),
  ChiTietGiaoDich: ["", RouteIds.ChiTietGiaoDich, DCERouteIds.Detail].join("/"),
  ChiTietTaiXe: ["", RouteIds.ChiTietTaiXe, DCERouteIds.Detail].join("/"),
  ThanhToan: ["", RouteIds.ThanhToan, DCERouteIds.Detail].join("/"),

  DanhSachYeuCau: ["", RouteIds.DanhSachYeuCau].join("/"),
  DanhSachXe: ["", RouteIds.DanhSachXe].join("/"),
  DanhSachTaiXe: ["", RouteIds.DanhSachTaiXe].join("/"),
  ChiTietYeuCau: ["", RouteIds.ChiTietYeuCau, DCERouteIds.Detail].join("/"),

  TrangChu: ["", RouteIds.TrangChu].join("/"),
  TaoDonXe: ["", RouteIds.TaoDonXe].join("/"),
  DanhSachXeTrangChu: ["", RouteIds.DanhSachXeTrangChu].join("/"),
  HoTro: ["", RouteIds.HoTro].join("/"),
};

export const ProtectedRoutes_KhachHang = {
  XeDangThue: {
    exact: true,
    id: RouteIds.XeDangThue,
    label: "Xe Đang Thuê",
    path: RoutePaths.XeDangThue,
    component: XeDangThue,
    icon: DirectionsCarIcon,
  },
  ThongTinCaNhan: {
    exact: true,
    id: RouteIds.ThongTinCaNhan,
    label: "Thông Tin Cá Nhân",
    path: RoutePaths.ThongTinCaNhan,
    component: ThongTinCaNhan,
    icon: PersonIcon,
  },
  LichSu: {
    exact: true,
    id: RouteIds.LichSu,
    label: "Lịch Sử Giao Dịch",
    path: RoutePaths.LichSu,
    component: LichSu,
    icon: HistoryIcon,
  },
  LienHe: {
    exact: true,
    id: RouteIds.LienHe,
    label: "Liên Hệ Hỗ Trợ",
    path: RoutePaths.LienHe,
    component: LienHe,
    icon: HelpIcon,
  },
  ThongBao: {
    exact: true,
    id: RouteIds.ThongBao,
    label: "Thông Báo",
    path: RoutePaths.ThongBao,
    component: ThongBao,
    icon: CircleNotificationsIcon,
  },
  ChiTietXe: {
    exact: true,
    id: RouteIds.ChiTietXe,
    path: RoutePaths.ChiTietXe,
    component: ChiTietXe,
  },
  ChiTietGiaoDich: {
    exact: true,
    id: RouteIds.ChiTietGiaoDich,
    path: RoutePaths.ChiTietGiaoDich,
    component: ChiTietGiaoDich,
  },
  ChiTietTaiXe: {
    exact: true,
    id: RouteIds.ChiTietTaiXe,
    path: RoutePaths.ChiTietTaiXe,
    component: ChiTietTaiXe,
  },
  ThanhToan: {
    exact: true,
    id: RouteIds.ThanhToan,
    path: RoutePaths.ThanhToan,
    component: ThanhToan,
  },
};

export const ProtectedRoutes_ChuXe = {
  DanhSachYeuCau: {
    exact: true,
    id: RouteIds.DanhSachYeuCau,
    label: "Danh sách yêu cầu",
    path: RoutePaths.DanhSachYeuCau,
    component: DanhSachYeuCau,
    icon: ViewListIcon,
  },
  ThongTinCaNhan: {
    exact: true,
    id: RouteIds.ThongTinCaNhan,
    label: "Thông Tin Cá Nhân",
    path: RoutePaths.ThongTinCaNhan,
    component: ThongTinCaNhan,
    icon: PersonIcon,
  },
  DanhSachXe: {
    exact: true,
    id: RouteIds.DanhSachXe,
    label: "Danh sách xe",
    path: RoutePaths.DanhSachXe,
    component: DanhSachXe,
    icon: DirectionsCarIcon,
  },
  DanhSachTaiXe: {
    exact: true,
    id: RouteIds.DanhSachTaiXe,
    label: "Danh sách tài xế",
    path: RoutePaths.DanhSachTaiXe,
    component: DanhSachTaiXe,
    icon: ExploreIcon,
  },
  LichSu: {
    exact: true,
    id: RouteIds.LichSu,
    label: "Lịch Sử Giao Dịch",
    path: RoutePaths.LichSu,
    component: LichSu,
    icon: HistoryIcon,
  },
  LienHe: {
    exact: true,
    id: RouteIds.LienHe,
    label: "Liên Hệ Hỗ Trợ",
    path: RoutePaths.LienHe,
    component: LienHe,
    icon: HelpIcon,
  },
  ThongBao: {
    exact: true,
    id: RouteIds.ThongBao,
    label: "Thông Báo",
    path: RoutePaths.ThongBao,
    component: ThongBao,
    icon: CircleNotificationsIcon,
  },
  ChiTietXe: {
    exact: true,
    id: RouteIds.ChiTietXe,
    path: RoutePaths.ChiTietXe,
    component: ChiTietXe,
  },
  ChiTietGiaoDich: {
    exact: true,
    id: RouteIds.ChiTietGiaoDich,
    path: RoutePaths.ChiTietGiaoDich,
    component: ChiTietGiaoDich,
  },
  ChiTietTaiXe: {
    exact: true,
    id: RouteIds.ChiTietTaiXe,
    path: RoutePaths.ChiTietTaiXe,
    component: ChiTietTaiXe,
  },
  ChiTietYeuCau: {
    exact: true,
    id: RouteIds.ChiTietYeuCau,
    path: RoutePaths.ChiTietYeuCau,
    component: ChiTietYeuCau,
  },
};

export const ProtectedRoutes_TrangChu = {
  TrangChu: {
    exact: true,
    id: RouteIds.TrangChu,
    label: "Trang chủ",
    path: RoutePaths.TrangChu,
    component: TrangChu,
    icon: HomeIcon,
  },
  TaoDonXe: {
    exact: true,
    id: RouteIds.TaoDonXe,
    label: "Tạo đơn xe",
    path: RoutePaths.TaoDonXe,
    component: TaoDonXe,
    icon: ShoppingCartIcon,
  },
  TaoDonDanhSachXeTrangChuXe: {
    exact: true,
    id: RouteIds.DanhSachXeTrangChu,
    label: "Danh sach xe",
    path: RoutePaths.DanhSachXeTrangChu,
    component: DanhSachXe_TrangChu,
    icon: ViewListIcon,
  },
  HoTro: {
    exact: true,
    id: RouteIds.HoTro,
    label: "Hỗ trợ",
    path: RoutePaths.HoTro,
    component: HoTro,
    icon: HelpIcon,
  },
};
