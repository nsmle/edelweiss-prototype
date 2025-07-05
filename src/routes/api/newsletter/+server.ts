import db from '$lib/server/database';
import { getAvatarApiProfile, getGravatarProfile } from '$utils/avatar.util';
import type { RequestEvent } from './$types';

const response = (statusCode: number, type: string, message: string): Response =>
    new Response(JSON.stringify({ status: type, message }), {
        status: statusCode,
        headers: { 'Content-Type': 'application/json' }
    });

export async function GET({ url }): Promise<Response> {
    return new Response(null, { status: 302, headers: { location: url.origin } });
}

export async function POST(event: RequestEvent): Promise<Response> {
    if (event.request.headers.get('Content-Type') !== 'application/json')
        return response(400, 'incorrect', 'Unsupported Media Type');

    try {
        const email = await event.request.json().then((data): string => data.email?.toString()?.trim() || '');

        const emailExists = await db.getNewsletterEmail(email);
        if (emailExists) {
            const message = emailExists?.name?.length
                ? `${emailExists.name} kamu udah terdaftar, kami akan kirim email saat ada update.`
                : `${email} udah terdaftar, kami akan kirim email saat ada update.`;
            return response(409, 'allready', message);
        }
        let profile = await getGravatarProfile(email);
        if (profile?.error) {
            const { id, username, password } = await db.getAvatarApiApikey();
            profile = await getAvatarApiProfile(username, password, email);
            await db.updateAvatarApiApikeyCredits(id, profile.credits);
        }

        let name = profile?.name ?? profile?.display_name;
        const created = await db.connection.newsletter.create({
            data: {
                name: name,
                email: email,
                alternativeEmail: profile?.contact_info?.email ? profile.contact_info.email : null,
                image: (profile?.image || profile?.avatar_url) ?? null,
                phone:
                    (profile?.contact_info?.home_phone ||
                        profile?.contact_info?.work_phone ||
                        profile?.contact_info?.cell_phone) ??
                    null,
                location: profile?.location?.length ? profile.location : null,
                jobTitle: profile?.job_title?.length ? profile.job_title : null,
                rawProfile: profile?.rawData ?? (!profile?.error && profile?.hash ? JSON.stringify(profile) : null),
                sourceProfile: profile?.rawDataSource ?? (!profile?.error && profile?.hash ? 'Gravatar' : null)
            }
        });

        if (!created) {
            console.error(`Failed to add email ${email} to newsletter list: `, { email, profile, created });
            return response(500, 'error', 'Gagal menambahkan email ke daftar newsletter kami, silakan coba lagi!');
        }

        const message = name?.length
            ? `Halo ${name}, kamu berhasil ditambahkan ke daftar newsletter kami!`
            : `Email ${email} berhasil ditambahkan ke daftar newsletter kami!`;
        return response(400, 'success', message);
    } catch (error) {
        console.error('Error adding email to newsletter:', error);
        return response(500, 'error', 'Gagal menambahkan email ke daftar newsletter kami, silakan coba lagi!');
    }
}
