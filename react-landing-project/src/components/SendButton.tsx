import { Button, styled } from "@mui/material";
import { useRecoilValue } from "recoil";
import useMessageBuilder from "../recoil/hook";
import { sendButtonDisabled, tabKeyAtom } from "../recoil/states";

const Send = styled(Button)({
  width: "100%",
  minHeight: "57px",
  maxHeight: "57px",

  boxShadow: "0px 0px 3px #99CCFF80",
  borderRadius: "3px",
  opacity: 1,

  textAlign: "left",
  marginTop: "8px",
  marginRight: "16px",
  marginBottom: "32px",

  fontSize: "12px",
  font: "normal normal bold 12px/17px Noto Sans KR;",
  letterSpacing: "0px",

  "&.MuiButton-text": {
    color: "white",
  },

  '&:hover':{
    background: "#007FFF 0% 0% no-repeat padding-box",
    filter: "brightness(50%)",
  },
});

export default function SendButton() {
  const tabKey = useRecoilValue(tabKeyAtom);
  const disabled = useRecoilValue(sendButtonDisabled(tabKey));

  const {sendMessage} = useMessageBuilder();

  return (
    <Send 
      sx = {{
        ...(disabled && {
          background: "#B3B3B3 0% 0% no-repeat padding-box",
        }),
        ...(!disabled && {
          background: "#007FFF 0% 0% no-repeat padding-box",
        }),
      }}
      disabled = {disabled}
      onClick = {sendMessage}>
      메시지 발송
    </Send>
  )
}
