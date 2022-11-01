import { useRecoilCallback} from 'recoil';
import { isPostError, postMessage } from '../services/postMessage';
import { requestDataSelector, loadingAtom, responseAtom, dialogOpenStateAtom } from './states';

export default function useMessageBuilder() {
  const sendMessage = useRecoilCallback(
    ({snapshot, set}) => () => {
      const requestData = snapshot
        .getLoadable(requestDataSelector)
        .getValue();

      set(loadingAtom, true);

      (async() => {try{
        const response = await postMessage(requestData);
        set(responseAtom, response);
        set(dialogOpenStateAtom, 'success');
      } catch(e){
        if(isPostError(e)){
          set(responseAtom, e);
          set(dialogOpenStateAtom, 'failure');
        } 
      } finally {
        set(loadingAtom, false);
      }})();
    }, []);

    const closeDialog = useRecoilCallback(({set}) => () => {
      set(dialogOpenStateAtom, 'none');
    });

  return { sendMessage, closeDialog};
}
