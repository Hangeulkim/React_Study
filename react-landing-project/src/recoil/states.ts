import { atom, atomFamily, DefaultValue, selector, selectorFamily} from 'recoil';
import { RequestData, PostError, ResponseData, ResponseState } from '../services/postMessage';
import { TabRecoilKey } from './key';

type message = {
    id: TabRecoilKey,
    phoneNumber: string,
    title: string,
    content: string,
}

export const tabKeyAtom = atom<TabRecoilKey>({
    key: 'tabKey',
    default: 1,
});

export const messageState = atomFamily<message, TabRecoilKey>({
    key: 'messageState',
    default: (tabKey: TabRecoilKey) => ({
        id: tabKey,
        phoneNumber: "",
        title: "",
        content: "",
      }),
})

export const messageSelector = selectorFamily<message, TabRecoilKey>({
    key: "messageSelector",

    get: 
        (id: TabRecoilKey) => 
        ({get}) => {
            const messageAtom = get(messageState(id));

            return messageAtom;
        },
});

export const phoneNumberSelector = selectorFamily<string, TabRecoilKey>({
    key: "phoneNumberSelector",

    get: 
        (id: TabRecoilKey) => 
        ({get}) => {
            const messageAtom = get(messageState(id));

            return messageAtom.phoneNumber;
        },
    
    set:
        (id: TabRecoilKey) =>
        ({set}, newString) => {
            const messageAtom = messageState(id);

            if(!(newString instanceof DefaultValue))
                set(messageAtom, currVal => ({...currVal, phoneNumber: newString}));
        },
});

export const titleSelector = selectorFamily<string, TabRecoilKey>({
    key: "titleSelector",

    get: 
        (id: TabRecoilKey) => 
        ({get}) => {
            const messageAtom = get(messageState(id));

            return messageAtom.title;
        },
    
    set:
        (id: TabRecoilKey) =>
        ({set}, newString) => {
            const messageAtom = messageState(id);
            
            if(!(newString instanceof DefaultValue))
                set(messageAtom, currVal => ({...currVal, title: newString}));
        },
});

export const contentSelector = selectorFamily<string, TabRecoilKey>({
    key: "contentSelector",

    get: 
        (id: TabRecoilKey) => 
        ({get}) => {
            const messageAtom = get(messageState(id));

            return messageAtom.content;
        },
    set:
        (id: TabRecoilKey) =>
        ({set}, newString) => {
            const messageAtom = messageState(id);

            if(!(newString instanceof DefaultValue))
                set(messageAtom, currVal => ({...currVal, content: newString}));
        },
});

export const overLength = selectorFamily<boolean, TabRecoilKey>({
    key: "overLenght",

    get:
        (id: TabRecoilKey) => 
            ({get}) => {
                const messageAtom = get(messageState(id));

                return messageAtom.content.length > 100;
            },
});


export const sendButtonDisabled = selectorFamily<boolean, TabRecoilKey>({
    key: "sendButtonDisabled",

    get:
        (id: TabRecoilKey) => 
            ({get}) => {
                const messageAtom = get(messageState(id));

                return messageAtom.phoneNumber.length !== 13 || !messageAtom.title || !messageAtom.content || messageAtom.content.length > 100;
            },
});

export const requestDataSelector = selector<RequestData>({
    key: 'requestData',
    get: ({get}) => {
        const tabKey = get(tabKeyAtom);
        const mes = get(messageState(tabKey));
        return {
            phoneNumber: mes.phoneNumber,
            title: mes.title,
            message: mes.content,
        };
    },
});

export const loadingAtom = atom<boolean>({
    key: 'loading',
    default: false,
});

export const responseAtom = atom<ResponseData | PostError | null>({
    key: 'response',
    default: null,
});

export const dialogOpenStateAtom = atom<ResponseState | 'none'>({
    key: 'dialogOpenState',
    default: 'none',
});


