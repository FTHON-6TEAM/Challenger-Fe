import { type DefaultBodyType, http, HttpResponse, type PathParams } from 'msw';

const mockChallengeBase = '/challenge';

export const handlers = [
  //TODO::fix (셋업 테스트용 핸들러)
  http.get(mockChallengeBase, () => HttpResponse.json(null, { status: 200 })),
];
