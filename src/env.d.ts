declare const BASE_URL;

declare namespace NodeJS {
	export interface ProcessEnv {
		BASE_URL: string;
	}
}
