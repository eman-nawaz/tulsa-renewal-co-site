# Tulsa Renewal Co. Website – Capstone Project

This repository contains a responsive, multi-page website developed for **Tulsa Renewal Co.**, a newly established real estate and renovation business based in Tulsa, Oklahoma. The site provides a professional digital presence for the company as it begins branding and connecting with clients. This capstone project showcases the development of a full web solution tailored to meet the business’s practical needs and growth potential.

---

## Project Overview

Tulsa Renewal Co. focuses on property renovation and real estate investment. The goal of this website was to establish a central online location where the company could:

- Present its services and mission
- Display recently renovated properties
- Collect messages and leads through a contact form
- Build a mailing list via an email newsletter form
- Show the physical locations of their renovations using Google Maps

This website was built using HTML, CSS, and JavaScript with Firebase Firestore for data storage. It is deployed live on GitHub Pages.

---

## Requirements

### Functional Requirements

- Viewable homepage, about us, services, gallery, and contact pages
- Individual property pages with descriptions and full image galleries
- Contact form with submissions saved to Firebase Firestore
- Newsletter sign-up form with Firebase integration for email collection
- Embedded Google Map with property location markers

### Non-Functional Requirements

- **Portability**: Works across all major browsers (Chrome, Safari, Firefox, Edge)
- **Maintainability**: Code is modular, well-commented, and organized
- **Reliability**: Validations prevent incomplete form submissions
- **Error Handling**: User input forms include validation and error messages to guide user correction
- **Scalability**: New pages and properties can be added easily
- **Performance**: Images are optimized; hosted on fast GitHub Pages
- **Reusability**: Layout and form structure can be adapted for other properties or businesses
- **Flexibility**: Designed to evolve with the business over time

---

## Integration Overview

### Firebase (Firestore)

- **Contact Form**: Stores user-submitted name, email, phone, address, message to the `contact_submissions` collection with timestamps
- **Newsletter Sign-Up**: Stores email addresses to the `subscribers` collection with timestamps

### 🗘️ Google Maps

A customized Google Map is embedded into the gallery page to display the geographic locations of:

- Midtown Manor
- Rose Cottage
- Grove Getaway

These markers provide users with visual context for the business's projects.

---

## Modeling

The `/modeling` folder includes the following UML diagrams:

- Use Case Diagram
- Class Diagram
- Activity Diagram
- Entity Relationship Diagram

These diagrams were created in draw.io to visualize the system's structure and interactions.

---

## Source Files

All files needed to install, run, and modify the website are included:

- `index.html` – Homepage
- `aboutus.html`, `services.html`, `gallery.html`, `contact.html`
- `midtown-manor.html`, `rose-cottage.html`, `grove-getaway.html`
- `index.js` – Firebase configuration
- `firebaseImport.js` – Firestore operations and form handling
- `/property images/` – All property images
- `/images/` - Images provided by the business
- `/modeling/` – UML diagrams
- `README.md`

---

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tulsa-renewal-co-site.git
   ```

2. Navigate to the project folder:
   ```bash
   cd tulsa-renewal-co-site
   ```

3. Open `index.html` in your browser, or run a local server:
   ```bash
   # Python 3.x
   python -m http.server
   ```

4. Visit `http://localhost:8000` to view the site locally.

---

## Testing

### Manual Testing

- All page links were tested for accuracy
- Property pages load correctly with complete image galleries
- Forms were tested with valid and invalid inputs

### Functional Testing

- Contact form writes submissions to the `contact_submissions` Firestore collection
- Newsletter form validates email and saves to `subscribers` Firestore collection
- Google Maps markers appear at correct coordinates

### Quality Assurance Plan

- **Unit testing**: Performed after building each form and page component
- **Integration testing**: Confirmed data flow between form inputs and Firebase
- **User testing**: Conducted with peers and client for feedback

---

## Acceptance Criteria

- Fully functional and responsive website
- All specified pages are complete and navigable
- Form submissions work and save to Firestore
- No broken links or missing content
- Approved by the business owner

---

## Project Lead

**Eman Nawaz**  
Capstone Project – Spring 2025  
Web Developer | Designer | Content Writer | QA Tester  
[GitHub Profile](https://github.com/eman-nawaz)

---

## Project Structure

```
.
├── index.html
├── aboutus.html
├── services.html
├── gallery.html
├── contact.html
├── midtown-manor.html
├── rose-cottage.html
├── grove-getaway.html
├── index.js
├── firebaseImport.js
├── style.css
├── /images/
│   ├── midtown-manor/
│   ├── rose-cottage/
│   └── grove-getaway/
├── /modeling/
│   ├── use-case-diagram.png
│   ├── class-diagram.png
│   ├── activity-diagram.png
│   └── erd.png
└── README.md
```

---

## Conclusion

This website provides a strong foundation for Tulsa Renewal Co.'s digital presence. It serves as a strategic tool for showcasing renovation work, collecting client leads, and increasing visibility as the company continues to grow.


