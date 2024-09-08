import type { RequestHandler } from 'msw';
import { handlers as challengeHandlers } from './challenge';

const handlers: RequestHandler[] = [...challengeHandlers];

export default handlers;
