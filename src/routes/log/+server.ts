import { TELEGRAM_BOT_TOKEN, TELEGRAM_USER_ID } from '$env/static/private';
import { getFormattedLogMessageText, type LogData } from '$utils/logger.util';
import type { RequestEvent } from './$types';

const sendLog = async (text: string): Promise<any> => {
    try {
        const botToken = TELEGRAM_BOT_TOKEN;
        const userId = TELEGRAM_USER_ID;

        const formattedText = text
            .replaceAll('\n', '%0A')
            .replaceAll('&', '%26')
            .replaceAll('?', '%3F')
            .replaceAll('-', '\\-')
            .replaceAll('=', '\\=')
            .replaceAll('"', '\\"')
            .replaceAll('.', '\\.');
        const parser = 'MarkdownV2';

        const result = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${userId}&parse_mode=${parser}&text=${formattedText}`,
            { method: 'GET' }
        ).then((res): Promise<any> => res.json());
        if (!result.ok) throw new Error(JSON.stringify(result));
        return result;
    } catch (error) {
        console.error('Log to telegram error:', JSON.parse((error as any)?.message ?? '{}'));
        return JSON.parse((error as any)?.message ?? '{}');
    }
};

const response = (statusCode: number, success: boolean): Response =>
    new Response(JSON.stringify({ success }), { status: statusCode, headers: { 'Content-Type': 'application/json' } });

export async function POST(event: RequestEvent): Promise<Response> {
    if (event.request.headers.get('content-type') !== 'application/vnd+nsmle.dicea+log') return response(401, false);

    const raw = event.request.headers.get('authorization')?.replace('Bearer ', '') || '';
    const data: LogData = JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));

    const logMessage = getFormattedLogMessageText(data);
    const sended = await sendLog(logMessage);
    return response(sended?.error_code ?? 201, sended?.ok ?? true);
}
