/* eslint-disable prefer-promise-reject-errors */

import { v4 as uuidv4 } from 'uuid';

export interface RequestData {
  phoneNumber: string;
  title: string;
  message: string;
}

export interface ResponseData {
  requestCode: string;
  responseCode: string;
}

export interface PostError extends Error {
  requestCode: string;
}

export function isPostError(target?: unknown): target is PostError {
  if (!target) return false;

  const t = target as PostError;
  return (
    t.requestCode !== undefined &&
    t.name !== undefined &&
    t.message !== undefined
  );
}

const errorMessages: string[] = [
  '요청 시간이 초과되었습니다.',
  '세션이 만료되었습니다.',
  '알 수 없는 오류가 발생했습니다.',
];

export type ResponseState = 'success' | 'failure';

/**
 * networking mock function
 * @param data required
 * @param responseState optional.
 * If undefined, succeed or fail with 50% change.
 * If 'success', this request always succeeds.
 * If 'failure', this request always fails.
 *
 * @return {@link ResponseData} if request succeeded, {@link PostError} if request failed.
 */
export function postMessage(
  data: RequestData,
  responseState?: ResponseState
): Promise<ResponseData> {
  const responseTime = Math.random() * 500 + 500;
  console.log(responseTime);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestCode = uuidv4().split('-')[0];
      const responseCode = uuidv4().split('-')[0];
      const errorMessage =
        errorMessages[Math.floor(Math.random() * errorMessages.length)];
      const state: ResponseState =
        responseState ?? (Math.random() < 0.5 ? 'success' : 'failure');

      if (state === 'success') {
        resolve({ requestCode, responseCode });
      } else {
        reject({
          requestCode,
          name: 'post error',
          message: errorMessage,
        } as PostError);
      }
    }, responseTime);
  });
}
