import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material"
import { useRecoilState, useRecoilValue } from "recoil";
import { dialogOpenStateAtom, responseAtom } from "../../recoil/states";
import { isPostError } from "../../services/postMessage";

export default function SuccessDialog() {
  const [dialogOpenState, setDialogOpenState] = useRecoilState(dialogOpenStateAtom);
  const response = useRecoilValue(responseAtom);

  const closeDialog = () => setDialogOpenState('none');

  return (
    <Dialog
      open={dialogOpenState === 'success'}
      onClose={closeDialog}
      PaperProps = {{
        sx: {
          width: "550px",
          height: "240px",
          margin: "auto",
          background: "#EBECEF 0% 0% no-repeat padding-box",
          borderRadius: 0,
          paddingTop: 0,
        }
      }}
      >
        <DialogTitle id="alert-dialog-title"
        sx={{
          display: "flex",
          alignItems: "center",
          height: 0,
          font: "normal normal bold 16px/17px Noto Sans KR",
          color: "#ACAFB8",
          background: "transparent linear-gradient(180deg, #E2E2E0 0%, #D9D9E0 100%) 0% 0% no-repeat padding-box",
          borderBottom: "1px solid #A8AAB4",
        }}>
          메시지 발송 완료
        </DialogTitle>
        <DialogContent>
          <Box id="alert-dialog-description"
          sx = {{
            textAlign: "center",
            paddingTop: "25px",
          }}>
            <DialogContentText sx = {{
              font: "normal normal bold 16px/17px Noto Sans KR" ,
              marginTop: "16px",
              marginBottom: "16px",
            }}>
            메시지가 정상 발송되었습니다.
            </DialogContentText>
            {response && !isPostError(response) && (
              <span>
                <DialogContentText sx = {{
                  font: "normal normal normal 16px/17px Noto Sans KR" ,
                  marginTop: "16px",
                  marginBottom: "8px",
                }}>
                요청 코드: {response?.requestCode}
                </DialogContentText>
                <DialogContentText sx = {{
                  font: "normal normal normal 16px/17px Noto Sans KR" ,
                }}>
                  응답 코드: {response?.responseCode}
                </DialogContentText>
              </span>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{
          justifyContent: "center",
          paddingBottom: "16px",
        }}>
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
