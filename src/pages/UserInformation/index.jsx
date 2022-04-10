import { Box, Button, Container, TextField } from "@mui/material";
import { margin, style } from "@mui/system";
import React from "react";
import AvatarBackground from "../../assets/imgs/none-avatar.png";
import { Typography, Grid } from "@mui/material";

const styles = {
  space: {
    margin: "20px 0px",
  },
};

const info = {
  name: "Nguyễn Văn A",
  phoneNum: "0123456789",
  email: "nva@gmail.com",
  address: "123 Cộng Hòa, phường 4, quận Tân Bình, TP Hồ Chí Minh",
  level: "Vàng",
};

export const UserInformationPage = () => {
  return (
    <div style={{ margin: "50px 50px 50px 50px" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 200,
              height: 200,
              backgroundImage: `url(${AvatarBackground})`,
              backgroundColor: "#EEEEEE",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{ display: "flex", flexDirection: "column", marginLeft: 30 }}
          >
            <span style={{ fontSize: 25, fontWeight: 700 }}>{info.name}</span>
            <span>Thành viên {info.level}</span>
          </div>
        </div>
        <Button
          variant="contained"
          component="span"
          style={{ width: 200, marginTop: 20 }}
        >
          Thay ảnh đại diện
        </Button>
      </Container>
      <Container style={{ marginTop: 50 }}>
        <Box
          style={{
            backgroundColor: "#1976d2",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            textAlign: "center",
            padding: 5,
          }}
        >
          <span style={{ color: "white", fontSize: 20 }}>Thông tin cơ bản</span>
        </Box>
        <Box
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "grey",
            padding: 20,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <div>
            <TextField
              style={styles.space}
              id="outlined-basic"
              label="Họ và tên"
              variant="outlined"
              value={info.name}
              size="small"
            />
            <br />
            <TextField
              style={styles.space}
              id="outlined-basic"
              label="Số điện thoại"
              variant="outlined"
              value={info.phoneNum}
              size="small"
            />
            <br />
            <TextField
              style={styles.space}
              id="outlined-basic"
              label="Địa chỉ email"
              variant="outlined"
              value={info.email}
              size="small"
            />
            <br />
            <TextField
              style={styles.space}
              id="outlined-basic"
              label="Địa chỉ thường trú"
              variant="outlined"
              value={info.address}
              size="small"
              fullWidth="true"
            />
            <Typography align="center">
              <Button variant="contained">Lưu thay đổi</Button>
            </Typography>
          </div>
        </Box>
      </Container>
      <Container style={{ marginTop: 50 }}>
        <Box
          style={{
            backgroundColor: "#1976d2",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            textAlign: "center",
            padding: 5,
          }}
        >
          <span style={{ color: "white", fontSize: 20 }}>Bằng lái</span>
        </Box>
        <Box
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "grey",
            padding: 20,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Box
                sx={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderStyle: "solid",
                  height: 300,
                  backgroundImage: `url(${AvatarBackground})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderStyle: "solid",
                  height: 300,
                  backgroundImage: `url(${AvatarBackground})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ margin: "20px 0px 0px 0px" }}>
            <Typography align="center">
              <Button variant="contained">Lưu thay đổi</Button>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container style={{ marginTop: 50 }}>
        <Box
          style={{
            backgroundColor: "#1976d2",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            textAlign: "center",
            padding: 5,
          }}
        >
          <span style={{ color: "white", fontSize: 20 }}>Giấy tờ tùy thân</span>
        </Box>
        <Box
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "grey",
            padding: 20,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Box
                sx={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderStyle: "solid",
                  height: 300,
                  backgroundImage: `url(${AvatarBackground})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderStyle: "solid",
                  height: 300,
                  backgroundImage: `url(${AvatarBackground})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ margin: "20px 0px 0px 0px" }}>
            <Typography align="center">
              <Button variant="contained">Lưu thay đổi</Button>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
