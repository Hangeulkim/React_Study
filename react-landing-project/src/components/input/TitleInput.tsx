import { styled, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { tabKeyAtom, titleSelector } from "../../recoil/states";

const Title = styled(TextField)({
  width: "100%",
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 6px #00000036",
  opacity: 1,

  marginRight: "12px",

  verticalAlign: "middle",

  textAlign: "left",
  color: "black",
  resize: "none",

  border: 0,

  '&.Mui-focused': {
    boxShadow: '0px 0px 6px #99CCFF',
  },

  '&::placeholder': {
    opacity: 0.5,
  },

  marginBottom: 8,
});

export default function TitleInput() {
  const tabKey = useRecoilValue(tabKeyAtom);
  const [title, setTitle] = useRecoilState(titleSelector(tabKey));
  return (
    <Title placeholder="제목을 입력해주세요" 
      onChange={(event) => setTitle(event.target.value)}
      variant= "standard"
      InputProps= {{
        disableUnderline: true,
        style: {
          font: "normal normal normal 12px/17px Noto Sans KR"
        },
        sx: {
          '&.Mui-focused': {
            boxShadow: '0px 0px 12px #99CCFF',
        },
        padding: "4px 0 4px 12px",
      }
      }}
      value={title}/>
  );
}
