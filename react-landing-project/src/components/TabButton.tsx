import { styled, Tab} from "@mui/material";
import { useRecoilState } from "recoil";
import { TabRecoilKey } from "../recoil/key";
import { tabKeyAtom} from "../recoil/states";

const Tabt = styled(Tab)({
  width: "60px",
  height: "16px",

  borderRadius: "3px",
  opacity: 1,

  textAlign: "left",

  fontSize: "12px",
  color: "#99CCFF",
  font: "normal normal bold 12px/17px Noto Sans KR",
  letterSpacing: "0px",

  
  background: "#F1F8FF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 3px #99CCFF80",

  '&:hover':{
    boxShadow: '0px 0px 16px #99CCFF80, 0px 0px 16px #99CCFF80',
  },
});

interface TabButtonProps {
  idx: TabRecoilKey;
}

export default function TabButton({idx} : TabButtonProps) {
  // TODO
  const [tabKey, setTabKey] = useRecoilState(tabKeyAtom);
  const label = '탭 '.concat(idx.toString());

  return (
      <Tabt label = {label}
      onClick={() => setTabKey(idx)}
      sx = {{
        ...(idx === tabKey && {
          backgroundColor: '#99CCFF',
          color: 'white',
        }),
      }}/>
  );
}