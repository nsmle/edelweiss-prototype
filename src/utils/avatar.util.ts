import { GRAVATAR_APIKEY } from '$env/static/private';
import { sha256 } from 'hash-wasm';

export const getGravatarProfile = async (email: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const emailHash = await sha256(normalizedEmail);

    try {
        const response = await fetch(`https://api.gravatar.com/v3/profiles/${emailHash}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GRAVATAR_APIKEY}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: 'Failed to fetch Gravatar profile', details: error };
    }
};

type AvatarApiProfileResponse =
    | { success: boolean; credits: number }
    | {
          success: boolean;
          name: string;
          image: string;
          valid: true;
          location: string;
          rawData?: string;
          rawDataSource: string;
          credits: number;
      };

export const getAvatarApiProfile = async (
    username: string,
    password: string,
    email: string
): Promise<AvatarApiProfileResponse> => {
    const response = await fetch('https://avatarapi.com/v2/api.aspx', {
        method: 'POST',
        body: JSON.stringify({ username, password, email })
    });
    const { credits } = await getAvatarApiCredits(username, password);
    const data = await response.json();
    if (!data?.Success) return { success: false, credits: credits || 0 };
    return {
        success: true,
        name: data?.Name ?? null,
        image: data?.Image ?? null,
        valid: data?.Country || false,
        location: `${data?.City} ${data?.Country}`.trim(),
        rawData: data?.RawData || null,
        rawDataSource: data?.Source?.Name || 'AvatarApi',
        credits: credits || 0
    };
};

export const getAvatarApiCredits = async (
    username: string,
    password: string
): Promise<{ email: string; credits: number }> => {
    const response = await fetch('https://avatarapi.com/v2/credits.aspx', {
        method: 'POST',
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    return data;
};
