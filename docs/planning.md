# **Project-VOICE Website Development Guidelines & Task List**

## **Objective**
The Project-VOICE website will serve as a central hub to:
- Educate the public about our mission to challenge biases about non-verbal children.
- Showcase our research progress and findings in the fields of biomedical engineering, neurology, and AI.
- Provide resources for potential contributors, including research papers, literature reviews, coding experiments, and analyses.
- Encourage collaboration by making our project open-source and accessible.

## **Website Structure & Features**

### 1. **Homepage**
   - **Mission Statement**: A clear and concise statement outlining the goals of Project-VOICE, emphasizing the importance of challenging biases around non-verbal communication.
   - **Overview**: A summary of the project, including our approach, the team, and our multidisciplinary methods (computer science, biomedical engineering, neurology).
   - **Impact Section**: Highlight the potential impact of our findings on academic and social perspectives of non-verbal communication.
   - **Call to Action (CTA)**: Encouragement for interested researchers, developers, and other contributors to join the project.

### 2. **About Us**
   - **Team Introduction**: Short bios of the core team members with their expertise.
   - **Our Story**: How Project-VOICE started and what we aim to achieve.
   - **Partners & Sponsors**: If applicable, mention any organizations or universities supporting the project.

### 3. **Research Database**
   - **Research Papers**: A database to store and categorize research papers related to non-verbal communication and brain monitoring.
   - **Literature Reviews**: Summaries, reviews, and critiques of the research papers.
   - **Additional Notes**: Any relevant notes from our team’s research.

   **Technical Features**:
   - **Search & Filter**: Users should be able to search by keywords, authors, publication date, and research topics.
   - **Upload & Categorization**: A form for adding new papers and notes, with tags for easy categorization.
   - **PDF Viewer**: Integrated viewer for PDF documents, allowing users to preview papers without download.

### 4. **Code Experiment Database**
   - **Experiments**: A separate database to store and showcase all code experiments (e.g., Jupyter Notebooks).
   - **Analysis & Explanations**: A detailed explanation of each experiment, including goals, results, and implications.
   - **Code Repository Links**: Links to GitHub or other platforms for full access to the code.

   **Technical Features**:
   - **Search & Filter**: Users should be able to search by experiment type, date, and research topic.

### 5. **Blog / News**
   - Regular updates on our progress, key findings, and any significant project milestones.

### 6. **Get Involved**
   - **Open Source Contribution Guide**: A clear guide on how to get involved, including prerequisites, best practices, and how to contribute to the code or research.
   - **Community Forum**: A discussion space for contributors to exchange ideas and ask questions.
   - **Volunteer Sign-Up**: Form for interested parties to join our research or website development efforts.

### 7. **Resources**
   - **Glossary**: Definitions of specialized terms related to neuroscience, AI, and non-verbal communication.
   - **Data & Tools**: Links to public datasets, software, and tools our team uses or recommends.
   - **Reading List**: Recommended reading and other educational resources on related topics.

### 8. **Contact Us**
   - Contact form for general inquiries.
   - Specific contact information for different aspects of the project (e.g., research, web development, community outreach).

## **Development Guidelines**

### 1. **Design & Aesthetics**
   - Keep the design **clean, minimal, and accessible**, focusing on ease of navigation.
   - Use **contrasting colors** for clarity, with an emphasis on readability for the research materials.
   - Ensure the website is **responsive** and accessible across different devices (mobile, tablet, desktop).
   - Adhere to **accessibility standards** (e.g., WCAG), including alt text for images, proper heading structure, and keyboard navigability.

### 2. **Technical Requirements**
   - Use **modern web technologies** (HTML5, CSS3, Bootstrap.JavaScript/React for the front end).
   - For the backend, consider **Django/Flask** (Python) or **Node.js** or **php** for handling the database and user interactions.
   - Utilize a **SQL database** to store research papers, notes, and code experiments.

### 3. **Content Management**
   - Use Markdown for posts and articles to allow easy editing and formatting.
   - Standardize formatting for research papers, literature reviews, and experiment explanations.
   - Implement user roles (Admin, Editor, Contributor) to manage content submissions and edits effectively.

### 4. **Security & Privacy**
   - Ensure proper **authentication** and access controls, particularly for uploading and editing sensitive content.
   - Adhere to data privacy standards when handling user information.
   - Enable **HTTPS** for secure browsing.
   - Regularly back up the databases to prevent data loss.

### 5. **Open Source Contribution Guidelines**
   - Use **GitHub** for version control, with a clear branching strategy (main, dev, feature branches).
   - Create a **README.md** and **CONTRIBUTING.md** file to guide contributors.

## **Task List**

### **Phase 1 - Planning & Setup**
   - [ ] Define the sitemap and information architecture for the website.
   - [ ] Choose a tech stack (Frontend & Backend) and set up the development environment.
   - [ ] Create wireframes for the main pages (Homepage, About Us, Research Database, Code Experiment Database).

### **Phase 2 - Core Development**
   - [ ] Develop the Homepage, About Us, and Get Involved pages.
   - [ ] Implement the Research Database with search/filter capabilities.
   - [ ] Create the Code Experiment Database with version tracking and embedding options.

### **Phase 3 - Content & Testing**
   - [ ] Populate the Research Database and Code Experiment Database with initial content.
   - [ ] Perform usability testing and get feedback from our team.
   - [ ] Test for compatibility across devices and browsers.
   - [ ] Ensure accessibility standards are met.

### **Phase 4 - Deployment & Maintenance**
   - [ ] Deploy the website to a web hosting service (Github Pages).
   - [ ] Implement security measures (SSL certificate, secure authentication).
   - [ ] Continuously update the website based on feedback and new content.
