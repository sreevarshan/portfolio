/* global process */
import { Resend } from "resend";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { firstName, lastName, email, company, phoneNumber, message } = req.body || {};

  // Basic server-side validation
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set in environment variables.");
    // In local dev without key, log the message and return success for testing UI
    return res.status(200).json({
      success: true,
      message: "Form received locally. Add RESEND_API_KEY to .env.local to send actual emails.",
      data: { firstName, lastName, email, company, phoneNumber, message }
    });
  }

  try {
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["sreevarshan152000@gmail.com"],
      subject: `Portfolio Message from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #4F46E5; margin-top: 0;">New Contact Submission</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 15px 0;" />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Phone:</strong> ${phoneNumber || "N/A"}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #4F46E5; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #555;">Message:</p>
            <p style="margin-top: 8px; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">Sent from portfolio site (Sree Varshan).</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return res.status(500).json({ error: error.message || "Failed to send email." });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: err.message || "Internal server error." });
  }
}
