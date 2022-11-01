import { styled, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { phoneNumberSelector, tabKeyAtom } from "../../recoil/states";

const Phone = styled(TextField)({
  width: "calc(100% - 12px)",
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 6px #00000036",
  opacity: 1,

  padding: "4px 0 4px 12px",
  marginRight: "12px",

  verticalAlign: "middle",

  textAlign: "left",
  color: "black",
  resize: "none",

  border: 0,

  '&:focus': {
    boxShadow: '0px 0px 6px #99CCFF',
    border: 0,
    outline: 0,
  },

  '&::placeholder': {
    opacity: 0.5,
  },

  marginBottom: 8,
});


function convertPhoneNumber(str: string): string {
  const str2 = str.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(-{1,2})$/g, "");

  return str2;
}

export default function PhoneNumberInput() {
  const tabKey = useRecoilValue(tabKeyAtom);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberSelector(tabKey));
  return (
    <Phone placeholder="휴대전화 번호를 입력해주세요"
      onChange={(event) => setPhoneNumber(convertPhoneNumber(event.target.value))}
      variant= "standard"
      inputProps={{
        maxLength: 13,
      }}
      /* eslint-disable-next-line */
      InputProps= {{
        disableUnderline: true,
        style: {
          font: "normal normal normal 12px/17px Noto Sans KR"
        }
      }}
      value = {phoneNumber}/>
  );
}
