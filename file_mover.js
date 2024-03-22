const fs = require('fs');
const path = require('path');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const parentFolder = process.cwd(); // Get the current working directory as the parent folder

function moveFilesByExtension(extension) {
    const resultFolder = path.join(parentFolder, 'result');

    // Create the 'result' folder if it doesn't exist
    if (!fs.existsSync(resultFolder)) {
        fs.mkdirSync(resultFolder);
    }

    // Recursively search for files with the specified extension
    function searchAndMove(dirPath) {
        const files = fs.readdirSync(dirPath);

        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                searchAndMove(filePath); // Recursively search subdirectories
            } else if (path.extname(filePath) === extension) {
                const newFilePath = path.join(resultFolder, file);
                fs.renameSync(filePath, newFilePath); // Move the file to the 'result' folder
            }
        }
    }

    searchAndMove(parentFolder);
}

readline.question('Enter the file extension (e.g., .mp4): ', (extension) => {
    moveFilesByExtension(extension);
    console.log(`All files with extension ${extension} have been moved to the 'result' folder.`);
    readline.close();
});
