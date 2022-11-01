import React from 'react';
import { Box, Grid, Stack, styled} from '@mui/material';
import TabButton from './components/TabButton';
import Preview from './components/Preview';
import SendButton from './components/SendButton';
import MessageBuilder from './components/MessageBuilder';
import SuccessDialog from './components/dialog/SuccessDialog';
import FailureDialog from './components/dialog/FailureDialog';
import LoadingBackdrop from './components/dialog/LoadingDialog';

const AppBox = styled(Box)({
	width: "100vw",
	height: "80vh",
	minHeight: "500px",
	minWidth: "1000px",
	maxWidth: "90%",
	maxHeight: "75%",

	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	
	background: "#F7F8FA 0% 0% no-repeat padding-box",
	opacity: 1,

	
	padding: "16px 16px 32px 16px",
});

const AppCont = styled('div')({
	width: "100%",
});

const DataCont = styled('div')({
	height: "100%",
	width: "100%",
	flexDirection: "inherit",
	display: "flex",
	paddingBottom: "16px",
});

function App() {
  return(
  <AppBox>
	<AppCont>
		<Stack direction="row" spacing={1}>
			<TabButton idx = {1}/>
			<TabButton idx = {2}/>
			<TabButton idx = {3}/>
		</Stack>
	</AppCont>
	<DataCont>
		<MessageBuilder />
		<Grid sx={{
					float: 'left',
					paddingTop: "16px",
					flexDirection: "column",
					display: "flex",
					marginLeft: "16px",
					
					flex: 1,
					}}>
			<Preview />
			<SendButton/>
		</Grid>
	</DataCont>
	<>
		<LoadingBackdrop/>
		<SuccessDialog/>
		<FailureDialog/>
	</>
  </AppBox>
  );
}

export default App;
