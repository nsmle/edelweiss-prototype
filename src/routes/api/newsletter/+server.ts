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
        const data = await event.request.json();
        const email: string = data.email?.toString()?.trim() || '';
        const message = data.message?.toString()?.trim() || '';

        const newsletterExists = await db.getNewsletterEmail(email);
        if (!message?.length) {
            if (newsletterExists) {
                const msg = newsletterExists?.name?.length
                    ? `${newsletterExists.name} kamu udah terdaftar, kami akan kirim email saat ada update.`
                    : `${email} udah terdaftar, kami akan kirim email saat ada update.`;
                return response(409, 'allready', msg);
            }
        }

        let profile = await getGravatarProfile(email);
        if (profile?.error) {
            const { id, username, password } = await db.getAvatarApiApikey();
            profile = await getAvatarApiProfile(username, password, email);
            await db.updateAvatarApiApikeyCredits(id, profile.credits);
        }

        let name = profile?.name ?? profile?.display_name;
        if (newsletterExists) {
            const updated = await db.connection.newsletter.update({
                where: { email },
                data: {
                    name: name,
                    message: message?.length ? message : newsletterExists.message,
                    alternativeEmail: profile?.contact_info?.email
                        ? profile.contact_info.email
                        : newsletterExists.alternativeEmail,
                    image: (profile?.image || profile?.avatar_url) ?? newsletterExists.image,
                    phone:
                        (profile?.contact_info?.home_phone ||
                            profile?.contact_info?.work_phone ||
                            profile?.contact_info?.cell_phone) ??
                        newsletterExists.phone,
                    location: profile?.location?.length ? profile.location : newsletterExists.location,
                    jobTitle: profile?.job_title?.length ? profile.job_title : newsletterExists.jobTitle,
                    rawProfile:
                        profile?.rawData ??
                        (!profile?.error && profile?.hash ? JSON.stringify(profile) : newsletterExists.rawProfile),
                    sourceProfile:
                        profile?.rawDataSource ??
                        (!profile?.error && profile?.hash ? 'Gravatar' : newsletterExists.sourceProfile)
                }
            });
            if (!updated) {
                console.error(`Failed to update email ${email} in newsletter list: `, { email, profile, updated });
                return response(500, 'error', 'Gagal memperbarui email di daftar newsletter kami, silakan coba lagi!');
            }

            if (message?.length) {
                const msg = name?.length
                    ? `Halo ${name}, pesanmu berhasil dikirim ke tim kami!`
                    : `Pesanmu berhasil dikirim ke tim kami!`;
                return response(200, 'success', msg);
            }

            const msg = name?.length
                ? `Halo ${name}, kamu berhasil subscribe ke newsletter kami!`
                : `Email ${email} berhasil subscribe ke newsletter kami!`;
            return response(200, 'success', msg);
        }

        const created = await db.connection.newsletter.create({
            data: {
                name: name,
                email: email,
                message: message?.length ? message : null,
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

        const msg = name?.length
            ? `Halo ${name}, kamu berhasil ditambahkan ke daftar newsletter kami!`
            : `Email ${email} berhasil ditambahkan ke daftar newsletter kami!`;
        return response(400, 'success', msg);
    } catch (error) {
        console.error('Error adding email to newsletter:', error);
        return response(500, 'error', 'Gagal menambahkan email ke daftar newsletter kami, silakan coba lagi!');
    }
}
