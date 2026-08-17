function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/*
 * =========================================================
 * ADMIN EMAIL
 * Used by:
 * - Quote form
 * - Contact form
 * =========================================================
 */

export function adminEmailTemplate(data) {
  const isQuote = data.formType === "quote";

  const title = isQuote
    ? "Shipment Quote Request"
    : "Contact Message";

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${escapeHtml(title)}</title>
    </head>

    <body
      style="
        margin:0;
        background:#f4f6f8;
        font-family:Arial,Helvetica,sans-serif;
        color:#333;
      "
    >
      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        border="0"
        style="padding:40px 0;background:#f4f6f8;"
      >
        <tr>
          <td align="center">

            <table
              width="620"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="
                width:100%;
                max-width:620px;
                background:#ffffff;
                border-radius:12px;
                overflow:hidden;
              "
            >

              <!-- Header -->
              <tr>
                <td
                  style="
                    background:#0B1F3A;
                    padding:30px;
                    text-align:center;
                    color:#ffffff;
                  "
                >
                  <h1
                    style="
                      margin:0;
                      font-size:26px;
                      line-height:1.3;
                    "
                  >
                    New Website Request
                  </h1>

                  <p
                    style="
                      margin:8px 0 0;
                      font-size:15px;
                      color:#d9e2ef;
                    "
                  >
                    ${escapeHtml(title)}
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:30px;">

                  <h2
                    style="
                      color:#0B1F3A;
                      margin:0 0 20px;
                      font-size:20px;
                    "
                  >
                    ${isQuote ? "Customer & Shipment Details" : "Contact Details"}
                  </h2>

                  <table
                    width="100%"
                    cellpadding="10"
                    cellspacing="0"
                    border="0"
                    style="
                      background:#f7f9fc;
                      border-radius:8px;
                    "
                  >

                    <tr>
                      <td width="35%">
                        <strong>Name:</strong>
                      </td>
                      <td>
                        ${escapeHtml(data.name) || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Email:</strong>
                      </td>
                      <td>
                        ${escapeHtml(data.email) || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Phone:</strong>
                      </td>
                      <td>
                        ${escapeHtml(data.phone) || "-"}
                      </td>
                    </tr>

                    ${
                      data.company
                        ? `
                          <tr>
                            <td>
                              <strong>Company:</strong>
                            </td>
                            <td>
                              ${escapeHtml(data.company)}
                            </td>
                          </tr>
                        `
                        : ""
                    }

                    ${
                      data.inquiryType
                        ? `
                          <tr>
                            <td>
                              <strong>Inquiry Type:</strong>
                            </td>
                            <td>
                              ${escapeHtml(data.inquiryType)}
                            </td>
                          </tr>
                        `
                        : ""
                    }

                    ${
                      isQuote
                        ? `
                          <tr>
                            <td>
                              <strong>Service:</strong>
                            </td>
                            <td>
                              ${escapeHtml(data.service) || "-"}
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <strong>Origin:</strong>
                            </td>
                            <td>
                              ${escapeHtml(data.origin) || "-"}
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <strong>Destination:</strong>
                            </td>
                            <td>
                              ${escapeHtml(data.destination) || "-"}
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <strong>Cargo:</strong>
                            </td>
                            <td>
                              ${escapeHtml(data.cargo) || "-"}
                            </td>
                          </tr>
                        `
                        : ""
                    }

                  </table>

                  ${
                    data.message
                      ? `
                        <h2
                          style="
                            margin:30px 0 15px;
                            color:#0B1F3A;
                            font-size:20px;
                          "
                        >
                          Message
                        </h2>

                        <div
                          style="
                            background:#f7f9fc;
                            padding:15px;
                            border-radius:8px;
                            line-height:1.6;
                            white-space:pre-wrap;
                          "
                        >
                          ${escapeHtml(data.message)}
                        </div>
                      `
                      : ""
                  }

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td
                  style="
                    background:#f4f6f8;
                    padding:20px;
                    text-align:center;
                    font-size:13px;
                    color:#777;
                  "
                >
                  AM Logistics Website
                  &bull;
                  ${new Date().getFullYear()}
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}


/*
 * =========================================================
 * CAREER ADMIN EMAIL
 * Used by:
 * - Careers form
 * =========================================================
 */

export function careerEmailTemplate(data) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Job Application - AM Logistics</title>
    </head>

    <body
      style="
        margin:0;
        background:#f4f6f8;
        font-family:Arial,Helvetica,sans-serif;
        color:#333;
      "
    >

      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        border="0"
        style="padding:40px 0;background:#f4f6f8;"
      >
        <tr>
          <td align="center">

            <table
              width="620"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="
                width:100%;
                max-width:620px;
                background:#ffffff;
                border-radius:12px;
                overflow:hidden;
              "
            >

              <!-- Header -->
              <tr>
                <td
                  style="
                    background:#0B1F3A;
                    padding:30px;
                    text-align:center;
                    color:#ffffff;
                  "
                >
                  <h1
                    style="
                      margin:0;
                      font-size:26px;
                    "
                  >
                    New Job Application
                  </h1>

                  <p
                    style="
                      margin:8px 0 0;
                      color:#d9e2ef;
                      font-size:15px;
                    "
                  >
                    AM Logistics Careers
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:30px;">

                  <h2
                    style="
                      margin:0 0 20px;
                      color:#0B1F3A;
                      font-size:20px;
                    "
                  >
                    Applicant Details
                  </h2>

                  <table
                    width="100%"
                    cellpadding="10"
                    cellspacing="0"
                    border="0"
                    style="
                      background:#f7f9fc;
                      border-radius:8px;
                    "
                  >

                    <tr>
                      <td width="35%">
                        <strong>Name:</strong>
                      </td>
                      <td>
                        ${escapeHtml(data.name) || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Email:</strong>
                      </td>
                      <td>
                        ${escapeHtml(data.email) || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Phone:</strong>
                      </td>
                      <td>
                        ${escapeHtml(data.phone) || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Position:</strong>
                      </td>
                      <td>
                        ${escapeHtml(data.position) || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Experience:</strong>
                      </td>
                      <td>
                        ${escapeHtml(data.experience) || "-"}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>LinkedIn:</strong>
                      </td>
                      <td>
                        ${escapeHtml(data.linkedin) || "-"}
                      </td>
                    </tr>

                  </table>

                  ${
                    data.message
                      ? `
                        <h2
                          style="
                            margin:30px 0 15px;
                            color:#0B1F3A;
                            font-size:20px;
                          "
                        >
                          Cover Letter / Message
                        </h2>

                        <div
                          style="
                            background:#f7f9fc;
                            padding:15px;
                            border-radius:8px;
                            line-height:1.6;
                            white-space:pre-wrap;
                          "
                        >
                          ${escapeHtml(data.message)}
                        </div>
                      `
                      : ""
                  }

                  <p
                    style="
                      margin-top:30px;
                      font-size:14px;
                      color:#666;
                    "
                  >
                    The applicant's CV is attached to this email.
                  </p>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td
                  style="
                    background:#f4f6f8;
                    padding:20px;
                    text-align:center;
                    font-size:13px;
                    color:#777;
                  "
                >
                  AM Logistics Careers
                  &bull;
                  ${new Date().getFullYear()}
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
  </html>
  `;
}


/*
 * =========================================================
 * CUSTOMER AUTO REPLY
 * Used by:
 * - Quote form
 * - Contact form
 * =========================================================
 */

export function autoReplyTemplate(name) {
  const safeName = escapeHtml(name);

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>We Received Your Request - AM Logistics</title>
    </head>

    <body
      style="
        margin:0;
        background:#f4f6f8;
        font-family:Arial,Helvetica,sans-serif;
        color:#333;
      "
    >

      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        border="0"
        style="padding:40px 0;background:#f4f6f8;"
      >
        <tr>
          <td align="center">

            <table
              width="600"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="
                width:100%;
                max-width:600px;
                background:#ffffff;
                border-radius:12px;
                overflow:hidden;
              "
            >

              <!-- Header -->
              <tr>
                <td
                  style="
                    background:#0B1F3A;
                    padding:30px;
                    text-align:center;
                    color:#ffffff;
                  "
                >
                  <h1
                    style="
                      margin:0;
                      font-size:26px;
                    "
                  >
                    Thank You For Contacting Us
                  </h1>

                  <p
                    style="
                      margin:8px 0 0;
                      color:#d9e2ef;
                    "
                  >
                    AM Logistics
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:30px;">

                  <p style="margin:0 0 18px;">
                    Dear ${safeName || "Customer"},
                  </p>

                  <p style="line-height:1.7;margin:0 0 18px;">
                    We have successfully received your request.
                    Our logistics team is reviewing the details and
                    will contact you shortly.
                  </p>

                  <p style="line-height:1.7;margin:0 0 25px;">
                    If your shipment is urgent, feel free to reply
                    directly to this email.
                  </p>

                  <p style="margin:0;line-height:1.6;">
                    Best regards,<br />
                    <strong>AM Logistics Team</strong>
                  </p>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td
                  style="
                    background:#f4f6f8;
                    padding:20px;
                    text-align:center;
                    font-size:13px;
                    color:#777;
                  "
                >
                  This is an automated confirmation email.
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}


/*
 * =========================================================
 * CAREER AUTO REPLY
 * Used by:
 * - Careers form
 * =========================================================
 */

export function careerAutoReplyTemplate(name) {
  const safeName = escapeHtml(name);

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Application Received - AM Logistics</title>
    </head>

    <body
      style="
        margin:0;
        background:#f4f6f8;
        font-family:Arial,Helvetica,sans-serif;
        color:#333;
      "
    >

      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        border="0"
        style="padding:40px 0;background:#f4f6f8;"
      >
        <tr>
          <td align="center">

            <table
              width="600"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="
                width:100%;
                max-width:600px;
                background:#ffffff;
                border-radius:12px;
                overflow:hidden;
              "
            >

              <!-- Header -->
              <tr>
                <td
                  style="
                    background:#0B1F3A;
                    padding:30px;
                    text-align:center;
                    color:#ffffff;
                  "
                >
                  <h1
                    style="
                      margin:0;
                      font-size:26px;
                    "
                  >
                    Application Received
                  </h1>

                  <p
                    style="
                      margin:8px 0 0;
                      color:#d9e2ef;
                    "
                  >
                    AM Logistics Careers
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:30px;">

                  <p style="margin:0 0 18px;">
                    Dear ${safeName || "Applicant"},
                  </p>

                  <p style="line-height:1.7;margin:0 0 18px;">
                    Thank you for your interest in joining
                    <strong>AM Logistics</strong>.
                  </p>

                  <p style="line-height:1.7;margin:0 0 18px;">
                    We have successfully received your application
                    and CV. Our team will review your qualifications
                    and contact you if your profile matches our
                    current opportunities.
                  </p>

                  <p style="line-height:1.7;margin:0 0 25px;">
                    We appreciate your interest in AM Logistics
                    and wish you the best.
                  </p>

                  <p style="margin:0;line-height:1.6;">
                    Best regards,<br />
                    <strong>AM Logistics HR Team</strong>
                  </p>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td
                  style="
                    background:#f4f6f8;
                    padding:20px;
                    text-align:center;
                    font-size:13px;
                    color:#777;
                  "
                >
                  This is an automated confirmation email.
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}