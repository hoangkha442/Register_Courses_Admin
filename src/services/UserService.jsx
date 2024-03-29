import { https } from "./Config";
export const UserService = {
  postLogin: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  postRegister: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  postUserInfor: (data) => {
    return https.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", data);
  },
  putUserInfor: (data) => {
    return https.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  },
  getUserListPagination: (group, taikhoan ='',currentPage, sizePage) => {
    if(taikhoan !==''){
      return https.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${group}&tuKhoa=${taikhoan}&page=${currentPage}&pageSize=${sizePage}`
      )
    }else{
      return https.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${group}&page=${currentPage}&pageSize=${sizePage}`
      )
    }
  },
  deleteUser: (userName) => { 
    return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`)
  },
  postAddUser: (data) => { 
    return https.post(`/api/QuanLyNguoiDung/ThemNguoiDung` , data)
   }
}

