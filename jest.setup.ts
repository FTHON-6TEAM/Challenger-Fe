import '@testing-library/jest-dom';
import { server } from './src/mocks/server';

jest.mock('next/router', () => require('next-router-mock'));

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
