import { Resend } from 'resend';

// NOTE: This is a Vercel/Netlify serverless function
// It should be deployed to a platform that supports serverless functions.
// For local testing, use 'vercel dev' or similar.

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, budget, message, country } = req.body;

    // Validation basique
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL || 'onboarding@resend.dev',
      to: process.env.RECIPIENT_EMAIL || 'docasy.officiel@gmail.com',
      subject: `🚀 Nouveau projet DOCASY : ${service}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0; background-color: #0F172A; font-family: 'Poppins', Arial, sans-serif; color: #ffffff;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0F172A; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <!-- Main Card -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #1E293B; border-radius: 24px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.05); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);">
                    
                    <!-- Header with Gradient -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #2563EB, #7C3AED); padding: 40px 40px 30px 40px; text-align: left;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td>
                              <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.2); padding: 8px 16px; border-radius: 100px; margin-bottom: 16px;">
                                <span style="color: #ffffff; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">Nouveau Lead</span>
                              </div>
                              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; line-height: 1.2;">
                                DOCASY <span style="opacity: 0.8;">Digital</span>
                              </h1>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Content Section -->
                    <tr>
                      <td style="padding: 40px;">
                        <p style="margin: 0 0 24px 0; color: rgba(255, 255, 255, 0.6); font-size: 16px; line-height: 1.6;">
                          Vous avez reçu une nouvelle demande de projet via le formulaire de contact de votre site web.
                        </p>

                        <!-- Data Table -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                          <tr>
                            <td style="padding: 16px; background-color: rgba(255, 255, 255, 0.03); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                              <table width="100%" border="0" cellspacing="0" cellpadding="8">
                                <tr>
                                  <td width="35%" style="color: #06B6D4; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Client</td>
                                  <td style="color: #ffffff; font-size: 14px; font-weight: 600;">${name}</td>
                                </tr>
                                <tr>
                                  <td style="color: #06B6D4; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                                  <td style="color: #ffffff; font-size: 14px;"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                  <td style="color: #06B6D4; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Téléphone</td>
                                  <td style="color: #ffffff; font-size: 14px;">${phone || 'Non précisé'} ${country ? `<span style="opacity: 0.5;">(${country.flag} ${country.name})</span>` : ''}</td>
                                </tr>
                                <tr>
                                  <td style="color: #06B6D4; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Service</td>
                                  <td style="color: #ffffff; font-size: 14px; font-weight: 600;">
                                    <span style="background-color: rgba(37, 99, 235, 0.1); color: #2563EB; padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(37, 99, 235, 0.2);">${service}</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="color: #06B6D4; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Budget</td>
                                  <td style="color: #10B981; font-size: 14px; font-weight: 800;">${budget}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!-- Message Box -->
                        <div style="margin-bottom: 8px;">
                          <h2 style="margin: 0 0 12px 0; color: #ffffff; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Détails du projet</h2>
                          <div style="background-color: rgba(255, 255, 255, 0.03); padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05); color: rgba(255, 255, 255, 0.8); font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 0 40px 40px 40px; text-align: center;">
                        <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.05); margin-bottom: 24px;">
                        <p style="margin: 0; color: rgba(255, 255, 255, 0.3); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
                          © ${new Date().getFullYear()} DOCASY Agency • Digital Excellence
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
