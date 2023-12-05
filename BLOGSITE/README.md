# PERSONAL BLOGSITE - DHEERAJ G


## Production Deployment

### Several changes has to be made when migrating from local server to GitHub Static page.

1. In `/src/assets/config.json`, toggle `productionMode` to `true`.
2. If necessary, update the `productionUrl`.
3. Create the build using `npm run build`.
4. Build will be generated in `/dist`.
5. Copy subfolders of `assets` such as `images`, `resume`, `certifications` EXCEPT `conf` into `/dist/assets`.
6. Copy the CONTENTS of `/dist` into GitHub repository currently located in `D:\GitHub\DheerajGk21.github.io\`.
7. Commit the code.
8. Clear Cache and Hard Reload the browser atleast threetimes.


> Note : `/src/assets/config.json` has to be updated whenever new repositories are created for static websites.



## Local Deployment

1. In `/src/assets/config.json`, toggle `productionMode` to `false`.
2. Create the build using `npm run dev`.



## BlogSiteIndo.json structure for Reusability

```
{
    // Do not modify "excludeFields".
    "excludeFields": [
        "excludeFields",
        "name",
        "designation",
        "experience",
        "contact"
    ],

    // Name of Person.
    "name": "Dheeraj G",

    // Designation : Only update "value" field.
    "designation": {
        "label": "Designation",
        "value": "Software Engineering Specialist"
    },

    // Experience : Only update "value" fields.
    "experience": {
        "label": "Experience",
        "value": {
            "years": 2,
            "yearsPlus": "2+",
            "yearsBrief": "2+ Years",
            "yearsDetailed": "Experience of 2+ Years"
        }
    },

    // Skills : Only update "value" field.
    "skills": {
        "label": "Skill Highlights",
        "icon": "mdi-wrench-cog",
        "value": [
            "JavaScript",
            "VueJS Framework",
            "ReactJS"
        ]
    },

    // Work Experience : Only update "value" field.
    "work": {
        "label": "Work Experience",
        "icon": "mdi-briefcase-clock",
        "value": [
            {
                "company": "Dassault Systemes",
                "designation": "Software Engineering Specialist",
                "workDate": {
                    "from": "September 2021",
                    "to": "Present"
                },
                "location": "Bangalore",
                "role": "Full Stack Web Developer",
                "description": [
                    "Built RESTful Web Services in Java.",
                    "Exposure to NodeJS & NPM.",
                ]
            },
            {
                "company": "Contriver",
                "designation": "Operations Analyst Intern",
                ...
                ...
            }
        ]
    },

    // Education : Only update "value" field.
    "education": {
        "label": "Education",
        "icon": "mdi-school",
        "value": [
            {
                "degree": "Bachelor of Engineering",
                "major": "Computer Science",
                "institution": "Vidya Vikas Institute of Engineering and Technology",
                "studyDate": {
                    "from": "2017",
                    "to": "2021"
                },
                "grade": {
                    "label": "CGPA ",
                    "value": "8.1"
                },
                "location": "Mysore, Karnataka"
            },
            {
                "degree": "Pre-University | XII",
                "major": "Electronics",
                ...
                ...
            }
        ]
    },

    // Projects : Only update "value" field.
    "projects": {
        "label": "Projects",
        "icon": "mdi-clipboard-text-multiple",
        "value": [
            {
                "name": "NGF Physical Chemical Properties Prototype",
                "organization": "Dassault Systemes",
                "description": [
                    "Next-Generation Formulation widget.",
                    "Single-handedly worked on the application."
                ]
            },
            {
                "name": "Local Co-Ordinator Prototype",
                "organization": "Dassault Systemes",
                ...
                ...
            }
        ]
    },

    // Certifications : Only update "value" field.
    // In absense of Certificate Link, Description can be used.
    // Use either "description" or "link". Never use both.
    "certifications": {
        "label": "Certifications",
        "icon": "mdi-certificate",
        "value": [
            {
                "name": "IELTS",
                "organization": "IDP",
                "description": [
                    "Overall Band Score  : 7.5",
                    "Listening :  8.5",
                ]
            },
            {
                "name": "VueJS",
                "organization": "LinkedIn Learning",
                "link": "Vue-Essential-Training.pdf"
            }
        ]
    },

    // Languages : Only update "value" field.
    "languages": {
        "label": "Languages",
        "icon": "mdi-translate-variant",
        "value": [
            "English",
            "Hindi",
        ]
    },

    // Hobbies : Only update "value" field.
    "hobbies": {
        "label": "Hobbies",
        "icon": "mdi-weight-lifter",
        "value": [
            "Music",
            "Cricket"
        ]
    },

    // Contact : Only update "label", "value" & "type" fields in "details".
    // Types : "phone", "email", "link", "assetLink".
    // If "type" is not defined, it is regarded as "text".
    // If "assetLink", mention the path with filename and extention pointing to "/src/assets" folder.
    "contact": {
        "label": "Contact",
        "details": [
            {
                "label": "Phone",
                "value": "+91 7411811650",
                "type": "phone"
            },
            {
                "label": "Email",
                "value": "dheerajgk21@gmail.com",
                "type": "email"
            },
            {
                "label": "LinkedIn",
                "value": "https://www.linkedin.com/in/dheeraj-g-5b2a561b7/",
                "type": "link"
            },
            {
                "label": "Resume",
                "value": "/assets/resume/Dheeraj CV.pdf",
                "type": "assetLink"
            },
            {
                "label": "Address",
                "value": "2841/B, Ananthanilaya, Halladakeri, Mysuru, Karnataka, India - 570001"
            }
        ]
    },

    // Summary : Only update "brief" & "long" fields in "value".
    "summary": {
        "label": "Summary",
        "icon": "mdi-note-text",
        "name": "Dheeraj G",
        "value": {
            "brief": [
                "Software Engineering Specialist",
                "B.E graduate in Computer Science"
            ],
            "long": [
                "Software Engineering Specialist",
                "B.E graduate in Computer Science"
                "Fundamental knowledge of software design.",
            ]
        }
    }
}
```


## Update Profile Picture

1. In `/assets/images/`, insert the profile picture with `author.png` as filename and extension.
2. The Profile Picture image should be in PNG format.
