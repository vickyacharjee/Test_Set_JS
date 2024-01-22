const fs=require('fs');
//so these are the methods in FS =File-System
// // {
//   appendFile: [Function: appendFile],
//   appendFileSync: [Function: appendFileSync],
//   access: [Function: access],
//   accessSync: [Function: accessSync],
//   chown: [Function: chown],
//   chownSync: [Function: chownSync],
//   chmod: [Function: chmod],
//   chmodSync: [Function: chmodSync],
//   close: [Function: close],
//   closeSync: [Function: closeSync],
//   copyFile: [Function: copyFile],
//   copyFileSync: [Function: copyFileSync],
//   cp: [Function: cp],
//   cpSync: [Function: cpSync],
//   createReadStream: [Function: createReadStream],
//   createWriteStream: [Function: createWriteStream],
//   exists: [Function: exists],
//   existsSync: [Function: existsSync],
//   fchown: [Function: fchown],
//   fchownSync: [Function: fchownSync],
//   fchmod: [Function: fchmod],
//   fchmodSync: [Function: fchmodSync],
//   fdatasync: [Function: fdatasync],
//   fdatasyncSync: [Function: fdatasyncSync],
//   fstat: [Function: fstat],
//   fstatSync: [Function: fstatSync],
//   fsync: [Function: fsync],
//   fsyncSync: [Function: fsyncSync],
//   ftruncate: [Function: ftruncate],
//   ftruncateSync: [Function: ftruncateSync],
//   futimes: [Function: futimes],
//   futimesSync: [Function: futimesSync],
//   lchown: [Function: lchown],
//   lchownSync: [Function: lchownSync],
//   lchmod: [Function: lchmod],
//   lchmodSync: [Function: lchmodSync],
//   link: [Function: link],
//   linkSync: [Function: linkSync],
//   lstat: [Function: lstat],
//   lstatSync: [Function: lstatSync],
//   lutimes: [Function: lutimes],
//   lutimesSync: [Function: lutimesSync],
//   mkdir: [Function: mkdir],
//   mkdirSync: [Function: mkdirSync],
//   mkdtemp: [Function: mkdtemp],
//   mkdtempSync: [Function: mkdtempSync],
//   open: [Function: open],
//   openSync: [Function: openSync],
//   openAsBlob: [Function: openAsBlob],
//   readdir: [Function: readdir],
//   readdirSync: [Function: readdirSync],
//   read: [Function: read],
//   readSync: [Function: readSync],
//   readv: [Function: readv],
//   readvSync: [Function: readvSync],
//   readFile: [Function: readFile],
//   readFileSync: [Function: readFileSync],
//   readlink: [Function: readlink],
//   readlinkSync: [Function: readlinkSync],
//   realpath: [Function: realpath] { native: [Function (anonymous)] },
//   realpathSync: [Function: realpathSync] { native: [Function (anonymous)] },
//   rename: [Function: rename],
//   renameSync: [Function: renameSync],
//   rm: [Function: rm],
//   rmSync: [Function: rmSync],
//   rmdir: [Function: rmdir],
//   rmdirSync: [Function: rmdirSync],
//   stat: [Function: stat],
//   statfs: [Function: statfs],
//   statSync: [Function: statSync],
//   statfsSync: [Function: statfsSync],
//   symlink: [Function: symlink],
//   symlinkSync: [Function: symlinkSync],
//   truncate: [Function: truncate],
//   truncateSync: [Function: truncateSync],
//   unwatchFile: [Function: unwatchFile],
//   unlink: [Function: unlink],
//   unlinkSync: [Function: unlinkSync],
//   utimes: [Function: utimes],
//   utimesSync: [Function: utimesSync],
//   watch: [Function: watch],
//   watchFile: [Function: watchFile],
//   writeFile: [Function: writeFile],
//   writeFileSync: [Function: writeFileSync],
//   write: [Function: write],
//   writeSync: [Function: writeSync],
//   writev: [Function: writev],
//   writevSync: [Function: writevSync],
//   Dirent: [class Dirent],
//   Stats: [Function: Stats],
//   ReadStream: [Getter/Setter],
//   WriteStream: [Getter/Setter],
//   FileReadStream: [Getter/Setter],
//   FileWriteStream: [Getter/Setter],
//   _toUnixTimestamp: [Function: toUnixTimestamp],
//   Dir: [class Dir],
//   opendir: [Function: opendir],
//   opendirSync: [Function: opendirSync],
//   F_OK: 0,
//   R_OK: 4,
//   W_OK: 2,
//   X_OK: 1,
//   constants: [Object: null prototype] {
//     UV_FS_SYMLINK_DIR: 1,
//     UV_FS_SYMLINK_JUNCTION: 2,
//     O_RDONLY: 0,
//     O_WRONLY: 1,
//     O_RDWR: 2,
//     UV_DIRENT_UNKNOWN: 0,
//     UV_DIRENT_FILE: 1,
//     UV_DIRENT_DIR: 2,
//     UV_DIRENT_LINK: 3,
//     UV_DIRENT_FIFO: 4,
//     UV_DIRENT_SOCKET: 5,
//     UV_DIRENT_CHAR: 6,
//     UV_DIRENT_BLOCK: 7,
//     EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
//     EXTENSIONLESS_FORMAT_WASM: 1,
//     S_IFMT: 61440,
//     S_IFREG: 32768,
//     S_IFDIR: 16384,
//     S_IFCHR: 8192,
//     S_IFBLK: 24576,
//     S_IFIFO: 4096,
//     S_IFLNK: 40960,
//     S_IFSOCK: 49152,
//     O_CREAT: 512,
//     O_EXCL: 2048,
//     UV_FS_O_FILEMAP: 0,
//     O_NOCTTY: 131072,
//     O_TRUNC: 1024,
//     O_APPEND: 8,
//     O_DIRECTORY: 1048576,
//     O_NOFOLLOW: 256,
//     O_SYNC: 128,
//     O_DSYNC: 4194304,
//     O_SYMLINK: 2097152,
//     O_NONBLOCK: 4,
//     S_IRWXU: 448,
//     S_IRUSR: 256,
//     S_IWUSR: 128,
//     S_IXUSR: 64,
//     S_IRWXG: 56,
//     S_IRGRP: 32,
//     S_IWGRP: 16,
//     S_IXGRP: 8,
//     S_IRWXO: 7,
//     S_IROTH: 4,
//     S_IWOTH: 2,
//     S_IXOTH: 1,
//     F_OK: 0,
//     R_OK: 4,
//     W_OK: 2,
//     X_OK: 1,
//     UV_FS_COPYFILE_EXCL: 1,
//     COPYFILE_EXCL: 1,
//     UV_FS_COPYFILE_FICLONE: 2,
//     COPYFILE_FICLONE: 2,
//     UV_FS_COPYFILE_FICLONE_FORCE: 4,
//     COPYFILE_FICLONE_FORCE: 4
//   },
//   promises: [Getter]
// }

