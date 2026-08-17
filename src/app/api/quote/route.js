import { transporter } from "@/lib/mailer";
import {
  adminEmailTemplate,
  careerEmailTemplate,
  autoReplyTemplate,
  careerAutoReplyTemplate,
  
} from "@/lib/emailTemplates";

export const runtime = "nodejs";

const MAX_CV_SIZE = 5 * 1024 * 1024;

const allowedServices = [
  "Ocean Freight",
  "Air Freight",
  "Inland Transportation",
  "Customs Clearance",
  "Import on Behalf of Others",
];
const allowedInquiryTypes = [
  "Existing Customer",
  "General Inquiry",
  "Partnership",
  "Shipment Inquiry",
  "Other",
];

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateCommonFields(body) {
  if (!body.name) {
    return "Full name is required.";
  }

  if (!body.email || !isValidEmail(body.email)) {
    return "A valid email address is required.";
  }

  if (!body.phone) {
    return "Phone number is required.";
  }

  return null;
}

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";

    /*
     * CAREERS FORM
     */
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();

      const body = {
        formType: clean(formData.get("formType")),
        name: clean(formData.get("name")),
        email: clean(formData.get("email")),
        phone: clean(formData.get("phone")),
        position: clean(formData.get("position")),
        experience: clean(formData.get("experience")),
        linkedin: clean(formData.get("linkedin")),
        message: clean(formData.get("message")),
      };

      if (body.formType !== "career") {
        return Response.json(
          {
            success: false,
            message: "Invalid form type.",
          },
          { status: 400 }
        );
      }

      const commonError = validateCommonFields(body);

      if (commonError) {
        return Response.json(
          {
            success: false,
            message: commonError,
          },
          { status: 400 }
        );
      }

      if (!body.position) {
        return Response.json(
          {
            success: false,
            message: "Position is required.",
          },
          { status: 400 }
        );
      }

      const cv = formData.get("cv");

      if (!cv || typeof cv.arrayBuffer !== "function") {
        return Response.json(
          {
            success: false,
            message: "Please upload a CV.",
          },
          { status: 400 }
        );
      }

      if (cv.size > MAX_CV_SIZE) {
        return Response.json(
          {
            success: false,
            message: "CV must be 5 MB or smaller.",
          },
          { status: 400 }
        );
      }

      if (cv.type !== "application/pdf") {
        return Response.json(
          {
            success: false,
            message: "Only PDF CV files are accepted.",
          },
          { status: 400 }
        );
      }

      const fileBuffer = Buffer.from(await cv.arrayBuffer());

      // Send application to HR
      await transporter.sendMail({
        from: `"AM Logistics Careers" <${process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO,
        replyTo: body.email,
        subject: `New Job Application - ${body.position}`,
        html: careerEmailTemplate(body),
        attachments: [
          {
            filename: cv.name || "CV.pdf",
            content: fileBuffer,
            contentType: "application/pdf",
          },
        ],
      });

      // Send confirmation to applicant
      try {
        await transporter.sendMail({
          from: `"AM Logistics" <${process.env.SMTP_USER}>`,
          to: body.email,
          subject: "Application Received - AM Logistics",
          html: careerAutoReplyTemplate(body.name, body.position),
        });
      } catch (autoReplyError) {
        console.error(
          "Career auto-reply email failed:",
          autoReplyError
        );
      }

      return Response.json({
        success: true,
        message: "Application submitted successfully.",
      });
    }

    /*
     * QUOTE / CONTACT FORMS
     */
    const body = await req.json();

    const formType = clean(body.formType);

    if (!["quote", "contact"].includes(formType)) {
      return Response.json(
        {
          success: false,
          message: "Invalid form type.",
        },
        { status: 400 }
      );
    }

   const data = {
  formType,
  name: clean(body.name),
  company: clean(body.company),
  email: clean(body.email),
  phone: clean(body.phone),
  origin: clean(body.origin),
  destination: clean(body.destination),
  service: clean(body.service || body.shipmentType),
  inquiryType: clean(body.inquiryType),
  cargo: clean(body.cargo),
  message: clean(body.message),
};

    const commonError = validateCommonFields(data);

    if (commonError) {
      return Response.json(
        {
          success: false,
          message: commonError,
        },
        { status: 400 }
      );
    }

    if (formType === "quote") {
      if (!data.origin) {
        return Response.json(
          {
            success: false,
            message: "Origin is required.",
          },
          { status: 400 }
        );
      }

      if (!data.destination) {
        return Response.json(
          {
            success: false,
            message: "Destination is required.",
          },
          { status: 400 }
        );
      }

      if (!allowedServices.includes(data.service)) {
        return Response.json(
          {
            success: false,
            message: "Please select a valid service.",
          },
          { status: 400 }
        );
      }
    }

if (formType === "contact") {
  if (!allowedInquiryTypes.includes(data.inquiryType)) {
    return Response.json(
      {
        success: false,
        message: "Please select a valid inquiry type.",
      },
      { status: 400 }
    );
  }
}

    

    /*
     * ADMIN EMAIL
     */
    await transporter.sendMail({
      from: `"AM Logistics Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: data.email,
      subject:
        formType === "quote"
          ? "New Shipment Quote Request - AM Logistics"
          : "New Contact Message - AM Logistics",
      html: adminEmailTemplate(data),
    });

    /*
     * CUSTOMER AUTO-REPLY
     */
    await transporter.sendMail({
      from: `"AM Logistics" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "We Received Your Request - AM Logistics",
      html: autoReplyTemplate(data.name),
    });

    return Response.json({
      success: true,
      message: "Request submitted successfully.",
    });
  } catch (error) {
    console.error("Form submission error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to process your request at this time.",
      },
      { status: 500 }
    );
  }
}