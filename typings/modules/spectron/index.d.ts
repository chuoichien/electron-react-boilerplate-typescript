declare module 'spectron' {

	export interface ConsoleLog {
		readonly level: string
		readonly message: string
		readonly source: string
		readonly timestamp: number
	}

	export type AccessibilityAuditRule = 'AX_ARIA_01' | 'AX_ARIA_02' | 'AX_ARIA_03' | 'AX_ARIA_04' | 'AX_ARIA_05' | 'AX_ARIA_06' |
		'AX_ARIA_07' | 'AX_ARIA_08' | 'AX_ARIA_09' | 'AX_ARIA_10' | 'AX_ARIA_11' | 'AX_ARIA_12' | 'AX_ARIA_13' | 'AX_AUDIO_01' |
		'AX_HTML_01' | 'AX_HTML_02' | 'AX_TEXT_01' | 'AX_TEXT_02' | 'AX_TEXT_03' | 'AX_TEXT_04' | 'AX_TITLE_01' | 'AX_IMAGE_01' |
		'AX_FOCUS_01' | 'AX_FOCUS_02' | 'AX_FOCUS_03' | 'AX_COLOR_01' | 'AX_VIDEO_01' | 'AX_TABLE_01' | 'AX_TOOLTIP_01'

	export interface AccessibilityAuditOptions {
		ignoreWarnings?: boolean
		ignoreRules?: AccessibilityAuditRule[]
	}

	export interface AccessibilityAudit {
		readonly message: string
		readonly failed: boolean
		readonly results: {
			readonly code: AccessibilityAuditRule
			readonly elements: string[]
			readonly message: string
			readonly severity: 'Warning' | 'Severe'
			readonly url: string
		}
	}

	export interface Client {
		getMainProcessLogs(): Promise<string[]>
		getRenderProcessLogs(): Promise<ConsoleLog[]>
		getSelectedText(): Promise<string>
		getWindowCount(): Promise<number>
		waitUntilTextExists(selector: string, text: string, timeout?: number): Promise<void>
		waitUntilWindowLoaded(timeout?: number): Promise<void>
		windowByIndex(index: number): Electron.BrowserWindow
		auditAccessibility(options: AccessibilityAuditOptions): AccessibilityAudit
	}

	export interface ApplicationOptions {
		path: string | Electron.CommonElectron
		args?: string[]
		cwd?: string
		env?: Object
		host?: string
		port?: number
		nodePath?: string
		connectionRetryCount?: number
		connectionRetryTimeout?: number
		quitTimeout?: number
		requireName?: string
		startTimeout?: number
		waitTimeout?: number
		debuggerAddress?: string
		chromeDriverLogPath?: string
	}

	export class Application {
		readonly client: Client;
		readonly electron: Electron.CommonElectron;
		readonly browserWindow: Electron.BrowserWindow;
		readonly webContents: Electron.WebContents;
		readonly mainProcess: NodeJS.Process;
		readonly rendererProcess: NodeJS.Process;

		constructor(options: ApplicationOptions)
		start(): Promise<void>
		stop(): Promise<void>
		restart(): Promise<void>
		isRunning(): boolean
		getSettings(): ApplicationOptions
	}

}
