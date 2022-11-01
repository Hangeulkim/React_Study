import { styled } from "@mui/material";
import { useRecoilValue } from "recoil";
import { contentSelector, tabKeyAtom, titleSelector } from "../recoil/states";

const PreCont = styled('div')({
  height: "calc(100% - 180px)",

  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 6px #00000035",

  paddingTop: "48px",
  paddingLeft: "48px",
  paddingRight: "48px",
  paddingBottom: "32px",

  opacity: 1,
});

const ShadowBack = styled('div')({
  height: "100%" ,
  paddingTop: "32px",
  paddingLeft: "32px",
  paddingRight: "32px",

  background: "#F7F8FA 0% 0% no-repeat padding-box",
  borderRadius: "16px 16px 0 0",

  opacity: 1,
})

const ShadowCont = styled('div')({
  height: "calc(100% - 16px)",

  paddingTop: "16px",
  paddingLeft: "32px",
  paddingRight: "16px",

  background: "#DFEFFF 0% 0% no-repeat padding-box",
  borderRadius: "16px 16px 0px 0px",

  opacity: 1,
});

const ScrollBox = styled('div')({
  height: "calc(100% - 8px)",

  overflowY: "auto",
  overflowX: "hidden",
  paddingRight: "16px",
  marginTop: "8px",

  '&::-webkit-scrollbar': {
    width: '8px',
    opacity: 0,
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#B3B3B3',
    outline: '2px',
  },

  '&::-webkit-scrollbar-button': {
    height: 0,
    width: 0,
  },
});

const ShowCont = styled('div')({
  height: "auto",

  minWidth: "260px",

  paddingTop: "16px",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingBottom: "12px",

  whiteSpace: "pre-line",

  background: "#FFFFFF 0% 0% no-repeat padding-box",

  borderRadius: "8px",

  wordBreak: "break-all",

  '&::-webkit-scrollbar': {
    width: '8px',
    opacity: 0,
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#B3B3B3',
    outline: '2px',
  },

  '&::-webkit-scrollbar-button': {
    height: 0,
    width: 0,
  },
  
  letterSpacing: '0px',

  opacity: 1,
});

export default function Preview() {
  const tabKey = useRecoilValue(tabKeyAtom);
  const content = useRecoilValue(contentSelector(tabKey));
  const title = useRecoilValue(titleSelector(tabKey));
  
  return (
    <PreCont>
      <ShadowBack>
        <ShadowCont>
          <ScrollBox>
            <ShowCont>
              <h2>
                {title}
              </h2>
              <p>
                {content}
              </p>
            </ShowCont>
          </ScrollBox>
        </ShadowCont>
      </ShadowBack>
    </PreCont>
  )
}