import multer from 'multer';

const storage = multer.memoryStorage(); // Store files temporarily in memory
const upload = multer({ storage });

export default upload; 