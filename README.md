# file-mover

This Node.js script helps you move files with a specific extension from a parent folder and its subdirectories to a new "result" folder. It's a handy tool for organizing your files and keeping them tidy.

## Features

- **User-friendly:** Prompts the user for the file extension and provides clear feedback on the operation's completion.
- **Recursive search:** Traverses the parent folder and its subdirectories to find all files with the specified extension.
- **Cross-platform compatibility:** Works seamlessly on different operating systems.
- **Robust error handling:** Checks for the existence of the "result" folder before creating it to prevent errors.

## Installation

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

1. Open a terminal in the parent folder where you want to move files from.
2. Run the script using `node move_files.js`.
3. Enter the desired file extension when prompted (e.g., `.mp4`).

The script will create the "result" folder and move all files with the specified extension from the parent folder and its subdirectories to the "result" folder.

## Example

Suppose you have a folder structure like this:
parent_folder/
├── subfolder1/
│ ├── video1.mp4
│ └── document.txt
├── subfolder2/
│ ├── image.jpg
│ └── video2.mp4
└── main_video.mp4
If you run the script and enter `.mp4` as the file extension, the following will happen:

1. A new folder named "result" will be created in the `parent_folder`.
2. All `.mp4` files (`video1.mp4`, `video2.mp4`, and `main_video.mp4`) will be moved to the "result" folder.

The final folder structure will look like this:
parent_folder/
├── result/
│ ├── video1.mp4
│ ├── video2.mp4
│ └── main_video.mp4
├── subfolder1/
│ └── document.txt
└── subfolder2/
└── image.jpg

## Contributing

If you have any suggestions or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
