function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
export function adminEmailTemplate(data) {
  return `
  <body style="margin:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellspacing="0" cellpadding="0" style="padding:40px 0;">
      <tr>
        <td align="center">

          <table width="620" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#0B1F3A;padding:30px;text-align:center;color:white;">
                <h1 style="margin:0;font-size:26px;">New Website Request</h1>
                <p style="margin:6px 0 0;opacity:.8;">${data.formType === "quote" ? "Shipment Quote Request" : "Contact Message"}</p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px;">
                <h2 style="color:#0B1F3A;margin-top:0;">Customer Details</h2>

                <table width="100%" cellpadding="10" style="background:#f7f9fc;border-radius:8px;">
                  <tr>
                    <td><strong>Name:</strong></td>
                    <td>${data.name || "-"}</td>
                  </tr>
                  <tr>
                    <td><strong>Email:</strong></td>
                    <td>${data.email || "-"}</td>
                  </tr>
                  <tr>
                    <td><strong>Phone:</strong></td>
                    <td>${data.phone || "-"}</td>
                  </tr>
                  <tr>
                    <td><strong>Service:</strong></td>
                    <td>${data.service || data.shipmentType || "-"}</td>
                  </tr>
                  <tr>
                    <td><strong>Origin:</strong></td>
                    <td>${data.origin || "-"}</td>
                  </tr>
                  <tr>
                    <td><strong>Destination:</strong></td>
                    <td>${data.destination || "-"}</td>
                  </tr>
                </table>

                <h2 style="margin-top:30px;color:#0B1F3A;">Message</h2>
                <p style="background:#f7f9fc;padding:15px;border-radius:8px;">
                  ${data.message || "No message provided"}
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f4f6f8;padding:20px;text-align:center;font-size:13px;color:#777;">
                Website Lead • ${new Date().getFullYear()}
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
  `;
}
export function autoReplyTemplate(name) {
  return `
  <body style="margin:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellspacing="0" cellpadding="0" style="padding:40px 0;">
      <tr>
        <td align="center">

          <table width="600" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#0B1F3A;padding:30px;text-align:center;color:white;">
                <h1 style="margin:0;">Thank You For Contacting Us</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:30px;">
                <p>Dear ${name},</p>

                <p>
                  We have successfully received your request.  
                  Our logistics team is reviewing the details and will contact you shortly.
                </p>

                <p>
                  If your shipment is urgent, feel free to reply directly to this email.
                </p>

                <br/>
                <strong>Global Logistics Team</strong>
              </td>
            </tr>

            <tr>
              <td style="background:#f4f6f8;padding:20px;text-align:center;font-size:13px;color:#777;">
                This is an automated confirmation email.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
  `;
}
