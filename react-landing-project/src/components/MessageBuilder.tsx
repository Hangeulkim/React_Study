import { Grid, styled } from "@mui/material";
import { useRecoilValue } from "recoil";
import { contentSelector, overLength, tabKeyAtom } from "../recoil/states";
import MessageInput from "./input/MessageInput";
import PhoneNumberInput from "./input/PhoneNumberInput";
import TitleInput from "./input/TitleInput";

const DataGrid = styled(Grid)({
  width: "60%", 
  marginTop: "16px", 
  float: "left", 
  minWidth: "450px",

  marginBottom: "32px",
  flexDirection: "column", 
  display: "flex",

});

const NumChar = styled('div')({
  color: "#201F35",
  font: "normal normal normal 12px/17px Noto Sans KR",
  opacity: 1,
});

export default function MessageBuilder() {
  const tabKey = useRecoilValue(tabKeyAtom);
  const content = useRecoilValue(contentSelector(tabKey));
  const overlength = useRecoilValue(overLength(tabKey));

  return (
    <DataGrid>
      <PhoneNumberInput/>
      <TitleInput />
      <MessageInput />
      <NumChar sx={{
        ...(overlength && {
          color: "#ED3131",
        })
      }}>{content.length} / 100자</NumChar>
    </DataGrid>
    
  )
}
