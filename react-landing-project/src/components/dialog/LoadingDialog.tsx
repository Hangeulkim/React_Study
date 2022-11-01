import { Backdrop, CircularProgress } from "@mui/material";
import { useRecoilValue } from "recoil";
import { loadingAtom } from "../../recoil/states";


export default function LoadingBackdrop() {
    const loading = useRecoilValue(loadingAtom);

    return (
        <Backdrop open={loading}>
            <CircularProgress sx = {{
                color: "white",
            }}/>
        </Backdrop>
    )
}