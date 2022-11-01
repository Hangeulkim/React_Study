# services
모조 api 호출 함수가 작성되어 있습니다. 수정을 금합니다.

### example usage
```typescript
import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { isPostError, PostError, postMessage, ResponseData } from './services/postMessage';

export default function App() {
  const [response, setResponse] = useState<RequestData | PostError>();

  return (
    <Box>
      <Button onClick={async () => {
        try {
          const res = await postMessage({
            phoneNumber: ' string',
            title: 'string',
            message: 'string'
          });
          setResponse(res);
        } catch (e) {
          if (isPostError(e)) {
            setResponse(e);
          }
        }
      }
      }>
       클릭
      </Button>
      <Typography>
        {isPostError(response) && response?.message}<br />
        {response?.requestCode}
      </Typography>
    </Box>
  );
}
```
