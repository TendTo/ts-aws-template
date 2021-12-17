export type LambdaEvent = { headers: string, body: string, [key: string]: string };
export type LambdaResult = { statusCode: number, body: string };
export type LambdaHandler = (event: LambdaEvent) => Promise<LambdaResult>;