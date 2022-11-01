import { styled, TextField} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { contentSelector, overLength, tabKeyAtom } from "../../recoil/states";

const MsgInput = styled(TextField)({
  width: "calc(100% - 24px)",
  flexGrow: 1,
  minHeight: "260px",

  flexDirection: "column",
  
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 6px #00000036",
  marginBottom: "8px",
  opacity: 1,

  paddingLeft: "12px",
  paddingRight: "12px",
  paddingTop: "8px",

  color: "black",
  resize: "none",

  outline: 0,
  borderStyle: "none",

  '&::placeholder': {
    opacity: 0.5,
  },

  cursor: "auto",

});

export default function MessageInput() {
  const tabKey = useRecoilValue(tabKeyAtom);
  const [content, setContent] = useRecoilState(contentSelector(tabKey));
  const overlength = useRecoilValue(overLength(tabKey));
  return (
    <MsgInput placeholder="예약안내, 병원 위치 전송, 광고 진행 등 다양한 상황에 고객들에게 문자를 전송해보세요!"
      onChange={(event) => setContent(event.target.value)}
      sx = {{
        '&.Mui-focused': {
          ...(!overlength && {
            boxShadow: '0px 0px 6px #99CCFF',
          }),
          ...(overlength && {
            boxShadow: '0px 0px 6px #ED3131',
            opacity: 0.5,
          }),
          border: 0,
          outline: 0,
        },
        font: "normal normal normal 12px/17px Noto Sans KR",
      }}
      multiline
      variant="standard"
      InputProps = {{
        disableUnderline: true,
        style: {
          font: "normal normal normal 12px/17px Noto Sans KR",
        },
        sx:{
          height:'100%',
          
        }
      }}
      /* eslint-disable-next-line react/jsx-no-duplicate-props */
      inputProps={{
        style: {height:'100%', overflow:'auto',},
        sx: {
          '&::-webkit-scrollbar': {
            width: '12px',
            backgroundColor: "white",
            opacity: 0,
          },
        
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#B3B3B3',
            borderRadius: "3px",
            outline: '2px',
          },
          
          '&::-webkit-scrollbar-button': {
            height: 0,
            width: 0,
          },
        }
      }}
      value = {content}/>
  );
}
