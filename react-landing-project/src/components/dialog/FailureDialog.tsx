import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import { useRecoilValue } from "recoil";
import useMessageBuilder from "../../recoil/hook";
import { dialogOpenStateAtom, responseAtom } from "../../recoil/states";

export default function FailureDialog() {
  const dialogOpenState = useRecoilValue(dialogOpenStateAtom);
  const response = useRecoilValue(responseAtom);

  const {sendMessage, closeDialog} = useMessageBuilder();

  return (
    <Dialog
      open={dialogOpenState === 'failure'}
      onClose={closeDialog}
      PaperProps = {{
        sx: {
          width: "550px",
          height: "240px",
          background: "#EBECEF 0% 0% no-repeat padding-box",
        }
      }}
      >
      <DialogTitle 
        id="alert-dialog-title"
        sx={{
          display: "flex",
          alignItems: "center",
          height: 0,
          font: "normal normal bold 16px/17px Noto Sans KR",
          color: "#ACAFB8",
          background: "transparent linear-gradient(180deg, #E2E2E0 0%, #D9D9E0 100%) 0% 0% no-repeat padding-box",
          borderBottom: "1px solid #A8AAB4",
        }}>
        메시지 발송 실패
      </DialogTitle>
      <DialogContent>
        <Box id="alert-dialog-description"
        sx= {{
          textAlign: "center",
          paddingTop: "25px",
        }}>
            <DialogContentText 
            sx = {{
              font: "normal normal bold 16px/17px Noto Sans KR" ,
              marginTop: "16px",
              marginBottom: "16px",
            }}>
              메시지 발송에 실패했습니다.
            </DialogContentText>
            <DialogContentText 
            sx={{
              font: "normal normal normal 16px/17px Noto Sans KR",
              color: "#201F35",
              marginBottom: "6px",
            }}>
              요청 코드: {response?.requestCode}
            </DialogContentText>
            <DialogContentText 
            sx={{
              font: "normal normal normal 16px/17px Noto Sans KR",
              color: "#ED3131",
            }}>
              오류 메시지: 알 수 없는 오류가 발생했습니다.
            </DialogContentText>
        </Box>
      </DialogContent>
      <DialogActions sx={{
        justifyContent: "center",
        paddingBottom: "16px",
      }}>
        <Button onClick={() => {
          closeDialog();
          sendMessage();
        }}
        sx = {{
          height: "40px",
          width: "72px",
          background: "#007FFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 0px 3px #00000036",
          borderRadius: "3px",
          color: "white",
          textAlign: "center",
          font: "normal normal bold 12px/17px Noto Sans KR",
          marginRight: "12px",
          '&:hover':{
            background: "#007FFF 0% 0% no-repeat padding-box",
            filter: "brightness(70%)",
          },
        }}>재시도</Button>
        <Button onClick={closeDialog}
        sx = {{
          height: "40px",
          width: "72px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 0px 3px #00000036",
          borderRadius: "3px",
          color: "#201F35",
          textAlign: "center",
          font: "normal normal bold 12px/17px Noto Sans KR",
        }}>확인</Button>
      </DialogActions>
    </Dialog>
  );
}
