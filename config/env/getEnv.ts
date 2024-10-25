export const EnvVariablesNames = [ 'BASE_URL', 'HUY' ];

export const getEnv = () => EnvVariablesNames.reduce((accum, key) => ({
	...accum,
	[key]: JSON.stringify(process.env[key])
}), {});
