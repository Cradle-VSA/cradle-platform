import { ServerRequestAction, serverRequestActionCreator } from '../utils';

import { EndpointEnum } from '../../../server';
import { MethodEnum } from '../../../server';
import { OrNull } from '@types';

enum NewReadingStatusEnum {
  CLEAR_REQUEST_OUTCOME = `newReadingStatus/CLEAR_REQUEST_OUTCOME`,
  NEW_READING_STATUS_ERROR = `newReadingStatus/NEW_READING_STATUS_ERROR`,
  NEW_READING_STATUS_SUCCESS = `newReadingStatus/NEW_READING_STATUS_SUCCESS`,
}

type NewReadingStatusPayload = { message: string };

type NewReadingStatusAction =
  | { type: NewReadingStatusEnum.NEW_READING_STATUS_ERROR }
  | { type: NewReadingStatusEnum.CLEAR_REQUEST_OUTCOME }
  | {
      type: NewReadingStatusEnum.NEW_READING_STATUS_SUCCESS;
      payload: NewReadingStatusPayload;
    };

export const addNewReading = (data: any): ServerRequestAction => {
  return serverRequestActionCreator({
    endpoint: `${EndpointEnum.PATIENT}${EndpointEnum.READING}`,
    method: MethodEnum.POST,
    data,
    onSuccess: (message: string): NewReadingStatusAction => ({
      type: NewReadingStatusEnum.NEW_READING_STATUS_SUCCESS,
      payload: { message },
    }),
    onError: (): NewReadingStatusAction => ({
      type: NewReadingStatusEnum.NEW_READING_STATUS_ERROR,
    }),
  });
};

export const addReadingNew = (reading: any) => {
  return serverRequestActionCreator({
    endpoint: `${EndpointEnum.READINGS}`,
    method: MethodEnum.POST,
    data: reading,
    onSuccess: (message: string): NewReadingStatusAction => ({
      type: NewReadingStatusEnum.NEW_READING_STATUS_SUCCESS,
      payload: { message },
    }),
    onError: (): NewReadingStatusAction => ({
      type: NewReadingStatusEnum.NEW_READING_STATUS_ERROR,
    }),
  });
};

export const addReadingAssessment = (assessment: any) => {
  return serverRequestActionCreator({
    endpoint: `${EndpointEnum.ASSESSMENTS}`,
    method: MethodEnum.POST,
    data: assessment,
    onSuccess: (): NewReadingStatusAction => ({
      type: NewReadingStatusEnum.CLEAR_REQUEST_OUTCOME,
    }),
    onError: (): NewReadingStatusAction => ({
      type: NewReadingStatusEnum.NEW_READING_STATUS_ERROR,
    }),
  });
};

export const resetNewReadingStatus = (): NewReadingStatusAction => ({
  type: NewReadingStatusEnum.CLEAR_REQUEST_OUTCOME,
});

export type NewReadingStatusState = {
  error: boolean;
  message: OrNull<string>;
  readingCreated: boolean;
};

const initialState: NewReadingStatusState = {
  error: false,
  message: null,
  readingCreated: false,
};

export const newReadingStatusReducer = (
  state = initialState,
  action: NewReadingStatusAction
): NewReadingStatusState => {
  switch (action.type) {
    case NewReadingStatusEnum.NEW_READING_STATUS_SUCCESS:
      return {
        ...initialState,
        message: action.payload.message,
        readingCreated: true,
      };
    case NewReadingStatusEnum.NEW_READING_STATUS_ERROR:
      return {
        error: true,
        message: `Error! Patient reading not created.`,
        readingCreated: false,
      };
    case NewReadingStatusEnum.CLEAR_REQUEST_OUTCOME:
      return initialState;
    default:
      return state;
  }
};