// basic Methods in fs module are:
// Reading Files:

// fs.readFile(path, options, callback): Reads the contents of a file.
// fs.readFileSync(path, options): Synchronously reads the contents of a file.
// Writing Files:

// fs.writeFile(file, data, options, callback): Writes data to a file, replacing the file if it already exists.
// fs.writeFileSync(file, data, options): Synchronously writes data to a file.
// Appending to Files:

// fs.appendFile(file, data, options, callback): Appends data to a file.
// fs.appendFileSync(file, data, options): Synchronously appends data to a file.
// File Information:

// fs.stat(path, callback): Gets information about a file.
// fs.statSync(path): Synchronously gets information about a file.
// fs.readdir(path, callback): Reads the contents of a directory.
// fs.readdirSync(path): Synchronously reads the contents of a directory.
// Deleting Files or Directories:

// fs.unlink(path, callback): Deletes a file.
// fs.unlinkSync(path): Synchronously deletes a file.
// fs.rmdir(path, callback): Deletes a directory.
// fs.rmdirSync(path): Synchronously deletes a directory.
// fs.rm(path, options, callback): Deletes a file or directory (introduced in Node.js 14).
// fs.rmSync(path, options): Synchronously deletes a file or directory (introduced in Node.js 14).
// Renaming or Moving Files:

// fs.rename(oldPath, newPath, callback): Renames or moves a file or directory.
// fs.renameSync(oldPath, newPath): Synchronously renames or moves a file or directory.
// File System Watchers:

// fs.watch(filename, options, listener): Watches for changes on a file or directory.
// Creating Directories:

// fs.mkdir(path, options, callback): Creates a directory.
// fs.mkdirSync(path, options): Synchronously creates a directory.






// program starts here

//creating a new File 
// fs.writeFileSync('./test.txt','Hey there, here we have created file using writefilesync method');//success 2 parameters [fileName] [fileContent]

//Reading an Existing form test.txt
// const ReadName=fs.readFileSync('./test.txt','utf8') 
// console.log(ReadName);//Success

//using appendFileSync
// fs.appendFileSync("./test.txt",`${Date.now().toString()} \n`);

//cpSync for copying form an existing to an new one
// fs.copyFileSync('./test.txt','./copy.txt')//success

//unLinkSync for deleting
// fs.unlinkSync('./test.txt');

//status of a file using statSync
// const stat=fs.statSync('./test.txt').isFile;
// console.log(stat);

//mkdir for making an directory
// fs.mkdirSync('mkdirFile2');

//rmdirsync for deleting a folder
// fs.rmdirSync('./mkdirFile');

