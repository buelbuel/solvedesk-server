/** PM2 Configuration */
export const apps = [
	{
		name: 'solvedesk-server',
		script: 'dist/index.js',
		instances: 'max',
		exec_mode: 'cluster',
		env: {
			NODE_ENV: 'production',
			PORT: 3001
		}
	}
]
