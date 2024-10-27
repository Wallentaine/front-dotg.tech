import axios from 'axios';
import { appEnv } from '@shared/consts/env';

export const mainApi = axios.create({ baseURL: 'https://api.dotg.tech/' });