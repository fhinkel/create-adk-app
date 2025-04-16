#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const directoryName = process.argv[2]; // Get the first argument

if (!directoryName) {
    console.log('Please provide a directory name as an argument.');
    process.exit(1);
}

fs.mkdirSync(directoryName);

const writeFile = (name, fileContent) => {
    const filePath = path.join(directoryName, name);
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error('Error creating file:', err);
            process.exit(1);
        }
        console.log(`File ${filePath} has been created successfully.`);
    })
};

writeFile('__init__.py', 'from . import agent')
writeFile('agent.py', '')
writeFile('.env', `GOOGLE_GENAI_USE_VERTEXAI=TRUE
GOOGLE_CLOUD_PROJECT=YOUR_PROJECT_ID
GOOGLE_CLOUD_LOCATION=LOCATION`)