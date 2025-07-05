import { layoutData, type LayoutData } from '$lib/server/data';
import { getLogMessageToken } from '$utils/logger.util';
import type { LayoutServerLoad, LayoutServerLoadEvent } from './$types';

export const load: LayoutServerLoad = async (event: LayoutServerLoadEvent): Promise<LayoutData> => {
    const isProduction = process.env?.VERCEL ? Boolean(process.env?.VERCEL) : process.env.NODE_ENV === 'production';
    return {
        ...layoutData,
        isProduction: isProduction,
        logToken: isProduction ? getLogMessageToken(event) : null
    } satisfies LayoutData;
};
