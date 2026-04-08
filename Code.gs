/**
 * AI Sales Intelligence Lead Magnet - Email Delivery
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com and create a new project
 * 2. Replace the default code with this file
 * 3. Deploy as Web App (Deploy > New deployment > Web app)
 * 4. Set "Execute as" = Me, "Who has access" = Anyone
 * 5. Copy the Web App URL and paste it in index.html
 */

const SEND_TO = Session.getActiveUser().getEmail();

const LEAD_MAGNET_CONTENT = `
# Top 10 AI Sales Tools 2026 - Free Checklist

**The Ultimate Guide to Automating Your Sales Pipeline with Artificial Intelligence**

---

## How to Use This Checklist

Mark each tool as you research it. Use this checklist to evaluate which tools fit your sales stack.

---

## The Top 10 AI Sales Tools for 2026

### [ ] 1. Gong.io
**Category:** Conversation Intelligence & Revenue Intelligence

**What it does:** Records, transcribes, and analyzes every sales call. Gong's AI identifies deal risks, winning phrases, and coaching opportunities automatically.

**Why it's essential:**
- 100% call coverage without manual review
- Win/loss analysis across deals
- Pipeline forecasting with AI accuracy

**Pricing Tiers:**
- Essential: Custom (typically $15,000+/year for teams)
- Advanced: Custom pricing
- Enterprise: Custom (requires sales contact)

**Best for:** Mid-market to enterprise sales teams with high-volume calling

---

### [ ] 2. Salesforce Einstein GPT
**Category:** CRM + AI Integration

**What it does:** Embeds generative AI directly into Salesforce CRM, automating write-ups, summarizing records, and predicting outcomes.

**Why it's essential:**
- AI-generated email drafts and responses
- Predictive lead scoring
- Automated CRM data entry

**Pricing Tiers:**
- Starter: $25/user/month
- Professional: $80/user/month
- Enterprise: $150/user/month
- Einstein GPT add-on: Additional cost

**Best for:** Companies already using Salesforce or moving to it

---

### [ ] 3. Lavender
**Category:** Email Intelligence & Personalization

**What it does:** Chrome extension that analyzes emails in real-time, scoring them for deliverability and providing AI-powered personalization suggestions.

**Why it's essential:**
- Increases email reply rates by 25%+
- Detects spam triggers and tone issues
- Integrates with LinkedIn for personalization data

**Pricing Tiers:**
- Free: Limited features
- Professional: $30/user/month
- Growth: $50/user/month
- Enterprise: Custom

**Best for:** SDRs and BDRs doing high-volume outbound email

---

### [ ] 4. Clay
**Category:** Data Enrichment & Outbound Automation

**What it does:** Combines 100+ data providers to enrich leads and automate personalized outreach at scale.

**Why it's essential:**
- Massive data enrichment in one tool
- AI-personalized email sequences
- Integrates with any CRM or outreach tool

**Pricing Tiers:**
- Starter: $74/month (up to 2,000 credits)
- Growth: $174/month (up to 5,000 credits)
- Scale: $374/month (up to 15,000 credits)
- Enterprise: Custom

**Best for:** Outbound teams needing rich lead data fast

---

### [ ] 5. Apollo.io
**Category:** Sales Intelligence & Engagement Platform

**What it does:** All-in-one platform combining database, prospecting, email sequencing, and calling in one tool.

**Why it's essential:**
- 275M+ contact database
- Built-in email/call sequences
- AI-powered scoring and routing

**Pricing Tiers:**
- Free: Limited features
- Starter: $36/user/month
- Professional: $72/user/month
- Organization: $108/user/month
- Enterprise: Custom

**Best for:** Startups and SMBs building outbound motion from scratch

---

### [ ] 6. Outreach
**Category:** Sales Engagement Platform

**What it does:** Market-leading sales engagement platform with AI-powered writing assistance and workflow automation.

**Why it's essential:**
- Automates multichannel sequences (email, phone, LinkedIn)
- AI writing assistant (RepConnect)
- Advanced analytics and forecasting

**Pricing Tiers:**
- Professional: $100/user/month
- Advanced: $150/user/month
- Enterprise: Custom

**Best for:** Mid-market to enterprise sales teams

---

### [ ] 7. HubSpot AI Tools
**Category:** CRM + Marketing + Sales AI

**What it does:** Suite of AI-powered features built into HubSpot CRM, including content generation, predictive lead scoring, and chatbot builders.

**Why it's essential:**
- AI-powered content creation
- Smart CRM that learns from data
- Free CRM tier available

**Pricing Tiers:**
- Free: Basic CRM
- Starter: $50/month
- Professional: $890/month
- Enterprise: $3,200/month
- AI add-ons: Additional cost

**Best for:** SMBs and mid-market using or adopting HubSpot

---

### [ ] 8. ZoomInfo
**Category:** B2B Data & Intelligence

**What it does:** Provides verified B2B contact and company data for prospecting and outreach.

**Why it's essential:**
- Most accurate B2B database
- Intent data to identify buyers
- Direct dial numbers and verified emails

**Pricing Tiers:**
- Web Finder: Custom
- Growth: Custom
- Enterprise: Custom (typically $15,000+/year)

**Best for:** Enterprise and mid-market teams with budget for premium data

---

### [ ] 9. Drift
**Category:** AI-Powered Conversational Marketing

**What it does:** Uses AI chatbots to qualify website visitors and book meetings automatically.

**Why it's essential:**
- 24/7 lead qualification
- Automated meeting booking (Calendly integration)
- Revenue attribution for chat conversations

**Pricing Tiers:**
- Standard: Custom
- Advanced: Custom
- Enterprise: Custom

**Best for:** Companies with high website traffic needing instant qualification

---

### [ ] 10. Clari
**Category:** Revenue Operations & Forecasting

**What it does:** Connects to your CRM and calendar to provide AI-powered pipeline inspection and revenue forecasting.

**Why it's essential:**
- Eliminates manual forecast updates
- Flags at-risk deals automatically
- Board-ready revenue reporting

**Pricing Tiers:**
- Revenue Intelligence: Custom
- Revenue Workflows: Custom
- Enterprise: Custom

**Best for:** VP Sales, RevOps leaders, and executives needing forecast accuracy

---

## Quick Reference: Choosing Your Stack

### Startup / Bootstrapped (Budget under $500/month)
- Apollo.io (all-in-one database + sequences)
- Lavender (email optimization)
- Free CRM tier (HubSpot or HubSpot Starter)

### SMB / Growth Stage ($500-2,000/month)
- Apollo.io + Outreach or Sales Engagement
- Gong (for teams doing high-volume calls)
- Clay (for data enrichment)

### Mid-Market / Enterprise ($2,000+/month)
- Full Gong platform
- Salesforce Einstein GPT
- Clari for forecasting
- ZoomInfo for premium data

---

## Action Steps

1. [ ] Audit your current sales stack
2. [ ] Identify your biggest bottleneck (leads, conversion, forecasting?)
3. [ ] Pick 2-3 tools maximum to test this quarter
4. [ ] Set up integrations with your CRM first
5. [ ] Track metrics before and after implementation

---

## Bonus: Quick Win

Combine **Clay** (enrichment) + **Lavender** (email) + **Apollo** (sequences) for a powerful outbound stack under $200/month.

---

**Want a deeper dive?** Get the full AI Sales Intelligence Competitor Report for detailed pricing comparisons, feature matrices, and implementation guides.

**Visit:** https://deivithi.github.io/ai-sales-intelligence/

---

*Last updated: April 2026*
`;

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    
    if (!email || !email.includes('@')) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: 'Invalid email address' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    console.log('New lead captured:', email);
    
    MailApp.sendEmail({
      to: email,
      subject: 'Your Top 10 AI Sales Tools 2026 Checklist',
      htmlBody: convertMarkdownToHtml(LEAD_MAGNET_CONTENT),
      name: 'AI Sales Intelligence'
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Checklist sent!' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: 'Error sending email' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function convertMarkdownToHtml(markdown) {
  let html = markdown
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color: #6366f1;">$1</a>');
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    h1, h2, h3 { color: #1a1a2e; }
    h1 { font-size: 24px; border-bottom: 2px solid #6366f1; padding-bottom: 10px; }
    h2 { font-size: 20px; margin-top: 24px; color: #6366f1; }
    h3 { font-size: 16px; margin-top: 16px; }
    p { margin: 12px 0; }
    li { margin: 8px 0; }
    a { color: #6366f1; text-decoration: none; }
    .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <p>${html}</p>
  <div class="footer">
    <p>You're receiving this because you signed up for the AI Sales Intelligence checklist.</p>
    <p><a href="https://deivithi.github.io/ai-sales-intelligence/">View Full Report</a></p>
  </div>
</body>
</html>
  `;
}

function testEmail() {
  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Test: Your Top 10 AI Sales Tools 2026 Checklist',
    body: LEAD_MAGNET_CONTENT,
    name: 'AI Sales Intelligence'
  });
  console.log('Test email sent!');
}