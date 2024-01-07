declare module '*.jpg'
declare module '*.png'
declare module 'react-s3' {
	export interface S3Config {
		bucketName: string
		dirName?: string
		region?: string
		accessKeyId?: string
		secretAccessKey?: string
		fileName?: string
		s3Url?: string
		endpoint?: string
		signatureVersion?: string
	}

	export interface S3UploadOptions {
		onProgress?: (percent: number, status: string, file: File) => void
		onError?: (error: Error, file: File) => void
		onFinish?: (signData: any, file: File) => void
		bucketName?: string
		dirName?: string
		region?: string
		accessKeyId?: string
		secretAccessKey?: string
		s3Url?: string
		endpoint?: string
		signatureVersion?: string
	}

	export function uploadFile(
		file: File,
		config: S3Config,
		options?: S3UploadOptions
	): void
}
