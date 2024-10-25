declare const BASE_URL;

declare namespace NodeJS {
	export interface ProcessEnv {
		BASE_URL: string;
	}
}

declare module '*.svg' {
	const content: string;
	export default content;
}
declare module '*.svg?react' {
	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}
